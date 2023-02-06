import { useParams } from "react-router-dom";
import "../../styles/page.css";

export default function ShowPage() {
  const pageNum = useParams();
  return (
    <div className="page dis_flex" style={{ fontSize: "24px" }}>
      {pageNum.id}
    </div>
  );
}
