import React from "react";


const PhotoCard = (props) => {

    console.log(props)
    console.log(props.date)
    
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

