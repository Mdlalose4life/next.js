import { createContext } from "react";
import { useState } from "react";
import { StorePlants } from "../utils/api";


const PlantInfoContext = createContext();

// eslint-disable-next-line react/prop-types
export function PlantInfoContextProvider({children}){
   const [plantData, setPlantData] = useState(null);

    async function StorePlantDataHandler(plantData){
        try {
            const response = await StorePlants(plantData)
            setPlantData(response)
        } catch (error) {
            console.error("fail to store data", error)
        }
    }
    const context = {
        plantData,
        storePlantData: StorePlantDataHandler
    }
    return (
        <PlantInfoContext.Provider value={context}>
            {children}
        </PlantInfoContext.Provider>
    )
}
export default PlantInfoContext;
