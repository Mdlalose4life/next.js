export const StorePlants = async (plantData) => {
    try {
        const responce = await fetch("https://plantapp-be99b-default-rtdb.firebaseio.com/pants.json", {
            method : 'POST',
            headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(plantData),
        })
        if (!responce){
            throw new Error("Cannot Post")
        }
        return await responce.json()
    } catch (error) {
        console.error("Error in StorePlant:", error);
        throw error;
    }
}