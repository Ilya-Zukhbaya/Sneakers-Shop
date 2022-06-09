import Card from '../components/Card'

function Home({items, searchDescription, onChangeSearchInput, onAddToCard, onAddToFavorite, cartItems}) {
    return (
        <div className="main-content p-40">
            <div className="d-flex align-center justify-between mb-40">
                <h1>{searchDescription ? `Поиск по запросу: ${searchDescription}` : 'Все кроссовки'}</h1>
                <div className="search-container">
                    <img src='/images/search.svg' alt='Search' width={14} height={14}></img>
                    <input placeholder="Search ..." onChange={onChangeSearchInput} value={searchDescription}></input>
                </div>
            </div>
            <article className="sneakers-container d-flex flex-wrap justify-between">
                {
                    items
                        .filter(item => item.description.toLowerCase().includes(searchDescription.toLowerCase()))
                        .map((item, index) =>
                            <Card
                                key={index}
                                description={item.description}
                                price={item.price}
                                imageUrl={item.imageUrl}
                                onPlusClick={(obj) => onAddToCard(obj)}
                                onFavoriteAdd={(obj) => onAddToFavorite(obj)}
                                added={cartItems.some((obj) => obj.id === item.id)}
                                id = {item.id}
                            />
                        )
                }
            </article>
        </div>
    )
}

export default Home