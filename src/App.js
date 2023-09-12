import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const[formdata,setformdata]=useState({firstname:"",lastname:"",email:"",country:"",streenaddress:"",city:"",state:"",zip:"",comment:false,
  candidates:false,offer:false,mode:""})
  function changeHandler(event){
    
   
    const {name,value,checked,type}=event.target;
  
    setformdata((prevFormdata)=>{
      return {
        ...prevFormdata,
        [name]:type==="checkbox"?checked:value
       
  
      }
    });
  }
  
  function submitHandler(event){
    event.preventDefault();
    console.log(formdata);

  }

 




  return (
    <div className="App">
     <form className='form-wrapper' onSubmit={submitHandler}>
      <label>First Name</label>
      <input onChange={changeHandler} className='down-border' value={formdata.firstname} name='firstname' type='text' placeholder='rohit'></input>
      <label>last Name</label>
      <input onChange={changeHandler} className='up-border' value={formdata.lastname} name='lastname' type='text' placeholder='bisht'></input>
      <label>Email address</label>
      <input onChange={changeHandler} className='down-border' value={formdata.email} name='email' type='text' placeholder='abhi123@gmail.com'></input>
      <label>country</label>
      <select onChange={changeHandler} className='up-border' value={formdata.country} name='country'>
        <option>india</option>
        <option>amarica</option>
        <option>europe</option>
        <option>brazil</option>
        <option>russia</option>


      </select>
      <label>Street address</label>
      <input onChange={changeHandler} className='down-border'  value={formdata.streenaddress} name='streenaddress' type='text' placeholder='123street'></input>
      <label>City</label>
      <input onChange={changeHandler} className='up-border' value={formdata.city} name='city' type='text' placeholder='noida'></input>
      <label>state/province</label>
      <input onChange={changeHandler} className='down-border' value={formdata.state} name='state' type='text' placeholder='delhi'></input>
      
      <label>ZIP/Postal code</label>
      <input onChange={changeHandler} className='up-border' value={formdata.zip} name='zip' type='text' placeholder='rohit'></input>
      {/* //check box */}
      <div>
        <h3>By Email</h3>
        <div>
        <input onChange={changeHandler} checked={formdata.comment} name='comment' type='checkbox'></input>
        <label>Comments</label>
        <br></br>
       <p className='sub-head'>Get notification when someone post a comment</p>
        </div>
        <div>
        <input onChange={changeHandler} checked={formdata.candidates} name='candidates' type='checkbox'></input>
        <label>Cadidates</label>
        <br></br>
       <p className='sub-head'>Get notified when a candidate applies for a job</p>
        </div>
        <div>
        <input onChange={changeHandler} checked={formdata.offer} name='offer' type='checkbox'></input>
        <label>offers</label>
        <br></br>
       <p className='sub-head'>Get notifies when a candidate accepts or reject </p>
        </div>

      </div>
      <div>
        <div>
        <h2>Push Notification</h2>
        <p className='sub-head'>these are delivered via mobile  </p>
        </div>

      <div className='ratio-part'>
      <div><input onChange={changeHandler} checked={formdata.mode==="alloffit"} 
       value="alloffit"  name='mode' id='alloffit' type='radio'></input>
        <label>Everythings</label></div>
       <div>
       <input onChange={changeHandler} checked={formdata.mode==="samemail"} 
       value="samemail" name='mode' id="samemail" type='radio'></input>
        <label>Same as email</label>
       </div>
        <div>
        <input onChange={changeHandler} checked={formdata.mode==="pop"}
        value="pop"
         id="pop" name='mode' type='radio'></input>
        <label>not to push</label>
        </div>
      </div>

      </div>
      <div>
      <button className='btn'>
        SAVE
      </button>
      </div>
     
     
     </form>

     
    </div>
  );
}

export default App;
