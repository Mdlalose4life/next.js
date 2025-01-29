import PlantForm from "../components/plants/PlantForm"

function NewPlant(){
    return(
        <div>
            <div style={{alignItems:"center", display:"flex", justifyContent:"center", fontSize:"1.8rem", padding:"16px"}}>Add New Plants</div>
            < PlantForm/>
        </div>
    )
}
export default NewPlant