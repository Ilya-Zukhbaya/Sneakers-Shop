import React from 'react';
import styles from './Card.module.scss';

function Card(props) {
    const [isAdded, setIsAdded] = React.useState(false)

    const onAddClick = () => {
        setIsAdded(!isAdded);
    }
    
    // React.useEffect(() => {
    //     console.log('Change card')
    // }, [isAdded])

    return (
        <article className={styles.card}>
            <div className={styles.favorite}>
                <img src='/images/whiteHeart.svg' alt='Unliked' className="favorite unfavorite" onClick={props.addToFavorite} />
            </div>
            <img width={133} height={112} src={props.imageUrl} alt="sneakers" />
            <h5>{props.description}</h5>
            <div className="d-flex justify-between">
                <div className="d-flex flex-column align-start">
                    <span>Цена:</span>
                    <b>{props.price} rub.</b>
                </div>
                <img className={styles.plus} src={isAdded ? '/images/checked.svg' : '/images/unchecked.svg'} alt="Add item" onClick={onAddClick}/>
            </div>
        </article>
    )
}

export default Card;