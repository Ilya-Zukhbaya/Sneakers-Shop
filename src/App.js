import React from 'react'
import Card from './components/Card'
import Header from './components/Header';
import Drawer from './components/Drawer';


function App() {
  const [items, setItems] = React.useState([])
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    fetch('https://62977d3a14e756fe3b3153c8.mockapi.io/items')
    .then((response) => {
      return response.json();
    })
    .then((json) => {setItems(json)})
  }, [])
  return (
    <div className="wrapper clear">

      {cartOpened && <Drawer onCartClose={() => setCartOpened(false)} />}
      {/* if Left - true then right must be completed */}

      <Header onCartClick={() => setCartOpened(true)} />

      <div className="main-content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все Кроссовки</h1>
          <div className="search-container">
            <img src='/images/search.svg' alt='Search' width={14} height={14}></img>
            <input placeholder="Search ..."></input>
          </div>
        </div>
        <article className="sneakers-container d-flex flex-wrap justify-between">
          {
            items.map((obj) =>
              <Card
                description={obj.description}
                price={obj.price}
                imageUrl={obj.imageUrl}
              />
            )
          }
        </article>
      </div>

    </div>
  );
}

export default App;