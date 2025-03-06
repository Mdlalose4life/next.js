'use client'

import { useRef, useState } from 'react'
import classess from './image-picker.module.css'
import Image from 'next/image';

export  default function ImagePicker({label, name}) {
    const [pickedImage, setPickImage] = useState()
    const imageInput = useRef();

    function handlePickClick() {
        imageInput.current.click()
    }

    function handleImageChange(event){
        const file = event.target.files[0];

        if (!file){
            return
        }

        const fileReader = new FileReader();

        fileReader.onload = () => {
            setPickImage(fileReader.result) 
        };

        fileReader.readAsDataURL(file)
    }

    return (
        <div className={classess.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={classess.controls} >
                <div className={classess.preview}>
                    {!pickedImage && <p>No Image picked yet</p>}
                    {pickedImage && <Image src={pickedImage}
                    alt='The image selected by the user'
                    fill
                    />}
                </div>
                <input
                    className={classess.input}
                    type="file"
                    id={name} 
                    accept="image/png image/jpeg"
                    name={name}
                    ref={imageInput}
                    onChange={handleImageChange}
                    />
                    <button className={classess.button} type='button' onClick={handlePickClick} >
                        pick an image
                    </button>
            </div>
        </div>
    )
}