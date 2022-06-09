import React from 'react'
import { Route } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import Drawer from './components/Drawer';

import Home from './pages/Home';
import Favorites from './pages/Favorites';


function App() {

  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favoriteItems, setFavortiteItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);
  const [searchDescription, setSearchDescription] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchData(){
      const cartItemsResponse = await axios.get('https://62977d3a14e756fe3b3153c8.mockapi.io/cart');
      const favoriteItemsResponse = await axios.get('https://62977d3a14e756fe3b3153c8.mockapi.io/favorite');
      const itemsResponse = await axios.get ('https://62977d3a14e756fe3b3153c8.mockapi.io/items');

      setIsLoading(false);
      setCartItems(cartItemsResponse.data);
      setFavortiteItems(favoriteItemsResponse.data);
      setItems(itemsResponse.data);
    }

    fetchData();
  }, []);

  const onAddToCard = (obj) => {
    try {
      if (cartItems.find((cartItem) => Number(cartItem.id) === Number(obj.id))) {
        setCartItems(prev => prev.filter(item => Number(item.id) !== Number(obj.id)))
        axios.delete(`https://62977d3a14e756fe3b3153c8.mockapi.io/cart/${obj.id}`)
      }
      else {
        axios.post('https://62977d3a14e756fe3b3153c8.mockapi.io/cart', obj)
        setCartItems((prev) => [...prev, obj])
      }
    } catch (error) {
      alert(error)
    }
  }

  const onChangeSearchInput = (obj) => {
    setSearchDescription(obj.target.value);
  }

  const onRemoveItem = (id) => {
    axios.delete(`https://62977d3a14e756fe3b3153c8.mockapi.io/cart/${id}`)
    setCartItems((prev) => prev.filter(item => item.id !== id) )
  }

  const onAddToFavorite = async (obj) => {
    try {
      if (favoriteItems.find((fav) => fav.id === obj.id)){
        axios.delete(`https://62977d3a14e756fe3b3153c8.mockapi.io/favorite/${obj.id}`)
      }
      else {
        const { data }= await axios.post('https://62977d3a14e756fe3b3153c8.mockapi.io/favorite', obj);
        setFavortiteItems((prev) => [...prev, data])
      }
    }
    catch(err){
      alert(err)
    }
  }

  return (
    <div className="wrapper clear">

      {cartOpened && <Drawer cartItems={cartItems} onCartClose={() => setCartOpened(false)} onRemove={onRemoveItem} />}
      {/* if Left - true then right must be completed */}

      <Header onCartClick={() => setCartOpened(true)} />

      <Route path="/" exact>
        <Home
          items={items}
          cartItems={cartItems}
          searchDescription={searchDescription}
          onChangeSearchInput={onChangeSearchInput}
          onAddToCard={onAddToCard}
          onAddToFavorite={onAddToFavorite}
          isLoading={isLoading}
        />
      </Route>

      <Route path="/favorites" exact>
        <Favorites items={favoriteItems} onAddToFavorite={onAddToFavorite} />
      </Route>

    </div>
  );
}

export default App;