import React,{useState} from 'react'



export default function Forms(props) {
    const [text,setText]=useState('')
    const handleUpClick = () =>
    {
        // console.log("submit clicked");
        let newtext=text.toUpperCase();
        setText(newtext);
        props.showalert("Converted to Upper Case","success")
    }
    const handleClearClick=()=>
    {
      let newtext='';
      setText(newtext);
      props.showalert("Cleared Text","success")
    }
    const handleLoClick = () =>
    {
        // console.log("submit clicked");
        let newtext=text.toLowerCase();
        setText(newtext);
        props.showalert("Converted to Lower Case","success")

    }
    function capitalize(s)
    {
      return (s[0].toUpperCase() + s.slice(1));
    }
    
    const handleCapClick = () =>
    {
      // console.log("submit clicked");
      props.showalert("Converted First letter in Capital","success")
        let newtext=capitalize(text);
        setText(newtext);

    }
    const handleChange = (event) =>
    {
        // console.log("text changed");
        setText(event.target.value)
    }
    const handleCopyClick= ()=>     //MY CODE
    {
    navigator.clipboard.writeText(text);
    props.showalert("Copied data to clipboard","success")
    }
    // const handleCopyClick= ()=>     //HARRY'S CODE 
    // {
    //   let newtext=document.getElementById("data");
    //    newtext.select();
    //    navigator.clipboard.writeText(newtext.value);
    // }
    const handleSpacingClick= ()=>
    {
       let newtext =text.split(/[ ]+/);
       console.log(newtext.join(" ").length);
       setText(newtext.join(" "));
       props.showalert("Removed extra spaces","success")
    }
    // const words=()=>
    // {
    //   let totalwords;
    //   let w=0;
    //   totalwords=text.split(" ");
    //   let length;
    //   length=text.split(" ").length;
    //   for(let i=0;i<length;i++)
    //   {
    //     if(totalwords[i]==='')
    //     {

    //     }
    //     else{
    //       w=w+1;
    //     }
    //   }
    //   return w;
    // }

    // let a= words();

  return (
    <>
    <div className='container' style={{color:props.color==='light'?'#060446':'white'}} >
        <h1 className='my-4' >Enter your text to summarize</h1>
        <div className="mb-3">
  <textarea style={{resize:"none",color:props.color==='light'?'#060446':'white',backgroundColor:props.color==='light'?'white':'rgb(7 48 80)'}} rows='6' value={text} placeholder ="Enter your text here"  onChange={handleChange}  className="form-control" id="exampleFormControlTextarea1" ></textarea>
</div>
        
          </div>
          <div className="container" >
            
          <button disabled={text.length===0} className={`btn btn-${props.color==='light'?'primary':'secondary'} mx-2 my-2`} onClick={handleUpClick}>Uppercase</button>
          <button disabled={text.length===0} className={`btn btn-${props.color==='light'?'primary':'secondary'} mx-2 my-2`} onClick={handleLoClick}>Lowercase</button>
          <button disabled={text.length===0} className={`btn btn-${props.color==='light'?'primary':'secondary'} mx-2 my-2`} onClick={handleClearClick}>Clear Text</button>
          <button disabled={text.length===0} className={`btn btn-${props.color==='light'?'primary':'secondary'} mx-2 my-2`} onClick={handleCapClick}>Capitalize</button>
          <button disabled={text.length===0} className={`btn btn-${props.color==='light'?'primary':'secondary'} mx-2 my-2`} onClick={handleCopyClick}>Copy Text</button>
          <button disabled={text.length===0} className={`btn btn-${props.color==='light'?'primary':'secondary'} mx-2 my-2`} onClick={handleSpacingClick}>Remove Extra Space</button>
          </div>
          <div className='container my-3' style={{color:props.color==='light'?'#060446':'white'}}>
            <h1>Your text summary</h1>
            <p>{ text.split(/\s+/).filter((element)=>{return (element.length!==0) }).length } words {text.replaceAll(' ','').length} characters</p>
            <p>{0.008*(text.split(/\s+/).filter((element)=>{return (element.length!==0)})).length} time required to read</p>
            <h3>Summary</h3>
            <p>{(text.split(/\s+/).filter((element)=>{return (element.length!==0)})).length>0?text:"Enter something in the textbox above to preview it here"}</p>
          </div>
          </>
  )
}
