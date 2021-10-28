import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
       // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase!","success")
    }
    const handleClearText = ()=>{
         let newText = ('');
         setText(newText)
         props.showAlert("Text Cleared!","success")
    }

    const handleLoClick = ()=>{
        // console.log("Uppercase was clicked" + text);
         let newText = text.toLowerCase();
         setText(newText)
         props.showAlert("Converted to Lowercase!","success")
    }
     const handleOnChange = (event)=>{
           // console.log("On Change");
            setText(event.target.value);
           
        }

    const [text, setText] = useState('');

    return (
        <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
<div className="mb-3">
    
    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}}  id="myBox" rows="8"></textarea>
</div>
      <button className="btn btn-warning mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-warning mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
      <button className="btn btn-warning mx-2" onClick={handleClearText}>ClearText</button>
    </div>

    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
     <h2>Your text summary</h2>
     <p>{text.split(" ").length} words, {text.length}characters</p>
     <p>{0.008 * text.split(" ").length}Minutes read</p>
     <h2>Preview</h2>
     <p>{text.lenghts>0?text:"Enter somethingh in the textbox above to preview it here"}</p>
</div>
    </>
    )
}
