import { useState } from "react";

const Formulario = () => {
    // Criando os estados para os campos do formulário
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [cell, setCell] = useState("")    

    // Função que trata a submissão do formulário
    const handleSubmit = (evento) =>{

        // Evitando o comportamento padrão do formulári que é ser recarregado
        evento.preventDefault();

        console.log("O formulário foi enviado!")
        console.log(name,email,password,confirmPassword,cell)
    }

    return(
        <>
        <h1>Cadastro de usuário</h1>
        <br />
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Digite o seu nome..." 
            // Quando o valor do input mudar, pegue o novo valor (evento.target.value) e atualize o estado com esse valor.
            onChange={(evento) => setName(evento.target.value)} value={name}/>
            <br />
            <input type="email" placeholder="Digite o seu email..." onChange={(evento) => setEmail(evento.target.value)} value={email}/>
            <br />
            <input type="password" placeholder="Digite a sua senha..." onChange={(evento) => setPassword(evento.target.value)} value={password}/>
            <br />
            <input type="password" placeholder="Confirme sua senha..." onChange={(evento) => setConfirmPassword(evento.target.value)} value={confirmPassword}/>
            <br />
            <input type="text" placeholder="Digite seu telefone..." onChange={(evento) => setCell(evento.target.value)} value={cell}/>
            <br />
            <br />
            <button type="submit">Cadastrar</button>
        </form>
        <h4>Chamando os estados para enxergar seus valores:</h4>
        <p>{name}</p>
        <p>{email}</p>
        <p>{password}</p>
        <p>{confirmPassword}</p>
        <p>{cell}</p>
        </>
    )
}

export default Formulario;