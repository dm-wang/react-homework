import logo from './logo.svg';
import './App.css';
import Clock from './components/clock';
import Card from './components/card';

function App() {
  return (
    <div className="App"> 
      <Clock tz="Australia/Sydney" city="Sydney"/>
      <Clock tz="Korea/Seoul" city="Seoul"/>
      <Clock tz="America/New_York" city="New York"/>
      <Clock tz="Europe/London" city="London"/>
      {/* <Card title="Editor's Picks" img="product.png" subTitle="Gifts for Him" content="For Valentine's Day" /> */}
    </div>
  );
}

export default App;

