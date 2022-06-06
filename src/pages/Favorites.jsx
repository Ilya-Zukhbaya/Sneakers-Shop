import Card from '../components/Card'


function Favorites({ items, onAddToFavorite}) {
    return (
        <div className="main-content p-40">
            <div className="d-flex align-center mb-40">
                <h1>Мои закладки</h1>
            </div>
            <article className="sneakers-container d-flex flex-wrap">
                {
                    items.map((obj, index) => (
                        <Card
                            key={index}
                            favorited={true}
                            onFavoriteAdd={onAddToFavorite}
                            description={obj.description}
                            price={obj.price}
                            imageUrl={obj.imageUrl}
                            id = {obj.id}
                        />
                    ))
                }
            </article>
        </div>
    )
}

export default Favorites