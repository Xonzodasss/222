import { useState } from 'react';
import   './App.css'


function App() {
  // let son=5;
   let [son,setSon]=useState(1)
   let [korin,setKorin]=useState(true);
   let [yozuv,setYozuv]=useState("");
   function bos() {
      setSon(son + 1);
    }
   function minus() {
      setSon(son - 1);
    }
   function yoz(e){
    setYozuv(e.target.value)
 }
  return (
    <div className="container">
         <button onClick={bos}>Plus</button>
         <button onClick={minus}>Minus</button>
         <h1>Raqam= {son}</h1>
         <hr />
         <div className="box">
           <h2>Hidden Components</h2>
           <button onClick={()=> setKorin(false)}>Hidden</button>
           <button onClick={()=> setKorin(true)}>Show</button>
           <div style={{display:korin==true?"block":"none"}}>
           <p>Hello my name is Xonzodaxon</p>
           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1KsVLrv_Jh0kSBb-7rc9ZM4VeKcliw14bXg&s" alt="sdf"  width={400}/>
            </div>
         </div>
         <hr />
         <h2>Input Change</h2>
         <input value={yozuv} type="text" placeholder="yoz.." onChange={yoz}/>
         <h2>Sen yozgan yozuv: <mark>{yozuv}</mark></h2>
     </div>
  )
}

export default App
