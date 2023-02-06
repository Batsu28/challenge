import { useNavigate } from "react-router-dom";

export default function Navbar({ lists }) {
  const navigate = useNavigate();
  return (
    <nav>
      <ul>
        {lists &&
          lists.map((list, index) => (
            <li key={index}>
              <button onClick={() => navigate(`/${list}`)}>{list}</button>
            </li>
          ))}
      </ul>
    </nav>
  );
}
