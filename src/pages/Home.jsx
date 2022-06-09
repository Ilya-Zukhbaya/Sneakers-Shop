import Card from '../components/Card'

function Home({ items, searchDescription, onChangeSearchInput, onAddToCard, onAddToFavorite, cartItems, isLoading }) {

    const renderItems = (() => {
        const filtredItems = 
        items.filter((item) => item.description.toLowerCase().includes(searchDescription.toLowerCase()),
        );
        return (isLoading
            ? [...Array(12)]
            : filtredItems).map((item, index) => (
                <Card
                    key={index}
                    onPlusClick={(obj) => onAddToCard(obj)}
                    onFavoriteAdd={(obj) => onAddToFavorite(obj)}
                    added={cartItems.some((obj) => Number(obj.id) === Number(item.id))}
                    isLoading={isLoading}
                    {...item}
                />
            ))
    })

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
                    renderItems()
                }
            </article>
        </div>
    )
}

export default Home