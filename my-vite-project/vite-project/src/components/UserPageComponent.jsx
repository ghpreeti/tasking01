import React from 'react'
import {useEffect, useState} from 'react'
import UserCard from './UserCard';

function UserPageComponent() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
      fetch('http://dummyjson.com/users')
        .then(response => response.json())
        .then(data => setUsers(data.users))
        .catch(error => console.error('Error fetching user data:', error));
    },[]);

  return (
    <div style={styles.container}>
    <h2>User List</h2>
    {users.map(user => (
      <UserCard key={user.id} user={user} />
    ))}
  </div>
  );
};

const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  };

export default UserPageComponent
