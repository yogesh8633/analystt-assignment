import axios from "axios";
import { useEffect, useState } from "react";

const useUsers = () => {
  const itemsPerPage = 5;

  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(false);
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems: any = data.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(data.length / itemsPerPage);

  /**
   * It handles the pagination of the data.
   * @param {any} event - any - this is the event that is triggered when the user clicks on a page
   * number.
   */
  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };
  /**
   * We're using the async/await syntax to make an HTTP request to the JSONPlaceholder API, and then
   * we're setting the data state variable to the response data
   */
  const getUsers = async () => {
    setLoading(true);
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      setData(res.data);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return {
    currentItems,
    handlePageClick,
    pageCount,
    loading,
  };
};
export default useUsers;
