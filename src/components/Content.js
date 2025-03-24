import ResturantCard from "./ResturantCard";
const Content = () => {
  return (
    <div className="main-cont">
      <div className="search">search BAr</div>
      <div className="resturant-card">
        <ResturantCard resname="Meghna food" />
        <ResturantCard resname="KFC" />
      </div>
    </div>
  );
};
