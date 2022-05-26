import Card from './components/Card'
import Header from './components/Header';
import Drawer from './components/Drawer';

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
          <Card />
          <Card />
          <Card />
          <Card />
        </article>
      </div>

    </div>
  );
}

export default App;