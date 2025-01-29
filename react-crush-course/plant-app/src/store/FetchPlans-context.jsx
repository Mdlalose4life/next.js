/* eslint-disable no-unused-vars */
import { createContext, useState } from "react";
import { AllPlants } from "../utils/fetchAllPlants";

const FetcthedPlantsContext = createContext({
    allPlants:[],
    numberOfPlants : 0,
    fetchAllPlants: () => {},
});


// eslint-disable-next-line react/prop-types
export function FetcthedPlantsContextProvider({children}){
    const [fetchedPlants, setFetchedPlants] = useState([])
    const plants = fetchedPlants || {} || 0
    const plantsArr = Object.values(plants)

    async function fetchingPlantsHandler(){
        try {
            const plantData = await AllPlants();
            setFetchedPlants(plantData)
        } catch (error) {
            console.error("Cannot fetch data", error)
        }
    }
    const context = {
        allPlants: fetchedPlants,
        numberOfPlants:plantsArr?.length || 0,
        fetchAllPlants: fetchingPlantsHandler
    };

    return(
        <FetcthedPlantsContext.Provider value={context}>
            {children}
        </FetcthedPlantsContext.Provider>
    )
}
export default FetcthedPlantsContext;