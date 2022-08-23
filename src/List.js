import React, { useEffect, useState } from "react";
import axios from "axios";

function Users() {
  const [list, setList] = useState([]);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => {
        
        setList(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const List =list.map((post) => (
    <div key={post.id}  style={{textAlign: 'center'}}>
      <div className="card">
        <h3>{post.username}</h3>
        <p>{post.email}</p>
        <p>{post.phone}</p>
        <p>{post.website}</p>
      </div>
    </div>
  ))

  return (
    <div >
   {List}
    </div>
  );
}

export default Users;