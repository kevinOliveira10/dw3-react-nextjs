// Importando o hook do useState
import { useState } from "react";

// Importando o módulo de css
import styles from "@/components/Semaforo/Semaforo.module.css"
// Criando Semaforo
const Semaforo = () =>{
    // Criando um estado "cor" para o componente
    const [cor, setCor] = useState("cinza")
    return(
        <>
        {/* Div Container */}
        {/* Exemplo de CSS INLINE no React */}
        <div style={
            {
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                backgroundColor: "#f0f0f0",
                alignItems: "center"
            }
            }>
            <h3>Semáforo com React</h3>
            <br />
            <div className={`${styles.luz} ${cor == "vermelho" ? styles.vermelho : styles.cinza}`}></div>
            <div className={`${styles.luz} ${cor == "amarelo" ? styles.amarelo : styles.cinza}`}></div>
            <div className={`${styles.luz} ${cor == "verde" ? styles.verde : styles.cinza}`}></div>
            <div className={`${styles.luz} ${cor == "laranja" ? styles.laranja : styles.cinza}`}></div>
            <br />
            {/* Botões */}
            <div>
                {/*  */}
                <button className="button" onClick={()=>setCor("vermelho")}>Pare!</button>
                <button className="button" onClick={()=>setCor("amarelo")}>Atenção!</button>
                <button className="button" onClick={()=>setCor("verde")}>Prossiga!</button>
                <button className="button" onClick={()=>setCor("laranja")}>Laranja!</button>
            </div>
        </div>
        </>
    );
};

export default Semaforo;