const Shimmer = () => {
  return (
    <div className="shimmer-container flex justify-center items-center py-10">
      <div className="space-y-4">
        <div className="shimmer-card w-72 h-16 bg-gray-300 rounded-lg relative overflow-hidden">
          <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
        </div>
        <div className="shimmer-card w-72 h-16 bg-gray-300 rounded-lg relative overflow-hidden">
          <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
        </div>
        <div className="shimmer-card w-72 h-16 bg-gray-300 rounded-lg relative overflow-hidden">
          <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
        </div>
        <div className="shimmer-card w-72 h-16 bg-gray-300 rounded-lg relative overflow-hidden">
          <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
        </div>
      </div>
    </div>
  );
};

export default Shimmer;
