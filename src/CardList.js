import React from "react";
import Card from "./Card";


function CardList(props){
    return <>
        {props.robots.map((robot,index)=>{
            return <Card 
                        key={`${robot.id}-index`}
                        name={robot.name}
                        email={robot.email}
                    />
        })}
    </>
}

export default CardList