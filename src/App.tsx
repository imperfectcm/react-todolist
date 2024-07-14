import './App.css';
import { TodoList } from './components/TodoList';

function App() {
  return (
    <div className="App">
      <TodoList items={["Buy Banana", "Buy Apple", "buy Milk"]}/>
    </div>
  );
}

export default App;
