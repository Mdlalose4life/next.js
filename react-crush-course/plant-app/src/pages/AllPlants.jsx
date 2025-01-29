import PlantList from "../components/plants/PlantList";
import { useContext, useEffect } from "react";
import FetcthedPlantsContext from "../store/FetchPlans-context";

function AllPlants(){
  const {allPlants, fetchAllPlants} = useContext(FetcthedPlantsContext);
    useEffect(() => {
      fetchAllPlants();
    }, [])
    const plants = allPlants || {} || null
    const plantsArrya = Object.values(plants)

    console.log(plantsArrya)
    return (
      <div>
          {plantsArrya.length > 0 ? (
              <ul>
                  {console.log(plantsArrya)}
                  <PlantList plantlists={plantsArrya}  />
              </ul>
          ) : (
              <p>Loading plants...</p>
          )}
      </div>
  );
}
export default AllPlants