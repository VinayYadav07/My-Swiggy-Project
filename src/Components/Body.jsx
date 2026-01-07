
import { resList } from "../utils/mockData";
import RestroCard from "./RestroCard";


const Body = () => {
  return (
    <div className="body">
      <div className="search-container">
        <input type="text" placeholder="Search for restaurants..." />
        <button>Search</button>
      </div>

      <div className="restaurant-container">
        {resList.map((restaurant) => (
          <RestroCard key={restaurant.info.id} resList={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;