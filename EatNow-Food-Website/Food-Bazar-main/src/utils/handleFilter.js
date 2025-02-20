export function handleFilterByRating(
  restaurantsList,
  setFilterRestaurants,
  setActiveFilter
) {
  const data = restaurantsList?.filter((item) => item?.info?.avgRating >= 4);
  setFilterRestaurants(data);
  setActiveFilter("filterByRating");
}

export function handleFilterByVeg(
  restaurantsList,
  setFilterRestaurants,
  setActiveFilter
) {
  const data = restaurantsList?.filter((item) => item?.info?.veg === true);
  setFilterRestaurants(data);
  setActiveFilter("filterByVeg");
}

export function handleFilterByDelivery(
  restaurantsList,
  setFilterRestaurants,
  setActiveFilter
) {
  const data = restaurantsList?.filter(
    (item) => item?.info?.sla?.deliveryTime <= 30
  );
  setFilterRestaurants(data);
  setActiveFilter("filterByDelivery");
}

export function handleFilterPriceLessThan300(
  restaurantsList,
  setFilterRestaurants,
  setActiveFilter
) {
  const data = restaurantsList?.filter(
    (item) => item?.info?.costForTwo.match(/\d+/)[0] >= 300
  );
  setFilterRestaurants(data);
  setActiveFilter("filterByLessThan300");
}

export function handleFilterPriceGreaterThan300(
  restaurantsList,
  setFilterRestaurants,
  setActiveFilter
) {
  const data = restaurantsList?.filter(
    (item) => item?.info?.costForTwo.match(/\d+/)[0] < 300
  );
  setFilterRestaurants(data);
  setActiveFilter("filterByGreaterThan300");
}
