import { useState } from "react";
import ReactPaginate from "react-paginate";
import ShopItem from "../shop/ShopItem";
import styles from "./ShopContainer.module.scss";

export default function ShopContainer({ categories, Title }) {
  const title = Title.toUpperCase();
  // const {categories} = props;
  // console.log('categories',categories);
  const [pageNumber, setPageNumber] = useState(0);

  const itemsPerPage = 10;

  const pagesVisited = pageNumber * itemsPerPage;

  const displayProducts = categories.slice(
    pagesVisited,
    pagesVisited + itemsPerPage
  );

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const pageCount = Math.ceil(categories.length / itemsPerPage);

  return (
    <div>
      <h1 className={styles.products_header__1iU36}>{title} Page</h1>
      <div className={styles.homepage}>
        {displayProducts.map(({ name, remote_url, cid, price }) => (
          <ShopItem
            key={cid}
            name={name}
            remote_url={remote_url}
            price={price}
          />
        ))}
      </div>
      <ReactPaginate
        previousLabel={"Prev"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={styles.paginationBttns}
        previousLinkClassName={styles.previousBttn}
        nextLinkClassName={styles.nextBttn}
        disabledClassName={styles.paginationDisabled}
        activeClassName={styles.paginationActive}
      />
    </div>
  );
}
