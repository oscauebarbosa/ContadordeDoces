import stylezin from "./Card.module.css"
import {useState} from "react";

function Card({ item }){
    const [deleta, setDeleta] = useState("flex")

    function deletar(){
        setDeleta("none")
    }

    return (
        <div style={{display: deleta}} className={stylezin.cardzinho}>
            <p className={stylezin.nomeProdutoQtd}>{item.produto}</p>
            <p className={stylezin.nomeProdutoQtd}>Qtd: {item.quantidade}</p>
            <div className={stylezin.divicons}>
                <button id={stylezin.i2} onClick={deletar}>
                    <p>Excluir</p>
                </button>
            </div>
        </div>
    )
}



export default Card