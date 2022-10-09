import './App.css';

function App() {

  const onButtonClick = () => {
    alert("hi")
  }

  return (
    <div className="App">
    <h1>Hello World</h1>
    <button onClick = {onButtonClick}>Run</button>
    </div>
  );
}

export default App;
