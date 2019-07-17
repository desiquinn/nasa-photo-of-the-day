import React, {useState, useEffect} from "react";
import axios from "axios";
import "./App.css";


function App() {

  const [photoData ,setPhotoData ] = useState([]);

    // Pulling the data from the API
    useEffect( () => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=jZVrib76XnPayK61vx8TCtZIkKqgKHab4SrgI9kf')
            .then(response => {
              const photoOfDay = response.data;
              setPhotoData(photoOfDay)
            })
            .catch(error => console.log("Oh No What Happened!", error))
    }, []);
    

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
    </div>
  );
}

export default App;
