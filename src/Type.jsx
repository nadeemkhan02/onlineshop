
import React from 'react';
import ReactJsTyping from 'reactjs-typing-effect';

const Type= ()=>{
    const list=['Apna Wholesaler...']
    return(
    <div style={{ fontSize: 40,fontFamily:"'Mulish', sans-serif", color: 'orange',padding:"5px"}}>
    <ReactJsTyping StringList={list} speed={600}/>
     </div>
    )
}
export default Type;