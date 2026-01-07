
import { CDN_URL } from "../utils/Constant";

const RestroCard = (props) => {
  const { resList: { info: { name, cloudinaryImageId, cuisines, avgRating, costForTwo, sla: { deliveryTime } } = {} } } = props;
//   console.log(resList);

  return (
    <div className="restro-card">
      <img
        className="restro-image"
        src={CDN_URL + cloudinaryImageId}
        alt="Restaurant"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>Star ⭐ {avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

export default RestroCard;