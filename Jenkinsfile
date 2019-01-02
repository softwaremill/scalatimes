#!/usr/bin/env groovy

properties([
        buildDiscarder(logRotator(artifactDaysToKeepStr: '', artifactNumToKeepStr: '', daysToKeepStr: '', numToKeepStr: '10')),
        overrideIndexTriggers(false),
        pipelineTriggers([
                [$class: 'GitHubPushTrigger']
        ])
])

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
        } catch (Exception e) {
            currentBuild.result = 'FAILURE'
        }
    }
}
