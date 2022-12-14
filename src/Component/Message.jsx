import React, { useEffect, useState } from "react";
import { Link ,useNavigate } from "react-router-dom";
import JsonData from "../JsonData";

export default function Message() {
  const Navigate = useNavigate();
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(JsonData);
  }, []);

  const Logout=()=>{
      localStorage.clear()
      Navigate('/login')
  }
  return (
    <div className="container mt-3">
      <h4 className="text-center">Message page</h4>
      <ul className="list-group mt-2">
        {data.map((item, i) => {
          return (
            <Link
              key={i}
              to={`/message/${item.id}`}
              className="list-group-item"
            >
              User {item.id} Messages
            </Link>
          );
        })}
      </ul>
      <button onClick={Logout} class="btn btn-secondary mt-2">Logout</button>
    </div>
  );
}
