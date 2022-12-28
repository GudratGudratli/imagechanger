import React, { useState } from 'react';
import './App.css';
export default function ImageSlider() {
  
  const imgs=[
    {id:0, value:"https://picsum.photos/id/237/200/300"},
    {id:1, value:"https://picsum.photos/200/300?grayscale"},
    {id:2, value:"https://picsum.photos/200/300/?blur"},
  ]
  const [wordData,setWordData]=useState(imgs[0])
  const handleClick=(index)=>{
    console.log(index)
    const wordSlider=imgs[index];
    setWordData(wordSlider)
  }
  return (
    <div className="main">
      <img src={wordData.value} height="400" width="600" alt=''/> 
      <div className='flex_row'>
        {imgs.map((data,i)=>
        <div className="thumbnail" key={i} >
          <img className={wordData.id===i?"clicked":""} src={data.value} onClick={()=>handleClick(i)} height="70" width="100" alt='' />
        </div>
        )}
      </div>
    </div>
  );
}