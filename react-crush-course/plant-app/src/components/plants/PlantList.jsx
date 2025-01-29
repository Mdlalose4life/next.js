/* eslint-disable react/prop-types */
import PlantItems from "./PlantItems";
import classes from "./plantList.module.css"
// eslint-disable-next-line react/prop-types
function PlantList({ plantlists }) {
    console.log("Plant List from favorites", plantlists);
    return (
        <ul className={classes.list}>
            {plantlists.map((plantlit) => {
                const { care: { light = "Default light", water ="Deafulat Water" } = {}, id, name, scientificName, image, description, category } = plantlit;
                return (
                    <PlantItems
                        key={id}
                        id={id}
                        name={name}
                        scientificName={scientificName}
                        image={image}
                        description={description}
                        category={category}
                        light={light}
                        water={water}
                    />
                );
            })}
        </ul>
    );
}
export default PlantList