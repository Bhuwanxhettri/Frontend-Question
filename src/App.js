import "./App.css";
import SearchTodos from "./TodoList";
import SearchUsers from "./UsersList";

function App() {
  return (
    <div className="App">
      <h2>Higher Order Component</h2>
      <div className="section">
        {/* Higher Order Component 😄 */}
        <div>
          <SearchUsers />
        </div>
        <div>
          <SearchTodos />
        </div>

        {/* Next prev Challing Question 😄 */}
      </div>
    </div>
  );
}

export default App;
