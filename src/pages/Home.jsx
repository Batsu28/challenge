import "../styles/home.css";
import ShowPage from "../compornents/sub-component/ShowPage";
import Pagination from "../compornents/btn-component/Pagination";
import { Outlet } from "react-router-dom";
import SideMenu from "../compornents/sub-component/sidebar";

export default function Home({ navbar }) {
  return (
    <main>
      <div className="container">
        <div className="home dis_flex">
          <div className="info dis_flex">
            {/* <ShowPage />
              <Pagination /> */}
            <SideMenu navbar={navbar} />

            <Outlet />
          </div>
        </div>
      </div>
    </main>
  );
}
