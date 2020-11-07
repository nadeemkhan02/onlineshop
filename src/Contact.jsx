import React from "react";

const Contact = () => {
    const Clicked= (e)=>{
        e.preventDefault()
        alert("your order hase been saved!!!")
    }
    return (
        <>
            <h3 style={{fontSize:"30px", textAlign:"center"}}>Contact Form</h3>
            <div className="container">
                <form>
                    <label for="fname">First Name</label>
                    <input type="text" id="fname" name="firstname" placeholder="Your name.." required />

                        <label for="lname">Last Name</label>
                        <input type="text" id="lname" name="lastname" placeholder="Your last name.." required/>
                        <label for="lname">Your Contact Number</label>
                        <input type="number" id="lname" name="lastname" placeholder="Your last name.." required/>
                            <label for="country">Your Delivery Address:</label>
                            <textarea id="subject" name="subject" placeholder="Write something.." style={{height:"200px"}}></textarea>

                            <label for="country">Your Order</label>
                            <textarea id="subject" name="subject" placeholder="Write something.." style={{height:"200px"}}></textarea>
                            <input onClick={Clicked} type="submit" value="Submit" />
       </form>
</div>
        </>
    )
}
export default Contact;