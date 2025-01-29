export async function AllPlants() {
    try {
        const response = await fetch(
            "https://plantapp-be99b-default-rtdb.firebaseio.com/pants.json"
        );
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetch plants: ", error);
        throw error;
    }
}