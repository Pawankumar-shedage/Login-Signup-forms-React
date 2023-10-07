import { useState } from "react";
import { useNavigate } from "react-router-dom"

// eslint-disable-next-line react/prop-types
export const Register = ({savedData}) => {

    const navigateTo = useNavigate();

    // const [name,setName] = useState("")
    // const [email,setEmail] = useState('')
    const [formData,setFormData] = useState({name:'',email:'',password:''})
    // const [password,setPassword] = useState('')

    const [agree, setAgree] = useState(false)


    const handleChange=(e)=>{
        const{name,value} = e.target;
        setFormData({...formData, [name]:value});
        console.log("im here")
    }

    const handleSubmit = (e)=>{
        
        e.preventDefault()
        // {pass2 != password ? alert("enter correct password") : }

        savedData(formData)
        // setName("")
        // setEmail("")
        // setPassword("")

        navigateTo('/')
    }



    return (
    <>
        <form className="container" onSubmit={handleSubmit}>
        <div className="form-group mb-3">
            
            <p style={{textAlign:"left"}} >Name</p>
            <input
                type="text" 
                name="name"
                value = {formData.name}
                onChange={handleChange} 
                className="form-control"
                id="exampleInputName" 
                aria-describedby="emailHelp" 
                placeholder="Enter name" 
                
            />
            
        </div>
        
        <div className="form-group mb-3">
            
            <p style={{textAlign:"left"}} >Email address</p>
            <input
                value = {formData.email}
                onChange={ handleChange} 
                type="email" 
                name="email"
                className="form-control" 
                id="exampleInputEmail1" 
                aria-describedby="emailHelp" 
                placeholder="Enter email" 
            />
            
        </div>
        
        <div className="form-group mb-3">
            <p style={{textAlign:"left"}} className="text-left" htmlFor="exampleInputPassword1">Password</p>
            <input
                value = {formData.password}
                onChange={ handleChange} 
                type="password"
                name="password"
                className="form-control" 
                id="exampleInputPassword1" 
                placeholder="Password" 
            />
        </div>
        
        {/* no need of pass 2 */}
        {/* <div className="form-group mb-3">
            <p style={{textAlign:"left"}} className="text-left" htmlFor="exampleInputPassword1">Re-enter Password</p>
            <input
                value={pass2}
                onChange={(e)=>{
                    {password && setPass2(e.target.value)}
                } } 
                type="password" className="form-control" 
                id="exampleInputPassword2" 
                placeholder="Re-enter Password" />
        </div> */}
        
        <div className="form-check">
            <input
                value={agree}
                onChange={ (e)=>{
                    setAgree(e.target.checked);
                } } 
                type="checkbox" 
                
                className="form-check-input" 
                id="exampleCheck1"
            />
            <p style={{textAlign:"left"}} className=" form-check-label" htmlFor="exampleCheck1">I agree all statements in <a href="#">Terms of service</a></p>
        </div>

        <button type="submit"  className="btn btn-primary">
            Submit
        </button>
        </form>
    </>
  )
}
