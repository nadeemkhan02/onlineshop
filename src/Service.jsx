import React from "react";
import Simg from "../src/images/food-delivery.svg";
import Simg1 from "../src/images/contact.svg";

const Service= ()=>{
  const Sall= (props)=>{
      return(
        <>
        <h1 className="Mainhead">{props.Shead}</h1>
          <div className="Sele">
             <img src={props.Simg} alt="img" />
             <p>{props.Sdis}</p>
          </div>
        </>
      )
  }
    return(
        <>
          <Sall
            Shead = "Shipping Service"
            Simg = {Simg}
            Sdis = "institutional or professional users, or to other wholesalers, or involves acting as an agent or broker in buying merchandise for, or selling merchanstitutional or professional users, or to other wholesalers, or involves acting as an agent or broker in buying merchandise for, or selling merchanstitutional or professional users, or to other wholesalers, or involves acting as an agent or broker in buying merchandise for, or selling merchanstitutional or professional users, or to other wholesalers, or involves acting as an agent or broker in buying merchandise for, or selling merchanstitutional or professional users, or to other wholesalers, or involves acting as an agent or broker in buying merchandise for, or selling merchanstitutional or professional users, or to other wholesalers, or involves acting as an agent or broker in buying merchandise for, or selling merchatitutional or professional users, or to other wholesalers, or involves acting as an agent or broker in buying merchandise for, or "
           />
          <Sall
            Shead = "Contact Service"
            Simg = {Simg1}
            Sdis = "institutional or professional users, or to other wholesalers, or involves acting as an agent or broker in buying merchandise for, or selling merchatitutional or professional users, or to other wholesalers, or involves acting as an agent or broker in buying merchandise for, or selling merchanstitutional or professional users, or to other wholesalers, or involves acting as an agent or broker in buying merchandise for, or selling merchanstitutional or professional users, or to other wholesalers, or involves acting as an agent or broker in buying merchandise for, or selling merchanstitutional or professional users, or to other wholesalers, or involves acting as an agent or broker in buying merchandise for, or selling merchanstitutional or professional users, or to other wholesalers, or involves acting as an agent or broker in buying merchandise for, or selling merchatitutional or professional users, or to other wholesalers, or involves acting as an agent or broker in buying merchandise for, or selling "
           />
        </>
    )
}
export default Service;