import { CDN_URL } from "../utlis/constants";

const ResturantCard = ({ resData }) => {
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, areaName } =
    resData;

  return (
    <div className="m-4 p-4 w-[250px] bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer border border-gray-100">
      <img
        className="w-full h-40 object-cover rounded-xl mb-3"
        alt={`${name} logo`}
        src={`${CDN_URL}${cloudinaryImageId}`}
      />
      <h3 className="font-semibold text-lg text-gray-800 truncate">{name}</h3>
      <p className="text-sm text-gray-500 mt-1 truncate">
        {cuisines.join(", ")}
      </p>

      <div className="flex items-center justify-between text-sm text-gray-600 mt-2">
        <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-md font-medium">
          ⭐ {avgRating}
        </span>
        <span>{costForTwo}</span>
      </div>

      <p className="text-sm text-gray-400 mt-2">{areaName}</p>
    </div>
  );
};

export default ResturantCard;
