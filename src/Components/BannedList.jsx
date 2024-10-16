const BannedList = ({ banned }) => {
  return (
    <div className="banned-list">
      <h2>Banned List</h2>
      <ul>
        {banned.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default BannedList;
