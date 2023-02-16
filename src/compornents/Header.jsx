import Navbar from "./sub-component/Navbar";
import "../styles/header.css";
import { useNavigate } from "react-router-dom";

export default function Header({ navbar, getWeather }) {
  const navigate = useNavigate();

  return (
    <header>
      <div className="container">
        <div className="header dis_flex">
          <button onClick={() => navigate("/")}>Home</button>
          <Navbar lists={navbar && Object.keys(navbar)} />
        </div>
        <select onChange={(e) => getWeather(e.target.value)}>
          <option value="mn">Ulaanbaatar</option>
          <option value="ru">Moscow</option>
          <option value="ch">Beijing</option>
        </select>
      </div>
    </header>
  );
}
