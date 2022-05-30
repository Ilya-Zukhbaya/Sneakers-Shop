import styles from './Card.module.scss';

function Card(props) {
    return (
        <article className={styles.card}>
            <div className={styles.favorite}>
                <img src='/images/whiteHeart.svg' alt='Unliked' className="favorite unfavorite" />
            </div>
            <img width={133} height={112} src={props.imageUrl}alt="sneakers" />
            <h5>{props.description}</h5>
            <div className="d-flex justify-between">
                <div className="d-flex flex-column align-start">
                    <span>Цена:</span>
                    <b>{props.price} rub.</b>
                </div>
                <button onClick={props.onClick}>
                    <img width={11} height={11} src="/images/Vector.png" alt="Add item" />
                </button>
            </div>
        </article>
    )
}

export default Card;