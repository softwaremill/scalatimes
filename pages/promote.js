import Page from "../layouts/main";

export default () => {
    return <Page>
        <div className="stickers">
            <div className="spread-the-word">
                <div className="container">
                    <div className="mkt-header">
                        Spread the word about your event!
                    </div>
                    <div className="mkt-body">
                        Would you like us to spread the word to over 4000 Scala Times subscribers from all around the world about your Scala event? NO PROBLEM!
                    </div>
                    <div className="mkt-header pt-5">
                        In exchange, we would just ask you to either:
                    </div>
                    <div className="row mkt-icons">
                        <div className="col-sm-4 col-xs-12 px-4">
                            <div className="mkt-icon center-block">
                                <img src="/static/img/desktop.png"/>
                            </div>
                            <p>Add the Scala Times logo in the Media Partners section on the event’s web page and link it to scalatimes.com,</p>
                        </div>
                        <div className="col-sm-4 col-xs-12 px-4">
                            <div className="mkt-icon center-block">
                                <img src="/static/img/ticket.png"/>
                            </div>
                            <p>Send us a discount code for tickets for Scala Times subscribers and a link to your event,</p>
                        </div>
                        <div className="col-sm-4 col-xs-12 px-4">
                            <div className="mkt-icon center-block">
                                <img src="/static/img/desktop_ticket.png"/>
                            </div>
                            <p>or both!</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container downloads">
                <div className="mkt-header">
                    Would you like to share Scala Times stickers among the event participants?
                </div>
                <div className="mkt-body">
                    Just let us know how many stickers you need and who we should send them to. It usually takes us up
                    to 2 weeks to ship them.
                </div>
                <div className="mkt-header pt-5">
                    Scala Times stickers
                </div>
                <div className="mkt-body">
                    <p>Once we get your e-mail, the information about your event and the discount code will be sent to the
                        Scala Times subscriber's in the next newsletter.</p>
                    <br />
                    <p>Have a great event!</p>
                </div>
                <div>
                    <div className="col-sm-5 col-sm-offset-1 col-xs-12">
                        <div className="center-block">
                            <img src="/static/img/stickers.png"/>
                        </div>
                    </div>
                    <div className="col-sm-5 col-xs-12">
                        <div className="center-block">
                            <img src="/static/img/stickers_2.png"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Page>;
};
