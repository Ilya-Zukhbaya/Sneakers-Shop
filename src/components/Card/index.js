import React from 'react';
import styles from './Card.module.scss';

function Card({description, imageUrl, price, onPlusClick, onFavoriteAdd, favorited, id, added = false}) {
    const [isAdded, setIsAdded] = React.useState(added)
    const [isFavorite, setIsFavorite] = React.useState(favorited)

    const onAddClick = () => {
        onPlusClick({id, description, imageUrl, price});
        setIsAdded(!isAdded);
    }

    const onFavoriteClick = () => {
        onFavoriteAdd({id, description, imageUrl, price});
        setIsFavorite(!isFavorite);
    }

    return (
        <article className={styles.card}>
            <div className={styles.favorite}>
                <img  src={!isFavorite ? '/images/whiteHeart.svg' : './images/redHeart.svg'} alt='Unliked' className="favorite unfavorite" onClick={onFavoriteClick} />
            </div>
            <img width={133} height={112} src={imageUrl} alt="sneakers" />
            <h5>{description}</h5>
            <div className="d-flex justify-between">
                <div className="d-flex flex-column align-start">
                    <span>Цена:</span>
                    <b>{price} rub.</b>
                </div>
                <img className={styles.plus} src={isAdded ? '/images/checked.svg' : '/images/unchecked.svg'} alt="Add item" onClick={onAddClick}/>
            </div>
        </article>
    )
}

export default Card;