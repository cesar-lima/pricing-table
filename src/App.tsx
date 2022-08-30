import Card from "./components/Card"
import Header from "./components/Header"
import './styles/global.scss'

export function App() {
  return (
    <div>
      <Header />
      <div className="plans">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default App
