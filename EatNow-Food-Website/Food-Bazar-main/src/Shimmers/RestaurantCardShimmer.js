const RestaurantCardShimmer = () => {
  return (
    <div className="grid mt-7 p-2 animate-pulse">
      <div className="h-40 w-64 bg-slate-200"></div>
      <div className="mt-4 ml-1 h-20 w-64">
        <div className="bg-slate-200 w-40 h-2"></div>
        <div className="mt-2 bg-slate-200 w-32 h-2"></div>
      </div>
    </div>
  );
};

export default RestaurantCardShimmer;
