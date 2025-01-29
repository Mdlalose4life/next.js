import { useState } from "react";
import Card from "../ui/Card";
import classes from "./PlantForms.module.css";
import { useRef } from "react";
import { useContext } from "react";
import PlantInfoContext from "../../store/PlantInfo-Contex";
import {useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

function PlantForm() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const {storePlantData} = useContext(PlantInfoContext)
  const navigate = useNavigate()

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const plantNameInputRef = useRef()
  const scientifNameInputRef = useRef()
  const imageInputRef = useRef()
  const descriptionInputRef = useRef()
  const careLightInputRef = useRef()
  const careWaterInputRef = useRef()

  function submitHandler(event){
    event.preventDefault()
    const plantId = uuidv4();

    const enteredPlantName = plantNameInputRef.current.value
    const enteredScientifName = scientifNameInputRef.current.value
    const enteredImage = imageInputRef.current.value
    const enterDescription = descriptionInputRef.current.value
    const enteredCare = {
      light: careLightInputRef.current.value,
      water: careWaterInputRef.current.value,
    }

    const PlantData = {
      id: plantId,
      name : enteredPlantName,
      scientificName: enteredScientifName,
      image: enteredImage,
      description: enterDescription,
      category: selectedCategory,
      care: enteredCare
    }

    try {
      storePlantData(PlantData)
      console.log("Plant Data Posted Successfully")
    } catch (error) {
      console.log("Plant Data Posted not Successfully", error)
    } finally {
      navigate("/", {replace:true})
    }
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="plantName">Plant Name</label>
          <input type="text" required id="plantName" ref={plantNameInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor="scientificName">Scientific Name</label>
          <input type="text" required id="scientificName" ref={scientifNameInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Plant Image</label>
          <input type="url" required id="image" ref={imageInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea id="description" required rows={5} ref={descriptionInputRef}></textarea>
        </div>
        <div className={classes.control}>
          <label>Category</label>
          <div className={classes.radioGroup}>
            <label>
              <input type="radio" value="Indoors" name="category" onChange={handleCategoryChange}/>
              Indoors
            </label>
            <label>
              <input type="radio" value="Outdoors" name="category" onChange={handleCategoryChange}/>
              Outdoors
            </label>
          </div>
        </div>
        <div className={classes.care}>
          <p>Care:</p>
          <div className={classes.control}>
            <label htmlFor="light">Light</label>
            <input type="text" required id="light" ref={careLightInputRef}/>
          </div>
          <div className={classes.control}>
            <label htmlFor="water">Water</label>
            <input type="text" required id="water" ref={careWaterInputRef}/>
          </div>
        </div>
        <div className={classes.actions}>
          <button type="submit">Submit</button>
        </div>
      </form>
    </Card>
  );
}

export default PlantForm;
