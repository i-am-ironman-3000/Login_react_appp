import React,{useState} from 'react'
import {Redirect} from 'react-router-dom';
export const Login = () => {
        const [email,setEmail]=useState('');
        const [pass,setPass]=useState('');
        function CheckLogin(){
            var email=document.getElementById("email").value;
            var pass=document.getElementById("pass").value;
            var data={
                Email:'admin@namasys.co',
                password:'admin123'
            }
            if(email===data.Email && pass===data.password){
                alert("Welcome")
            }else{
                alert("Invalid Login")
            }
        }
    return (
        <div>
            <div class="row">
                <div class="col-sm-6 mx-auto">
                <form onSubmit={CheckLogin}>
                <div class="from-group p-3">
                    <input type="email" class="form-control" onChange={(e)=>setEmail(e.target.value)} id="email" placeholder="name@example.com" />
                </div>
                <div class=" from-group p-3">
                    <input type="password" class="form-control" onChange={(e)=>setPass(e.target.value)} id="pass" placeholder="Password" />
                </div>
                <input type="submit" class="btn btn-success" value="login"/>
                </form>
                </div>
            </div>

        </div>
    )
}
