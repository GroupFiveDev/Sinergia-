import s from "./Card2.module.css";

const Card2 = ({title, image, text}) => {
    return (
        <div className={s.container}>
            <div className={s.image}>
                <div><img src={image} alt={title} /></div>
            </div>
            <div className={s.text}>
                <div><h1>{title}</h1></div>
                <div><p>{text}</p></div>
            </div>
        </div>
    )
}

export default Card2;