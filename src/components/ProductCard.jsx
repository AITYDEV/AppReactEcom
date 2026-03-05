



import style from './ProductCard.module.css'


export default function ProductCard({info}){
    return(
        <div className={style.product}>
            <img src={info.img} alt={info.ref} />
            <h4>{info.ref}</h4>
            <p>
                <del>{info.price} Dhs</del>
                <strong>{info.promo} Dhs</strong>
            </p>
            <ul>
                <li>Brand : {info.brand} </li>
                <li>Family : {info.family} </li>
            </ul>
        </div>
    )
}