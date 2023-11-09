import stylezin from "./Card.module.css"
import {useState} from "react";

function Card({ item }){
    const [confirma, setConfirma] = useState("1")
    const [deleta, setDeleta] = useState("flex")
    const [total, setTotal] = useState([])
    function confirmar(event){
        setConfirma("0.2")
    }

    function deletar(){
        setDeleta("none")
    }

    function totals(){
        item.quantidade.append(setTotal)
    }

    return (
        <div style={{opacity:confirma, display: deleta}} className={stylezin.cardzinho}>
            <p className={stylezin.nomeProdutoQtd}>{item.produto}</p>
            <p onLoad={totals} className={stylezin.nomeProdutoQtd}>Qtd: {item.quantidade}</p>
            <div className={stylezin.divicons}>
                <button id={stylezin.i2} onClick={deletar}>
                    <p>Excluir</p>
                </button>
            </div>
        </div>
    )
}



export default Card