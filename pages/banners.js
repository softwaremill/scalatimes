import Page from "../layouts/main";

export default () => {
    return <Page>
        <div className="banners">
            <div className="spread-the-word">
                <div className="container">
                    <div className="mkt-header">
                        Spread the word about Scala Times!
                    </div>
                    <div className="mkt-body">
                        Would you like to reveal your source of weekly Scala news? Get a banner on your web! Just follow the below
                        simple steps:
                    </div>
                    <div className="row mkt-icons banners-icons">
                        <div className="col-sm-4 col-xs-12 px-4">
                            <div className="mkt-icon center-block">
                                <img src="/static/img/download.png"/>
                            </div>
                            <p>Download the banner you like the most.</p>
                        </div>
                        <div className="col-sm-4 col-xs-12 px-4">
                            <div className="mkt-icon center-block">
                                <img src="/static/img/desktop.png"/>
                            </div>
                            <p>Post it on your page.</p>
                        </div>
                        <div className="col-sm-4 col-xs-12 px-4">
                            <div className="mkt-icon center-block" style={{paddingTop:"4rem"}}>
                                <img src="/static/img/st_250px.png"/>
                            </div>
                            <p>Link the banner to http://scalatimes.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container get-banners my-5">
                <div className="mkt-header">
                    The variety of banners for your choice.
                </div>
                <div style={{marginTop:"-1.5rem", fontSize:"2rem"}}>
                    <i className="fa fa-download"/>
                    <span style={{marginLeft:"1.5rem"}}>Download the size (RGB colors, png type file):</span>
                </div>
                <div className="container mt-5">
                    <div className="row" style={{marginBottom:"7rem"}}>
                        <div className="col-xs-12 col-sm-6 col-md-5 col-md-offset-1">
                            <div style={{height: "210px"}}>
                                <img style={{paddingTop:"4.5rem"}} src="/static/img/banners/biggest-2.png"/>
                            </div>
                            <div className="square-banner-sizes mx-auto">
                                <div>
                                    <a href="/static/img/banners/125-2.png">
                                        <i className="fa fa-download align-right download-icon"/>
                                        <span>125x101</span>
                                    </a>
                                </div>
                                <div>
                                    <a href="/static/img/banners/260-2.png">
                                        <i className="fa fa-download align-right download-icon"/>
                                        <span>260x101</span>
                                    </a>
                                </div>
                                <div>
                                    <a href="/static/img/banners/285-2.png">
                                        <i className="fa fa-download align-right download-icon"/>
                                        <span>285x111</span>
                                    </a>
                                </div>
                                <div>
                                    <a href="/static/img/banners/biggest-2.png">
                                        <i className="fa fa-download align-right download-icon"/>
                                        <span>300x117</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-5 mt-xs-5">
                            <div style={{height: "210px"}}>
                                <img src="/static/img/banners/260.png"/>
                            </div>
                            <div className="round-banner-sizes mx-auto">
                                <div>
                                    <a href="/static/img/banners/125.png">
                                        <i className="fa fa-download align-right download-icon"/>
                                        <span>125x114</span>
                                    </a>
                                </div>
                                <div>
                                    <a href="/static/img/banners/260.png">
                                        <i className="fa fa-download align-right download-icon"/>
                                        <span>260x203</span>
                                    </a>
                                </div>
                                <div>
                                    <a href="/static/img/banners/285.png">
                                        <i className="fa fa-download align-right download-icon"/>
                                        <span>285x223</span>
                                    </a>
                                </div>
                                <div>
                                    <a href="/static/img/banners/biggest.png">
                                        <i className="fa fa-download align-right download-icon"/>
                                        <span>300x235</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Page>;
};