import Card from './components/Card'
import Header from './components/Header';
import Drawer from './components/Drawer';

const cardArray = [
  {
    description: 'Мужские Кроссовки Nike Blazer Mid Suede',
    price: 12999,
    imageUrl: '/images/sneakers/image 1.jpg'
  },
  {
    description: 'Мужские Кроссовки Nike Air Max 270',
    price: 12999,
    imageUrl: '/images/sneakers/image 3.jpg'
  },
  {
    description: 'Мужские Кроссовки Nike Blazer Mid Suede',
    price: 8499,
    imageUrl: '/images/sneakers/image 2.jpg'
  },
  {
    description: 'Кроссовки Puma X Aka Boku Future Rider',
    price: 8999,
    imageUrl: '/images/sneakers/image 4.jpg'
  }
]

function App() {
  return (
    <div className="wrapper clear">

      <Drawer />

      <Header />

      <div className="main-content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все Кроссовки</h1>
          <div className="search-container">
            <img src='/images/search.svg' alt='Search' width={14} height={14}></img>
            <input placeholder="Search ..."></input>
          </div>
        </div>
        <article className="sneakers-container d-flex">
          {
            cardArray.map((obj) =>
              <Card
                description = {obj.description}
                price = {obj.price}
                imageUrl = {obj.imageUrl}
                onClick={() => console.log(obj)}
              />
            )
          }
        </article>
      </div>

    </div>
  );
}

export default App;