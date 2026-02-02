import "./index.css";
import { Profile } from "./components/profile";
import { Projects } from "./components/projects";

export function App() {
  return (
    <div className="app">
      <Profile />
      <Projects />
    </div>
  );
}

export default App;
