import React from "react";
import { Link } from "react-router-dom";

const Card1 = (props)=>{
  const Clicked= ()=>{
    alert("thanx for choosing us!!!press ok for proceed.")
}
    return(
        <>
          <div className="items">
                <h3>{props.head}</h3>
                <p>{props.disc}</p>
                <p>{props.price}</p>
                <Link to="/contact"><button onClick={Clicked} >Buy Now</button></Link>
          </div>
        </>
    )
}
export default Card1;