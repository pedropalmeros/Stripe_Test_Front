import React, { useState } from "react";
import {useNavigate, Link} from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";
import axios from 'axios';
import {toast} from 'react-hot-toast';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const urlCreateNewUser = 'http://localhost:8080/api/login';

  const handleClick = async (e) => {
    try{ 
        e.preventDefault(); // to avoid reloading the page.
        const {data} = await axios.post(urlCreateNewUser, {
            email, 
            password
        });
        console.log(data);

        if(data.error){
            toast.error(data.error);
        }else{
            setEmail('');
            setPassword('');
            navigate("/")
        }
    }catch(err){
        console.log(err);
        toast.error("Something went wrong.Try again");
    }
  };

  return (
    <div className="d-flex justify-content-center" style={{ height: "80vh" }}>
      <div className="container align-items-center d-flex">
        <div className="row col-md-6 offset-md-3 text-center">
          <h1 className="pt-5 fw-bold">Login</h1>
          <p className="lead pb-4">
            Access your subscriptions. Anytime. Anywhere.
          </p>

          <div className="form-group">
            <Input
              label="Email"
              type="email"
              value={email}
              setValue={setEmail}
            />
            <Input
              label="Password"
              type="password"
              value={password}
              setValue={setPassword}
            />

            <div className="d-grid">
              <Button
                handleClick={handleClick}
                type="danger"
                text="Login"
                size="sm"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
