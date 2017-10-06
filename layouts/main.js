import * as React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default ({children}) => {
    return (
        <div>
            <Header />
            <div className="body">{children}</div>
            <Footer />
        </div>
    );
};