function Card() {
    return (
        <article className="card">
            <div className="favorite-container">
                <img src='/images/whiteHeart.svg' alt='Unliked' className="favorite unfavorite" />
            </div>
            <img width={133} height={112} src="/images/sneakers/image 1.jpg" alt="sneakers" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between">
                <div className="d-flex flex-column align-center">
                    <span>Цена:</span>
                    <b>12 999 rub.</b>
                </div>
                <button>
                    <img width={11} height={11} src="/images/Vector.png" alt="Add item" />
                </button>
            </div>
        </article>
    )
}

export default Card;