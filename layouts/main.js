import Header from "../components/Header";
import Footer from "../components/Footer";

export default ({children}) => {
    return (
        <div>
            <Header />
            <div className="body mb-1">{children}</div>
            <Footer />
        </div>
    );
};