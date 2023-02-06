import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../../styles/pagenation.css";
import PageButton from "./PageButton";

export default function Pagination() {
  const pageNum = useParams();
  // const [currentPage, setCurrentPage] = useState(Number(pageNum.id));
  const [currentPage, setCurrentPage] = useState(
    pageNum ? Number(pageNum.id) : 1
  );
  const num = 20;

  function pageBtn() {
    if (currentPage <= 1 || currentPage === 2) {
      return (
        <div className="num_btn">
          <Link
            to={`/page/${currentPage}`}
            onClick={() =>
              setCurrentPage(currentPage === 2 ? currentPage - 1 : currentPage)
            }
          >
            <PageButton
              name={currentPage === 2 ? currentPage - 1 : currentPage}
              className={currentPage === 1 && "active"}
            />
          </Link>
          <Link
            to={`/page/${currentPage + 1}`}
            onClick={() =>
              setCurrentPage(currentPage === 2 ? currentPage : currentPage + 1)
            }
          >
            <PageButton
              name={currentPage === 2 ? currentPage : currentPage + 1}
              className={currentPage === 2 && "active"}
            />
          </Link>
          <Link
            to={`/page/${currentPage + 2}`}
            onClick={() => setCurrentPage(currentPage + 2)}
          >
            <PageButton
              name={currentPage === 2 ? currentPage + 1 : currentPage + 2}
            />
          </Link>
          <Link
            to={`/page/${currentPage + 3}`}
            onClick={() => setCurrentPage(currentPage + 3)}
          >
            <PageButton
              name={currentPage === 2 ? currentPage + 2 : currentPage + 3}
            />
          </Link>
          <Link
            to={`/page/${currentPage + 4}`}
            onClick={() => setCurrentPage(currentPage + 4)}
          >
            <PageButton
              name={currentPage === 2 ? currentPage + 3 : currentPage + 4}
            />
          </Link>
        </div>
      );
    } else if (currentPage >= num || currentPage === num - 1) {
      return (
        <div className="num_btn">
          <Link
            to={`/page/${currentPage - 4}`}
            onClick={() =>
              setCurrentPage(
                currentPage === num - 1 ? currentPage - 3 : currentPage - 4
              )
            }
          >
            <PageButton
              name={currentPage === num - 1 ? currentPage - 3 : currentPage - 4}
            />
          </Link>
          <Link
            to={`/page/${currentPage - 3}`}
            onClick={() =>
              setCurrentPage(
                currentPage === num - 1 ? currentPage - 2 : currentPage - 3
              )
            }
          >
            <PageButton
              name={currentPage === num - 1 ? currentPage - 2 : currentPage - 3}
            />
          </Link>
          <Link
            to={`/page/${currentPage - 2}`}
            onClick={() =>
              setCurrentPage(
                currentPage === num - 1 ? currentPage - 1 : currentPage - 2
              )
            }
          >
            <PageButton
              name={currentPage === num - 1 ? currentPage - 1 : currentPage - 2}
            />
          </Link>
          <Link
            to={`/page/${currentPage - 1}`}
            onClick={() =>
              setCurrentPage(
                currentPage === num - 1 ? currentPage : currentPage - 1
              )
            }
          >
            <PageButton
              name={currentPage === num - 1 ? currentPage : currentPage - 1}
              className={currentPage === num - 1 && "active"}
            />
          </Link>
          <Link
            to={`/page/${currentPage}`}
            onClick={() =>
              setCurrentPage(
                currentPage === num - 1 ? currentPage + 1 : currentPage
              )
            }
          >
            <PageButton
              name={currentPage === num - 1 ? currentPage + 1 : currentPage}
              className={currentPage === num && "active"}
            />
          </Link>
        </div>
      );
    } else {
      return (
        <div className="num_btn">
          <Link
            to={`/page/${currentPage - 2}`}
            onClick={() => setCurrentPage(currentPage - 2)}
          >
            <PageButton name={currentPage - 2} />
          </Link>
          <Link
            to={`/page/${currentPage - 1}`}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            <PageButton name={currentPage - 1} />
          </Link>
          <Link
            to={`/page/${currentPage}`}
            onClick={() => setCurrentPage(currentPage)}
          >
            <PageButton name={currentPage} className={"active"} />
          </Link>
          <Link
            to={`/page/${currentPage + 1}`}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            <PageButton name={currentPage + 1} />
          </Link>
          <Link
            to={`/page/${currentPage + 2}`}
            onClick={() => setCurrentPage(currentPage + 2)}
          >
            <PageButton name={currentPage + 2} />
          </Link>
        </div>
      );
    }
  }
  // function btnTest() {
  //   return (
  //     <div className="num_btn">
  //       <Link
  //         to={`/page/${currentPage === 2 ? currentPage - 1 : currentPage}`}
  //         onClick={() =>
  //           setCurrentPage(
  //             currentPage === 1 || currentPage === num
  //               ? currentPage === 1
  //                 ? currentPage
  //                 : currentPage === num - 1
  //                 ? currentPage
  //                 : currentPage - 1
  //               : currentPage === 2
  //               ? currentPage - 1
  //               : currentPage - 1
  //           )
  //         }
  //       >
  //         <PageButton
  //           name={
  //             currentPage === 1 || currentPage === num
  //               ? currentPage === 1
  //                 ? currentPage
  //                 : currentPage === num - 1
  //                 ? currentPage
  //                 : currentPage - 1
  //               : currentPage === 2
  //               ? currentPage - 1
  //               : currentPage
  //           }
  //           className={currentPage === 1 && "active"}
  //         />
  //       </Link>
  //       <Link
  //         to={`/page/${currentPage === 2 ? currentPage : currentPage + 1}`}
  //         onClick={() =>
  //           setCurrentPage(
  //             currentPage === 1 || currentPage === num
  //               ? currentPage === 1
  //                 ? currentPage
  //                 : currentPage === num - 1
  //                 ? currentPage
  //                 : currentPage - 1
  //               : currentPage === 2
  //               ? currentPage
  //               : currentPage - 1
  //           )
  //         }
  //       >
  //         <PageButton
  //           name={
  //             currentPage === 1 || currentPage === num
  //               ? currentPage === 1
  //                 ? currentPage
  //                 : currentPage === num - 1
  //                 ? currentPage
  //                 : currentPage - 1
  //               : currentPage === 2
  //               ? currentPage
  //               : currentPage + 1
  //           }
  //           className={currentPage === 2 && "active"}
  //         />
  //       </Link>
  //     </div>
  //   );
  // }

  return (
    <div className="buttons dis_flex">
      <Link
        to={
          currentPage === 1
            ? `/page/${currentPage}`
            : `/page/${currentPage - 1}`
        }
        onClick={() => currentPage !== 1 && setCurrentPage(currentPage - 1)}
      >
        <PageButton name={"prev"} />
      </Link>
      {/* {pageBtn()} */}
      {pageBtn()}
      <Link
        to={
          currentPage === num
            ? `/page/${currentPage}`
            : `/page/${currentPage + 1}`
        }
        onClick={() => currentPage !== num && setCurrentPage(currentPage + 1)}
      >
        <PageButton name={"next"} />
      </Link>
    </div>
  );
}
