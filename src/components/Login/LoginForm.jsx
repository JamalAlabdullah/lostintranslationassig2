import { useState } from 'react';
import {useForm} from 'react-hook-form';
import {loginUser} from '../../api/user';

const userNameConfig={required:true,minLength:3}

const LoginForm = () => {
    const {register,handleSubmit,formState:{errors}} =useForm();

    const [loading, setLoading]= useState(false);
   
   
    const onSubmit = async ({username}) => {
        setLoading(true);
        const [error, user] = await loginUser(username)
       console.log("error:",error);
        console.log("user:", user);
        setLoading(false);
       };

        console.log(errors);

        const errormessage = (() =>{
            if(!errors.username){return null}
            if(errors.username.type==='required'){
                return <span className='requiredInput'>Name is required</span>}
            if(errors.username.type==='minLength'){
                return <span className='requiredInput'>Name should be at least three letters</span>}
        })()
    
return (
    <div className="container">
    
    <img  className="image" src="./Images/logo.png" alt="Logo"></img><br></br>
    <h3 className="welcomeMessage">Welcome To Lost In Translation</h3><br></br>
   
    <form onSubmit={handleSubmit(onSubmit)}>

    <fieldset>
    <label htmlFor='username'>Username: </label><br></br>
    <input 
    className="inputText" 
    type="text"
     {...register("username",userNameConfig)}
    placeholder="Enter your name to log in..." /><br></br>
    {errormessage}<br></br>
    </fieldset>
    <button type="submit" disabled={loading} className="btn btn-primary">LOG IN</button><br></br>

    {loading && <p className='loginLoading'>Logging in...</p>}<br></br>

    </form>

    <p className="forgetPassword">Forget Password? Reset</p>
   


    </div>
)


}





export default LoginForm