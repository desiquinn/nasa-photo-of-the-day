import React, {useState, useEffect} from "react";
import axios from "axios";

import PhotoCard from "./components/PhotoCard"


function Data() {

    const [photoData, setPhotoData ] = useState({});
    console.log(photoData);
    // Pulling the data from the API
    useEffect( () => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=jZVrib76XnPayK61vx8TCtZIkKqgKHab4SrgI9kf')
            .then(response => {
                console.log(response.data)
                setPhotoData(response.data)
            })
            .catch(error => console.log("Oh No What Happened!", error))
    }, []);

    console.log(photoData)  

  return (
      <div>
         <PhotoCard 
            date={photoData.date}
            image={photoData.url}
            title={photoData.title}
            describe={photoData.explanation} />
      </div>
  )

}

export default Data