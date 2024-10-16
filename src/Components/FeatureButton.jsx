const FearureButton = ({ title, onClick }) => {
  return (
    <button onClick={onClick} className="feature-button">
      {title}
    </button>
  );
}

export default FearureButton;
