import { useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";

function Map() {
  const [serchParams, setSearchParams] = useSearchParams();
  const lat = serchParams.get("lat");
  const lng = serchParams.get("lng");

  return (
    <div className={styles.mapContainer}>
      <h1>Map Component</h1>
      <h2>
        Latitude: {lat} Longitude: {lng}
      </h2>
      <button onClick={() => setSearchParams({ lat: 23.05, lng: 50.09 })}>
        change pos
      </button>
    </div>
  );
}

export default Map;
