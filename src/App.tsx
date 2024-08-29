import './App.css';
import AppRoutes from './configs/routes/AppRoutes';
import { Slogan } from "./components/Slogan"

function App() {
  return (
    <div>
      <AppRoutes/>
      <Slogan text="O segredo de economizar é se organizar!" />
    </div>
  )
}

export default App;
