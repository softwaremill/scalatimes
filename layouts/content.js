import * as React from "react"
import Page from "./main"
import Search from "../components/Search"
import Archive from "../components/Archive"

export default ({children, archive = []}) => {
    return (
        <Page>
            <Search/>
            <div className="newspaper-body">
                <div className="hidden-xs left-column">
                    <Archive issues={archive.slice(0, 6)}/>
                </div>
                <div className="text-center">
                    {children}
                </div>
                <div className="hidden-xs hidden-sm right-column">
                    <Archive issues={archive.slice(6, 12)}/>
                </div>
            </div>
        </Page>
    )
};
