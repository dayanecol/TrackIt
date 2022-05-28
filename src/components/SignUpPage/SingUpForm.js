// import axios from "axios";
import axios from "axios";
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";


import Button from "../../shared/Button";
import Input from "../../shared/Input";


export default function SignUpForm(){
    const navigate = useNavigate();

    let [email,setEmail] =useState("");
    let [password, setPassword] = useState("");
    let [name, setName] = useState ("");
    let [image, setImage] = useState ("");
    const [loading,setLoading] = useState(false);
    

    function submitData(event) {
        event.preventDefault();

        const URL="https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";
        const promise = axios.post(URL, {
            email,
            password,
            name,
            image
        });
        setLoading(true);
        promise
            .then(response => {
                const {data}=response;
                console.log(data);
                navigate("/");
            })
            .catch(err=> {
                setEmail ="";
                setPassword ="";
                setName ="";
                setImage ="";
                alert("Usuário cadastrado ou os dados foram preenchidos incorretamente!");
                // navigate("/cadastro");
                setLoading(false);
                    
                
            }); 
        
      }

    function loadingButton(){
        return loading ? (
            <ThreeDots color="var(--white)" background-color={"var(--background-button"} opacity={0.7} height={80} width={80} />)
            :
            ("Cadastrar"
        );
    }
    function disable(){
        return loading ? "disable" : "";
    }
    

    return (
        <form onSubmit={submitData}>
            <Input type="text" placeholder="E-mail" value={email} onChange={e=> setEmail(e.target.value)} disabled={disable()} color={loading} required  />
            <Input type="password" placeholder="Senha" value={password} onChange={e=> setPassword(e.target.value)} disabled={disable()} color={loading} required  />
            <Input type="text" placeholder="Nome" value={name} onChange={e=> setName(e.target.value)} disabled={disable()} color={loading} required  />
            <Input type="text" placeholder="Foto" value={image} onChange={e=> setImage(e.target.value)} disabled={disable()} color={loading} required  />
            <Button>{loadingButton()}</Button>
        </form>
    );
}