import React from "react";


const PhotoCard = (props) => {

    console.log(props)
    console.log(props.passData)
    
    const DisplayLoading = () => {
    // Display a loading message while the data is fetching
    if (!props.photoOfTheDay) return <h3>Loading...</h3>;
    };
    
    // Display your component as normal after the data has been fetched
    return(
        <div>
            <h2> {props.date}</h2>
            <img src={props.image} alt=""/>
            <div>
                <h2>{props.title}</h2>
                <p>{props.describe}</p>
            </div>
        </div>
    )
    
}

export default PhotoCard;

