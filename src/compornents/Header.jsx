import Navbar from "./sub-component/Navbar";
import "../styles/header.css";
import { useNavigate } from "react-router-dom";

export default function Header({ navbar }) {
  const navigate = useNavigate();

  return (
    <header>
      <div className="container">
        <div className="header dis_flex">
          <button onClick={() => navigate("/")}>Home</button>
          <Navbar lists={navbar && Object.keys(navbar)} />
        </div>
      </div>
    </header>
  );
}
