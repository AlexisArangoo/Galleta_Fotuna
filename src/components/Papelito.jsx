const Papelito = ({data}) => {
    return(
        <div>
            <h1 className="titulo">GALLETAS DE LA FORTUNA</h1>
            <article className="papel">
                <div className="par">{data.phrase}</div>
            </article>
        </div>
    )
}

export default Papelito