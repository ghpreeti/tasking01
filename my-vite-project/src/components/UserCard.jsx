
import React from 'react';

const UserCard = ({ user }) => {
  return (
    <div style={styles.card}>
      <img src={user.image} alt={`${user.firstName} ${user.lastName}`} style={styles.image} />
      <div style={styles.details}>
        <h3>{user.firstName} {user.lastName}</h3>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
        <p>Username: {user.username}</p>
        <p>Age: {user.age}</p>
        <p>Gender: {user.gender}</p>
        <p>Address: {user.address.city}, {user.address.street}, {user.address.state}, {user.address.country}</p>
      </div>
    </div>
  );
};

const styles = {
  card: {
    display: 'flex',
    flexDirection: 'row',
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    margin: '16px 0',
    maxWidth: '600px',
  },
  image: {
    borderRadius: '50%',
    width: '100px',
    height: '100px',
    marginRight: '16px',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
};

export default UserCard;
