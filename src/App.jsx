import { useState } from 'react'
import YarnCard from './yarnCard'
import Nav from './Nav'
import data from "./yarn-party-data.json";
import './App.css'

function App() {
  const [card, setCard] = useState(0)
  const handleCardClick = (index) => {
    const next = index > data.length - 1 ? 0 : index;
    setCard(next);
  }
  return (
    <>
      <div className="container">
        <Nav data={data} card={card} clickHandler={handleCardClick} />
        {data.map((item) => (
          <YarnCard
            className={card === item.id ? "selected" : ""}
            key={item.id}
            item={item}
            clickHandler={handleCardClick}
          />
        ))}
      </div>
    </>
  )
}

export default App
