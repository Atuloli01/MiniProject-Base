import SearchDishCard from "./SearchDishCard";

const SearchDish = ({ dishInfo }) => {
  return (
    <div className="flex flex-wrap bg-gray-100 w-full gap-8 pt-6 justify-center rounded-lg">
      {dishInfo?.map((cards, i) => (
        <SearchDishCard item={cards} key={cards?.card?.card?.info?.id || i} />
      ))}
    </div>
  );
};

export default SearchDish;
