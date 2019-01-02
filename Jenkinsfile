#!/usr/bin/env groovy

properties([
        buildDiscarder(logRotator(artifactDaysToKeepStr: '', artifactNumToKeepStr: '', daysToKeepStr: '', numToKeepStr: '10')),
        overrideIndexTriggers(false),
        pipelineTriggers([
                [$class: 'GitHubPushTrigger']
        ])
])

String getDockerTag() {
    return sh(script: 'git describe --always --tags --abbrev=7', returnStdout: true)?.trim()
}

def label = "docker-${UUID.randomUUID().toString()}"
def serviceAccount = "sml-internal-jenkins"
podTemplate(label: label, yaml: """
apiVersion: v1
kind: Pod
spec:
  serviceAccountName: ${serviceAccount}
  securityContext:
    runAsUser: 0
  volumes:
    - name: dockersock
      hostPath:
          path: /var/run/docker.sock
  containers:
  - name: docker
    resources:
    image: docker:stable
    command:
    - cat
    tty: true
    volumeMounts:
      - name: dockersock
        mountPath: "/var/run/docker.sock"
  - name: kubectl
    image: lachlanevenson/k8s-kubectl
    command:
    - cat
    tty: true
"""
) {
    node(label) {
        try {
            stage('Checkout') {
                checkout scm
                dockerTag = getDockerTag()
            }
            container('docker') {
                stage('Build docker image') {
                    sh "docker build -t softwaremill/scalatimes:${dockerTag} ."
                }
            }
            if (env.BRANCH_NAME == 'master' || env.BRANCH_NAME == 'ci-pipeline') {
                container('docker') {
                    stage('Publish docker image') {
                        withCredentials([usernamePassword(credentialsId: 'docker-hub-credentials', passwordVariable: 'DOCKER_PASSWORD', usernameVariable: 'DOCKER_USERNAME')]) {
                            sh """
                                docker login -u \${DOCKER_USERNAME} -p \${DOCKER_PASSWORD}
                                docker push softwaremill/scalatimes:${dockerTag}
                            """

                        }
                    }
                }
                container('kubectl') {
                    stage('Deploy') {
                        sh """
                            sed -i "s;\\(softwaremill/scalatimes:\\)latest;\\1${dockerTag};g" k8s/deployment.yml
                            kubectl 
                        """
                    }
                }
            }
        } catch (Exception e) {
            currentBuild.result = 'FAILURE'
        }
    }
}
