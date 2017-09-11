export default ({children}) => {
    return (
        <footer>
            <div className="container">
                <div className="row" style={{color:"#939293"}}>powered by</div>
                <div className="row mt-3 mb-5"><img src="/static/img/sml_logo_grey.png"/></div>
            </div>
            <div className="footer-links">
                <a href="https://softwaremill.com/portfolio/"><i className="fa fa-code footer-icon"/>Our projects</a>
                <a href="https://softwaremill.com/join-us/"><i className="fa fa-handshake-o footer-icon"/>We are hiring</a>
                <a href="https://twitter.com/softwaremill"><i className="fa fa-twitter footer-icon"/>Follow us!</a>
            </div>
        </footer>
    )
}