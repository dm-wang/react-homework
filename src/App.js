import logo from './logo.svg';
import './App.css';
import Clock from './components/clock';
import Card from './components/card';

function App() {
  return (
    <div className="App"> 
      <Clock city="Sydney"/>
      <Clock city="Seoul"/>
      <Clock city="New York"/>
      <Clock city="London"/>
      {/* <Card title="Editor's Picks" img="product.png" subTitle="Gifts for Him" content="For Valentine's Day" /> */}
    </div>
  );
}

export default App;

