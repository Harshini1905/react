import React from 'react';
import './slam.css';


function Slambook(){
  return (
     <div className="container">
        <form>
    <fieldset>
    <legend>Slam Book</legend>
        <label for="name">Name:</label>
        <input type="text" name="name" />
        <br /><br/>
      
        <label for="nickname">Nickname:</label>
        <input type="text" name="nickname" /><br/><br/>
      
        <label for="address">Address:</label>
        <input type="text" name="address" /><br/><br/>
      
        <label for="phoneNo">Phone No:</label>
        <input type="text" name="phoneNo" /><br/><br/>
      
        <label>Memories:</label>
        <textarea name="memories"></textarea><br/><br/>
      
        <label>Gender:</label>
        <label>
          <input type="radio" name="gender"  /> Male
        </label>
        <label>
          <input type="radio" name="gender"  /> Female
        </label><br/><br/>
      
        <label>Favourite Actors:</label>
        <label>
          <input type="checkbox" name="favActors" value="Actor1" /> Vijay
        </label>
        <label>
          <input type="checkbox" name="favActors" value="Actor2" /> Suriya
        </label>
        <label>
          <input type="checkbox" name="favActors" value="Actor3" /> Sivakarthikeyan
        </label>
        <label>
          <input type="checkbox" name="favActors" value="Actor3" /> Simbu
        </label><br/><br/>
      
        <label>School:</label>
        <select name="school">
          <option value="">Select School</option>
          <option value="School1">Bannari Amman Matric Hr Sec School</option>
          <option value="School2">Little Flower Matric Hr Sec School</option>
          <option value="School3">SRC Matric Hr Sec School</option>
        </select>
        <br/><br/>
     
      <button type="submit">Submit</button>
      </fieldset>
      </form>
      </div>
      
     
  
   
    
    
  
    
  );
};

export default Slambook;

     