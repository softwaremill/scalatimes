import Page from "./main";
import Search from "../components/Search"

export default ({children}) => {
    return <Page>
        <Search/>
        <div className="container-fluid">
            <div className="col-sm-3 hidden-xs">
                <div className="row previous mb-xs-2 text-center">
                    <header>Previous</header>
                    <div className="archive-left">
                        <div className="archived-issue">#234</div>
                        <div className="archived-issue">#234</div>
                        <div className="archived-issue">#234</div>
                        <div className="archived-issue">#234</div>
                        <div className="archived-issue">#234</div>
                    </div>
                </div>
            </div>
            <div className="col-sm-6 col-xs-12">
                <div className="text-center">
                    {children}
                </div>
            </div>
            <div className="col-sm-3 hidden-xs">
                <div className="row previous text-center">
                    <header>Previous</header>
                    <div className="archive-right">
                        <div className="archived-issue">#234</div>
                        <div className="archived-issue">#234</div>
                        <div className="archived-issue">#234</div>
                        <div className="archived-issue">#234</div>
                        <div className="archived-issue">#234</div>
                    </div>
                </div>
            </div>
        </div>
    </Page>;
};