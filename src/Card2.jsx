import React from "react";


const Card1 = (props)=>{
    return(
        <>
          <div  className="items">
                <img style={{width:"200px", height:"100px"}} src={props.imgsrc}  alt="img" />
                <h3>{props.head}</h3>
                <p>{props.disc}</p>
                <p>{props.price}</p>
                <button>Buy Now</button>
          </div>
        </>
    )
}
export default Card1;