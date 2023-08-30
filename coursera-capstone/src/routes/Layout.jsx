// Layout.js
import "./css/Layout.css";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      <div id="detail">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
