import React from "react";
import ReactDom from "react-dom";
import "./index.css";
ReactDom.render(<>

<div className="Container">
  <div className="first">
    <h2 id="R">Registration</h2>
    <input type="text" id="n" name="name" value="" placeholder="Enter The Name" style={{width:"400px",height:"40px",borderRadius:"8px"}}/><br/><br/>
    <input type="text" id="e" name="email" value="" placeholder="Enter The Email" style={{width:"400px",height:"40px",borderRadius:"8px"}}/><br/><br/>
    <input type="text" id="p" name="password" value="" placeholder="Enter The Password" style={{width:"400px",height:"40px",borderRadius:"8px"}}/><br/><br/>
    <input type="text" id="cp" name="confirm password" value="" placeholder="Enter The Password" style={{width:"400px",height:"40px",borderRadius:"8px"}}/><br/><br/>
    <input type="checkbox"/> I Accept All Terms And Conditions<br/><br/>
    <input type="button" id="b" name="s" value="Register Now" placeholder="Enter The Name" style={{width:"400px",height:"40px",borderRadius:"8px"}}/><br/>
    <h3 id="lo">Already Have An Account?<a href="#">Login Now</a></h3>
  </div>
  <div className="second">
    <h1 id="w">Beautiful<br/>Sign Up<br/>Form</h1>
  </div>
</div>

</>,document.getElementById("root"));