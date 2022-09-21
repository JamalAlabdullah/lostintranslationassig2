import { useState, useEffect } from 'react';
import {useForm} from 'react-hook-form';
import {loginUser} from '../../api/user';
import { storageSave } from '../../utils/storage';
import {useNavigate} from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import { STORAGE_KEY_USER } from '../../const/storageKey';

const userNameConfig={required:true,minLength:3}

const LoginForm = () => {
    const {register,handleSubmit,formState:{errors}} =useForm();
    const {user, setUser} = useUser();
    const navigate= useNavigate();

    //local state
    const [loading, setLoading]= useState(false);
    const [apiError, setApiError]= useState("");
    // side effects / to redirect the user to translation page after to check it
    
    useEffect(() => {
     if(user!==null){
       navigate('translations');

     }
    },[user, navigate])

    // event handlers
    const onSubmit = async ({username}) => {
        setLoading(true);
        const [error, userResponse] = await loginUser(username)
        if(error!==null){setApiError(error)}
        if(userResponse!==null ){
            storageSave(STORAGE_KEY_USER, userResponse)
            setUser(userResponse)
        }
        setLoading(false)
       };

     

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
    <h3 className="welcomeMessage animate__animated animate__backInDown">Welcome To Lost In Translation</h3><br></br>
   
    <form onSubmit={handleSubmit(onSubmit)}>

    <fieldset>
    <label className="interUser" htmlFor='username'>Username </label><br></br>
    <input 
    className="inputText" 
    type="text"
     {...register("username",userNameConfig)}
    placeholder="Enter your name to log in..." /><br></br>
    {errormessage}<br></br>
    </fieldset>
    <button type="submit" disabled={loading} className="btn btn-primary">LOG IN</button><br></br>

    {loading && <p className='loginLoading'>Logging in...</p>}<br></br>
    {apiError && <p>{apiError}</p>}<br></br>

    </form>

    <p className="forgetPassword">Forget Password? Reset</p><br></br>
   


    </div>
)


}





export default LoginForm