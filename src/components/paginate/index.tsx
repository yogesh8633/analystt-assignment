import ReactPaginate from "react-paginate";
import "../../scss/paginate.scss";
const Paginate = (props: { pageCount: number; handlePageClick: any }) => {
  const { pageCount, handlePageClick } = props;
  return (
    <div id="paginate-component" className="d-flex justify-content-center mb-4">
      <ReactPaginate
        nextLabel="Next >"
        pageCount={pageCount}
        breakLabel="..."
        previousLabel="< Previous"
        pageRangeDisplayed={1}
        marginPagesDisplayed={1}
        activeClassName="active"
        pageClassName="page-item"
        breakClassName="page-item"
        pageLinkClassName="page-link"
        nextLinkClassName="page-link"
        breakLinkClassName="page-link"
        previousLinkClassName="page-link"
        onPageChange={handlePageClick}
        nextClassName="page-item next-item"
        previousClassName="page-item prev-item"
        containerClassName="pagination react-paginate"
      />
    </div>
  );
};
export default Paginate;
