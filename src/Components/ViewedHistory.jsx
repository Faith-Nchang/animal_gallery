import React from 'react';

const ViewedHistory = ({ viewedCats }) => {
  return (
    <div className="viewed-history">
      <h2>Previously Viewed Cats</h2>
      {viewedCats.length > 0 ? (
        <ul>
          {viewedCats.map((cat, index) => (
            <li key={index}>
              <img src={cat.image} alt={cat.name} width="100" />
              <p>{cat.name}</p>
              <p>{cat.country}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No cats viewed yet.</p>
      )}
    </div>
  );
};

export default ViewedHistory;
