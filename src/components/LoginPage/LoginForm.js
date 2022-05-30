import axios from "axios";
import { useContext, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import isUserLoggedContext from "../../contexts/isUserLoggedContext";

import Button from "../../shared/Button";
import Input from "../../shared/Input";


export default function LoginForm(){
    const navigate = useNavigate();
    const {setUserData} = useContext(UserContext);
    const {setIsUserLogged} = useContext(isUserLoggedContext);

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
        setLoading(true);
        promise
            .then(response=>{
                const {data} = response;
                console.log(data);
                setUserData({
                    image:data.image,
                    name:data.name,
                    token:data.token,
                });
                setIsUserLogged(true);
                navigate("/hoje");
                
            })
            .catch(err=> {
                alert("As informações de e-mail e/ou senha estão incorretas. Insira os dados novamente ou faça o cadastro!");
                setLoading(false);
            }); 
        
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