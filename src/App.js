import Joke from "./components/Joke";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Joke
      number="1"
        setup="I got my daughter a fridge for her birthday"
        punchline="I can't wait to see her face light up when she opens it."
      />

      <Joke
      number="2"
        setup="How did the hacker escape the police?"
        punchline="He just ransomware!"
      />

      <Joke
      number="3"
        setup="Why don't pirates travel on mountain roads?"
        punchline="Scurvy."
      />

      <Joke
      number="4"
        setup="Why do bees stay in the hive in the winter?"
        punchline="Swarm."
      />

      <Joke
      number="5"
        setup="What's the best thing about Switzerland?"
        punchline="I don't know, but the flag is a big plus!"
      />
    </div>
  );
}

export default App;
