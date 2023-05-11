import React, { useEffect, useState } from "react";
import style from "./Pagination.module.css";

const Pagination = ({ pageStyle, setPageStyle, cardXPage, client, pages }) => {
  const [currentPage, setCurrentPage] = useState(pageStyle);
  const pageNumbers = [];
  useEffect(() => {
    setCurrentPage(currentPage);
  }, [currentPage]);

  for (let i = 1; i <= Math.ceil(client.length / cardXPage); i++) {

    pageNumbers.push(i);
  }
console.log(pageStyle)
  const nextPageHandler = (arrow, num) => {
    if (arrow === "up") {
      setPageStyle(pageStyle + 1)
      pages(pageStyle + 1)
    } 
   else {
     setPageStyle(pageStyle - 1)
     pages(pageStyle - 1)

   }

  };

  return (
    <>
      <div className={style.divPagination}>
        <button className={style.itemsArrow} onClick={() => {
            nextPageHandler("down");
          }}>&lt;</button>
        <ul className={style.lista}>
          {pageNumbers.map((num) => (
            <li
              className={`${style.items} ${
                pageStyle === num ? style.currentPage : ""
              }`}
              key={num}
            >
              <a
                onClick={() => {
                  pages(num);
                  // setCurrentPage(num)
                  setPageStyle(num);
                }}
              >
                {num}
              </a>
            </li>
          ))}
        </ul>
        <button
          className={style.itemsArrow}
          onClick={() => {
            nextPageHandler("up");
          }}
        >
          &gt;
        </button>
      </div>
    </>
  );
};
// href="#idHome"
export default Pagination;
