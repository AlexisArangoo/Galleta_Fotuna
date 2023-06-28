import { useState, useEffect } from "react"

const Papelito = ({data, animacion}) => {

    return(
        <div>
            <h1 className="titulo">GALLETAS DE LA FORTUNA</h1>
            <article className={`papel ${animacion ? 'anim' : ''}`}>
                <div className="par">{data.phrase}</div>
            </article>
        </div>
    )
}

export default Papelito