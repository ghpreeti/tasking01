import React from 'react'
import {useEffect, useState} from 'react'

function UserPageComponent() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
      fetch('http://dummyjson.com/users')
        .then(response => response.json())
        .then(data => setUsers(data.users))
        .catch(error => console.error('Error fetching user data:', error));
    },[]);

  return (
    <div>
        <h2>User List</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.firstName} {user.lastName} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserPageComponent
