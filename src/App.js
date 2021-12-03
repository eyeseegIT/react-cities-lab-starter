// IMPORT useState
import React, {useState} from "react";
import "./styles.css";
import imagesArr from "./imageData"
// IMPORT imageData.js AND STORE IT IN A VARIABLE CALLED imagesArr

export default function App() {

const [bigImage, setBigImage] = useState (imagesArr[0].img)
  // USE useState TO CREATE  [bigImage, setBigImage]
  // AND SET IT TO THE IMAGE URL OF THE FIRST ELEMENT IN THE ARRAY

  // CREATE A HANDLE CLICK FUNCTION THAT ACCEPTS AN IMAGE URL
  // THE FUNCTION SHOULD CALL setBigImage AND PASS IT THE URL

  const handleImage = (image) => {
    setBigImage(image)
  }

  // CREATE A VARIABLE CALLED images THAT LOOPs OVER THE imagesArr AND RETURNS AN <IMG> ELEMENT
  // ASSIGN ALL OF THE PROPERTIES THAT IT NEEDS: src, alt, className, key
  // ALSO ASSIGN AN onClick EVENT THAT CALL THE HANDLE EVENT AND PASSES IT THE IMG URL
  let images = imagesArr.map((ele, index) => {
    return (
      <img
      src={ele.img}
      alt={ele.city}
      key={index}
      className={"thumb"}
      onClick={() => handleImage(ele.img)}
      />
    )
  })
  
  return (
    <div className="App">
      <h1>Cities Of The World</h1>
      <div id="wrapper">
        
        <div  id="thumbnails">{images}</div>
  
        <img src={bigImage} id="bigimage" alt='bigImage'/>
      </div>
    </div>
  );
}