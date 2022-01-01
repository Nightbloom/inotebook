import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = (props) => {

    const [credentials, setCredentials] = useState({name: "", email: "", password: "", cpassword: "" })
    let navigate = useNavigate();

    const handleSubmit = async(e)=>{
        e.preventDefault();
        const {name, email, password} = credentials;
        const response = await fetch(`http://localhost:5000/api/auth/createsuser`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'

            },
            body: JSON.stringify({name, email, password})
        });
        const json = await response.json()
        console.log(json);
        if(json.success){
            // Save the auth token redirect 
            localStorage.setItem('token', json.authtoken);
            navigate("/");
            props.showAlert("Account Created Successfully", "success")

        }
        else{
            props.showAlert("Credentials existing or Invalid Cerdentials", "danger")
        }
    }

    const onChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value  })

    }



    return (
        <div>
            <h2>Create an Account to continue</h2>
            <form className='container' onSubmit={handleSubmit}>
            <div className="mb-3">
                {/* value={credentials.email} onChange={onChange} */}
                <label htmlFor="name" className="form-label">Username</label>
                <input type="text" className="form-control"  id="name" name='name' onChange={onChange} aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
                {/* value={credentials.email} onChange={onChange} */}
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control"  id="email" name='email' onChange={onChange} aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
                {/* value={credentials.password} onChange={onChange} */}
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control"  id="password" name='password' onChange={onChange} minLength={5} required/>
            </div>
            <div className="mb-3">
                {/* value={credentials.password} onChange={onChange} */}
                <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                <input type="password" className="form-control"  id="cpassword" name='cpassword' onChange={onChange} minLength={5} required/>
            </div>
            <button type="submit" className="btn btn-primary" >Submit</button>
            </form>
        </div>
    )
}

export default Signup
