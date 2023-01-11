import "./footer.css";
import { FaFigma } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { ImImages } from "react-icons/im";
function Footer() {
  return (
    <footer className="footer">
      <ul className="footer_list">
        <li className="list_item">
          <a
            className="footer_item_link"
            href="https://github.com/Sailaja/portofolio"
            target="_blanc"
          >
            <AiFillGithub />
          </a>
        </li>
        <hr />
        <li className="list_item">
          <a
            className="footer_item_link"
            href="https://www.figma.com/file/cjoaVt77sDyxCIwvXOQ2w6/streamingSailaja?node-id=511%3A79&t=RWQIwNsg0GrFtmEZ-0"
            target="_blanc"
          >
            <FaFigma />
            Figma
          </a>
        </li>
        <li className="list_item">
          <a className="footer_item_link" href="#gallery">
            <ImImages />
            Gallery
          </a>
        </li>
      </ul>
    </footer>
  );
}
export default Footer;
