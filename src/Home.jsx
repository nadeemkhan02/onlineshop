import React, { useState } from "react";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card1info from "./Card1info";
import Card2info from "./Card2info";
import img1 from "../src/images/brand.png";
import img2 from "../src/images/menu.svg";
import Type from "./Type";
import Footer from "./Footer";


const Home = () => {
    const [swt, Uswt] = useState(false)
    const [status, Ustatus] = useState("Show")
    const [greet, Ugreet] = useState("")
    const update = () => {
        Ugreet(new Date().toLocaleTimeString())
    }
    setInterval(update, 1000)
    const Clicked = () => {
        if (swt === false) {
            Uswt(true)
            Ustatus("Hide")
        } else {
            Uswt(false)
            Ustatus("Show")
        }
    }
    
    return (
        <>
            <div className="container">
                <div className="elem1">
                    <h1>
                        The Biggest <strong style={{ color: "red" }}>Wholesale Market</strong>
                    </h1>
                    <h2>Choose Your Best Deals At Best Price!!</h2>
                    <h4>Note:<br /><strong style={{ color: "green" }}>Today's best</strong> deal ends in every 24 hrs: {greet}</h4>
                    <Type />
                </div>
                <div className="elem2">
                    <img src={img1} alt="logo" />
                </div>
            </div>
            <br />
            <h1 className="proh">Our Products</h1>
            <div>
                <div className="alltop">
                    {
                        Card2info.map((val, ind) => {
                            return (
                                <div className="ele">
                                    <Card2
                                        head={val.head}
                                        imgsrc={val.imgsrc}
                                        disc={val.disc}
                                        price={val.price}
                                    />
                                </div>
                            )
                        }
                        )}
                </div>

            </div>

            <div className="deals1">
                <h2>Todays Best Deals<button onClick={Clicked}><img src={img2} alt="menu" /></button><sub>{status}</sub></h2>
            </div>
            {
                swt === true ?
                    <div className="all">
                        {
                            Card1info.map((val, ind) => {
                                return (
                                    <div className="ele">
                                        <Card1
                                            head={val.head}
                                            disc={val.disc}
                                            price={val.price}
                                        />
                                    </div>
                                )
                            }
                            )}
                    </div> :
                    null
            }
            <hr style={{ marginBottom: "50px", marginTop: "50px", width: "90%", marginLeft: "5%", marginRight: "5%" }} />
            <Footer />
           
        </>
    )
}
export default Home;

