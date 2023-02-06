import { useNavigate, useParams } from "react-router-dom";
import Navbar from "./Navbar";

export default function SideMenu({ navbar }) {
  const sideList = useParams();
  const navigate = useNavigate();
  return (
    <div className="side_bar">
      {navbar &&
        Object.entries(navbar).map(
          (lists) =>
            lists[0] === sideList.list &&
            lists[1].map((list, i) => (
              <button
                key={i}
                onClick={() => navigate(`/${sideList.list}/${list}`)}
              >
                {list}
              </button>
            ))
        )}
      {/* <Navbar lists={navbar && navbar.id} /> */}
    </div>
  );
}
