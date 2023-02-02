import { Fragment, useState } from "react";
import ReactPaginate from "react-paginate";
import useUsers from "./useUsers";
import UserCard from "./user-card";
import { Spinner } from "reactstrap";
import Paginate from "../../components/paginate";

const Users = () => {
  const { loading, currentItems, handlePageClick, pageCount } = useUsers();

  return (
    <Fragment>
      {loading ? (
        <Spinner className="spinner" />
      ) : (
        <>
          <UserCard currentItems={currentItems} />
          <Paginate
            handlePageClick={handlePageClick}
            pageCount={pageCount}
          />
        </>
      )}
    </Fragment>
  );
};
export default Users;
