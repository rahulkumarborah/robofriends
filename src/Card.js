import React from "react";

function Card (props){
	const {name,email}=props
    return (
        <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img src={`https://robohash.org/${name}?size=200x200`} alt="Robot Avatar"/>
            <div>
							<h2>{name}</h2>
							<p>{email}</p>
						</div>
        </div>
    )
}

export default Card;