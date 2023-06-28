import { useState } from "react"

const Autor = ({data}) => {

    const [autor, setAutor] = useState(false)

    const btn_autor = () => {
        setAutor(!autor)
    }

    return(
        <div className="container_btn">
            <span className={`data ${autor ? 'data2' : ''}`}>{data.author}</span>
            <button onClick={btn_autor} className="btn2"><i class='bx bxs-user'></i></button>
        </div>
    )
}

export default Autor