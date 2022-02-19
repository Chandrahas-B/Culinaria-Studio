import React, { Component } from 'react';

class LoginForm extends React.Component{
    styles={color:"whitesmoke",fontSize:15}
  render(){
    return(
      <div style={this.styles} id="loginform">
        <FormHeader title="Sign up to try our food recommender system." />
        <Form />
      </div>
    )
  }
}

const FormHeader = props => (
    <div style={{fontSize: 25}} id="headerTitle">{props.title}</div>
);


const Form = () => (
   <div><form action="./dash.html" >
     <FormInput description="Create Username" id="usn" placeholder="Enter your username" type="text" min="1"  pat="[A-Za-z0-9_]+" tit="Please use alphabets,numbers and '_' special character only" />
     <center><div id="erroru"></div></center>
     <FormInput description="Email" id="email" placeholder="Enter your email" type="email" min="1" pat="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" tit="Please include '@' and '.com' "/>
     <center><div id="errore"></div></center>
     <FormInput description="Create Password" id="pwd1" value="" placeholder="Enter your username" type="password" min="8" pat="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" tit="Password must contain atleast 1 symbol,number and alphabet and must have atleast 8 characters" />
     <center><div id="errorcp"></div></center>
     <FormInput description="Repeat Password" id="pwd2" placeholder="Confirm password"  type="password" min="8" pat="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" tit="Password length must be more than 8 characters" />
     <center><div id="errorrp"></div></center>
     <div id="error"></div>
     <br/>
     
     <br/>
     <center><div ><input id="sub-btn" type="submit" className="rowbutton"  value="Sign Up" />
     </div></center><br/><br/></form>
   </div>
);



const FormInput = props => (
  <div className="row">
    <label>{props.description}</label>
    <input type={props.type} placeholder={props.placeholder} id={props.id} required minLength={props.min} pattern={props.pat} title={props.tit} onChange={error} />
    {/* <div id="error"></div> */}
  </div>  
); 
const error=()=>{
let usn=document.getElementById("usn").value;
let email=document.getElementById("email").value;
let cpass=document.getElementById("pwd1").value;
let rpass=document.getElementById("pwd2").value;

if(usn==="abcd" ){
  document.getElementById("erroru").style="color:red";
  setTimeout(()=>{ document.getElementById("erroru").innerHTML="<br/>Username not available.";},600);
  document.getElementById("sub-btn").disabled="disabled";
}
else if(usn.length ==0 || usn.match(/[!@#$%^&*()-+={|'`~";:.,<>/?}+ ]/)){
  document.getElementById("erroru").style="color:red";
  setTimeout(()=>{document.getElementById("erroru").innerHTML="<br/>Invalid username.";},500);
  document.getElementById("sub-btn").disabled="disabled";
}
else{
  document.getElementById("erroru").style="color:lightgreen";
  document.getElementById("erroru").innerHTML="";
  setTimeout(()=>{document.getElementById("erroru").innerHTML="Nice Username!<br/>Hello "+usn;},800);
  document.getElementById("sub-btn").disabled=false;
}

if(email.length===0){
  document.getElementById("errore").innerHTML="Enter a valid Email address"
  document.getElementById("sub-btn").disabled="disabled";
}
else if(email.includes("@") &&  email.includes(".com") ){
  document.getElementById("errore").innerHTML=""
  document.getElementById("sub-btn").disabled=false;
}
else{
  document.getElementById("errore").style="color:red";
  document.getElementById("errore").innerHTML="Invalid mail ID!"
  document.getElementById("sub-btn").disabled="disabled";
}
if(cpass.length===0){
  document.getElementById("errorcp").style="color:whitesmoke"
  document.getElementById("errorcp").innerHTML="Please enter a password containing atleast one character from A-Z, a-z, 0-9 and a special character"  
  document.getElementById("sub-btn").disabled="disabled";
}
else if(cpass.length <=10){
  document.getElementById("errorcp").style="color:orange"
  document.getElementById("errorcp").innerHTML="Password Strength: Weak"
  document.getElementById("sub-btn").disabled=false;
}
else if(cpass.length <=15){
  document.getElementById("errorcp").style="color:lightgreen"
  document.getElementById("errorcp").innerHTML="Password Strength: Good"
  document.getElementById("sub-btn").disabled=false;
}
else{
  document.getElementById("errorcp").style="color:lightgreen"
  document.getElementById("errorcp").innerHTML="<b>Password Strength: Strong!</b>"
  document.getElementById("sub-btn").disabled=false;
}

if(rpass.length===0){
  document.getElementById("errorrp").style="color:lightred"
  document.getElementById("errorrp").style="Please match the two passwords"
  document.getElementById("sub-btn").disabled="disabled";
}
else if(rpass===cpass){
  document.getElementById("errorrp").style="color:lightgreen"
  document.getElementById("errorrp").innerHTML="Both passwords match"
  document.getElementById("sub-btn").disabled=false;
}
else{
  document.getElementById("errorrp").style="color:red"
  document.getElementById("errorrp").innerHTML="Please match the two passwords"
  document.getElementById("sub-btn").disabled="disabled";
}

};


export default LoginForm;