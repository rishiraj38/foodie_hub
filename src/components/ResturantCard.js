const ResturantCard = (props) => {
  return (
    <div className="res-card">
      <img
        className="logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/d3wiv23g8aweiwmtfnjs"
      ></img>
      <h3>{props.resname}</h3>
      <h4>Biryani,Asian</h4>
      <h4>4.4 stars</h4>
      <h4>38 min</h4>
    </div>
  );
};
export default ResturantCard;