import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData } from "../../redux/user/useraction";
import "./Details.css";
const Details = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(55);
  const [nameSort, setNameSort] = useState();

  const dispatch = useDispatch();
  const users = useSelector((store) => store.User.UserData);
  const { loading, error } = useSelector((store) => store.User);
  // console.log(users);

  const firstLast = (val) => {
    setPage(val);
  };

  const PrevNext = (val) => {
    setPage((pre) => pre + val);
  };

  const changeLimit = (val) => {
    setLimit(val);
  };

  const nameSorting = (val) => {
    setNameSort(val);
  };

  useEffect(() => {
    dispatch(fetchUserData(page, limit));
  }, [page, limit]);

  if (loading) {
    return (
      <img
        src="https://gifimage.net/wp-content/uploads/2018/04/loading-animated-gif-transparent-background-9.gif"
        alt=""
      />
    );
  }

  if (error) {
    return <div>ERROR.....</div>;
  }

  return (
    <div>
      <h1>User Details</h1>
      <span>
        <div className="container">
          <select name="" id="" onChange={(e) => nameSorting(e.target.value)}>
            <option value="">Find by name</option>
            {users?.user?.map((e) => (
              <>
                <option value={e.first}>{e.first}</option>
              </>
            ))}
          </select>
        </div>
      </span>
      <div className="containerr">
        <button
          disabled={page <= 1 ? "true" : ""}
          onClick={() => firstLast(1)}
          className={page <= 1 ? "disable" : "btnn"}
        >
          First
        </button>
        <button
          disabled={page <= 1 ? "true" : ""}
          onClick={() => PrevNext(-1)}
          className={page <= 1 ? "disable" : "btnn"}
        >
          Prev
        </button>
        <select onChange={(e) => changeLimit(e.target.value)}>
          <option value="">select limit</option>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="40">40</option>
          <option value="50">50</option>
          <option value="60">60</option>
        </select>
        <button
          disabled={page == users?.totalPages ? "true" : ""}
          onClick={() => PrevNext(1)}
          className={page == users?.totalPages ? "disable" : "btnn"}
        >
          Next
        </button>
        <button
          disabled={page == users?.totalPages ? "true" : ""}
          onClick={() => firstLast(users?.totalPages)}
          className={page == users?.totalPages ? "disable" : "btnn"}
        >
          Last
        </button>
      </div>
      <table id="user">
        <thead>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Address</th>
          <th>Balance</th>
        </thead>
        <tbody>
          {users?.user?.map((e) => (
            <tr
              key={e._id}
              className={e.first == nameSort ? "ShowDiffColor" : ""}
            >
              <td>{e.first}</td>
              <td>{e.last}</td>
              <td>{e.email}</td>
              <td>{e.address}</td>
              <td>{e.balance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Details;
