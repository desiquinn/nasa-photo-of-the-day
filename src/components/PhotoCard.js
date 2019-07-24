import React from "react";
import { Card, Image } from 'semantic-ui-react'


const PhotoCard = (props) => {

    console.log(props)
    console.log(props.date)
    
    // Display your component as normal after the data has been fetched
    return(
        <Card>
            <Card.Meta>
                <span className='date'>{props.date}</span>
            </Card.Meta>
            <Image src={props.image} wrapped ui={false} />
            <Card.Content>
                <Card.Header>{props.title}</Card.Header>
                <Card.Description>
                    {props.describe}
                </Card.Description>
            </Card.Content>
        </Card>

        // <div>
        //     <h2> {props.date}</h2>
        //     <img src={props.image} alt=""/>
        //     <div>
        //         <h2>{props.title}</h2>
        //         <p>{props.describe}</p>
        //     </div>
        // </div>
    )
    
}

export default PhotoCard;

