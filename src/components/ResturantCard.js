import { CDN_URL } from "../utlis/constants";

const ResturantCard = ({ resData }) => {
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, areaName } =
    resData;

  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt={`${name} logo`}
        src={`${CDN_URL}${cloudinaryImageId}`}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{areaName}</h4>
    </div>
  );
};

export default ResturantCard;
