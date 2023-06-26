const Autor = ({data}) => {

    const span = document.querySelector('.data')

    const btn_autor = () => {
        span.classList.toggle('data2')
    }

    return(
        <div className="container_btn">
            <span className="data">{data.author}</span>
            <button onClick={btn_autor} className="btn2"><i class='bx bxs-user'></i></button>
        </div>
    )
}

export default Autor