// import axios from "axios";
import axios from "axios";
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";


import Button from "../../shared/Button";
import Input from "../../shared/Input";


export default function LoginForm({saveToken}){
   const navigate = useNavigate();

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [loading,setLoading] = useState(false);
    
    function submitData(event) {

        event.preventDefault();
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login";
        const promise = axios.post(URL, {
            email,
            password,
        });
        promise
            .then(response=>{
                const {data} = response;
                console.log(data);
                saveToken(data.token);
            })
            .catch(err=> console.log(err.response)); 
        
        setLoading(true);
        setTimeout(()=>{
                setLoading(false);
                navigate("/hoje");
            },2000);
        
      }

    function loadingButton(){
        return loading ? (
            <ThreeDots color="var(--white)" background-color={"var(--background-button"} opacity={0.7} height={80} width={80} />)
            :
            ("Entrar"
        );
    }
    function disable(){
        return loading ? "disable" : "";
    }
    

    return (
        <form onSubmit={submitData}>
            <Input type="text" placeholder="E-mail" value={email} onChange={e=> setEmail(e.target.value)} disabled={disable()} color={loading} required />
            <Input type="password" placeholder="Senha" value={password} onChange={e=> setPassword(e.target.value)} disabled={disable()} color={loading} required />
            <Button >{loadingButton()}</Button>
        </form>
    );
}