import React from 'react'
import axios from 'axios';
import Card from './components/Card'
import Header from './components/Header';
import Drawer from './components/Drawer';


function App() {

  const [items, setItems] = React.useState([])
  const [cartItems, setCartItems] = React.useState([])
  const [cartOpened, setCartOpened] = React.useState(false);
  const [searchDescription, setSearchDescription] = React.useState('')

  React.useEffect(() => {
    axios.get('https://62977d3a14e756fe3b3153c8.mockapi.io/items').then(response => {
      setItems(response.data)
    })
    axios.get('https://62977d3a14e756fe3b3153c8.mockapi.io/cart').then(response => {
      setCartItems(response.data)
    })
  }, [])

  const onAddToCard = (obj) => {
    axios.post('https://62977d3a14e756fe3b3153c8.mockapi.io/cart', obj)
    setCartItems(prev => [...prev, obj]);
  }

  const onChangeSearchInput = (obj) => {
    setSearchDescription(obj.target.value);
  }

  const onRemoveItem = (id) => {
    axios.delete(`https://62977d3a14e756fe3b3153c8.mockapi.io/cart/${id}`)
    setCartItems((prev) => {prev.filter(item => item.id !== id)})
  }

  return (
    <div className="wrapper clear">

      {cartOpened && <Drawer cartItems={cartItems} onCartClose={() => setCartOpened(false)} onRemove={onRemoveItem} />}
      {/* if Left - true then right must be completed */}

      <Header onCartClick={() => setCartOpened(true)} />

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
              .filter(obj => obj.description.toLowerCase().includes(searchDescription.toLowerCase()))
              .map((obj, index) =>
                <Card
                  key={index}
                  description={obj.description}
                  price={obj.price}
                  imageUrl={obj.imageUrl}
                  onPlusClick={(obj) => onAddToCard(obj)}
                />
              )
          }
        </article>
      </div>

    </div>
  );
}

export default App;