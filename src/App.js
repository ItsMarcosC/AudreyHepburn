import './App.css';
const data = require ('./data/data_movies')

function App() {
  return (
    <div className="App">
      <img src={data.movies[10].cover} alt="" />
      <img src={data.movies[9].cover} alt="" />
      {console.log(data.books)}
    </div>
  );
}

export default App;
