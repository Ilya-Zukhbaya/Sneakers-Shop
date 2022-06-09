import React from 'react';
import ContentLoader from "react-content-loader"
import styles from './Card.module.scss';

function Card({ description, imageUrl, price, onPlusClick, onFavoriteAdd, favorited, id, added = false, isLoading = false }) {
    const [isAdded, setIsAdded] = React.useState(added)
    const [isFavorite, setIsFavorite] = React.useState(favorited)

    const onAddClick = () => {
        onPlusClick({ id, description, imageUrl, price });
        setIsAdded(!isAdded);
    }

    const onFavoriteClick = () => {
        onFavoriteAdd({ id, description, imageUrl, price });
        setIsFavorite(!isFavorite);
    }

    return (
        <article className={styles.card}>
            {
                isLoading
                    ? <ContentLoader
                        speed={2}
                        width={160}
                        height={225}
                        viewBox="-5 0 150 265"
                        backgroundColor="#f3f3f3"
                        foregroundColor="#ecebeb"
                    >
                        <rect x="0" y="0" rx="10" ry="10" width="150" height="155" />
                        <rect x="0" y="167" rx="5" ry="5" width="150" height="15" />
                        <rect x="0" y="187" rx="5" ry="5" width="100" height="15" />
                        <rect x="0" y="235" rx="6" ry="6" width="80" height="25" />
                        <rect x="118" y="230" rx="10" ry="10" width="32" height="32" />
                    </ContentLoader>
                    :
                    <>
                        <div className={styles.favorite}>
                            <img src={!isFavorite ? '/images/whiteHeart.svg' : './images/redHeart.svg'} alt='Unliked' className="favorite unfavorite" onClick={onFavoriteClick} />
                        </div>
                        <img width={133} height={112} src={imageUrl} alt="sneakers" />
                        <h5>{description}</h5>
                        <div className="d-flex justify-between">
                            <div className="d-flex flex-column align-start">
                                <span>Цена:</span>
                                <b>{price} rub.</b>
                            </div>
                            <img className={styles.plus} src={isAdded ? '/images/checked.svg' : '/images/unchecked.svg'} alt="Add item" onClick={onAddClick} />
                        </div>
                    </>
            }
        </article>
    )
}

export default Card;