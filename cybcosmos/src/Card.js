import React from "react";

const Card = (props) => {
   return (
    <div className="bg-light-green dib br3 pa3 ma2 grow pw2 tc">
           <img alt='robot' src={`https://robohash.org/${props.id}`}/>
        <div>
            <h2>{props.name}</h2>
            <p>{props.email}</p>
        </div>
    </div>

   ) ;
    
}
export default Card;