// IMPORT useState
import React, {useState} from "react";
import "./styles.css";
// IMPORT imageData.js AND STORE IT IN A VARIABLE CALLED imagesArr
import imagesArr from "./imageData"

export default function App() {
  // USE useState TO CREATE  [bigImage, setBigImage]
  // AND SET IT TO THE IMAGE URL OF THE FIRST ELEMENT IN THE ARRAY
  const [bigImage, setBigImage] = useState (imagesArr[0].img)

  // CREATE A HANDLE CLICK FUNCTION THAT ACCEPTS AN IMAGE URL
  // THE FUNCTION SHOULD CALL setBigImage AND PASS IT THE URL
  const [imageClick, setImageClick] = useState([])

  const handleImage = (image) => {
    setBigImage(image)
    setImageClick([
      ...imageClick, 
      {image},
    ])
  }

  // CREATE A VARIABLE CALLED images THAT LOOPs OVER THE imagesArr AND RETURNS AN <IMG> ELEMENT
  // ASSIGN ALL OF THE PROPERTIES THAT IT NEEDS: src, alt, className, key
  // ALSO ASSIGN AN onClick EVENT THAT CALL THE HANDLE EVENT AND PASSES IT THE IMG URL
  let images = imagesArr.map((ele, index) => {
    return (
      <img
      style={{ border: bigImage === ele.img ? "3px solid green" : "" }}
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
        <div id="thumbnails" >{images}</div>
        <img src={bigImage} id="bigimage" alt='bigImage'/>
      </div>
    </div>
  );
}