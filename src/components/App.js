import "../Style/App.css";
import Header from "./HeaderComponents/Header";
import Main from "./MainComponents/Main";
import Footer from "./FooterComponents/Footer";

export default function App() {
  return (
    <div className="app">
      <div className="container">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}
