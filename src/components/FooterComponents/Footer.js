import "../../Style/FooterStyle/Footer.css";
import SortingForm from "./SortingForm";

export default function Footer() {
  return (
    <div className="footer">
      <SortingForm />
      <p className="bottom-text">Made with ❤ by Matteo Pau</p>
    </div>
  );
}
