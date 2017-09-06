import Layout from "../components/Layout";
import Search from "../components/Search"

export default () => {
    return <Layout>
        <div className="container">
            <Search/>
        </div>
        <div className="container-fluid">
            <div className="col-sm-3 hidden-xs" style={{borderStyle:"solid", borderWidth:"1px"}}>
                etwas
            </div>
            <div className="col-sm-6 col-xs-12" style={{borderStyle: "solid", borderWidth: "1px"}}>
                etwas
            </div>
            <div className="col-sm-3 hidden-xs" style={{borderStyle: "solid", borderWidth: "1px"}}>
                etwas
            </div>
        </div>
    </Layout>;
};
