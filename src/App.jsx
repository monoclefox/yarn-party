import { useState } from 'react'
import YarnCard from './yarnCard'
import Nav from './Nav'
import Counter from './Counter'
import data from "./yarn-party-data.json";
import './App.css'

function App() {
  const [card, setCard] = useState(0)
  const handleCardClick = (index) => {
    const next = index > data.items.length - 1 ? 0 : index;
    setCard(next);
  }
  return (
    <>
      <div className="container">
        <div className="header">
        <h1 className="title">{data.title}</h1>
        <Nav data={data.items} card={card} clickHandler={handleCardClick} />
        </div>
        {data.items.map((item) => (
          <YarnCard
            className={card === item.id ? "selected" : ""}
            key={item.id}
            item={item}
            clickHandler={handleCardClick}
          />
        ))}
      <div className='counter-container'>
        <Counter data={data.items} />
      </div>
      </div>
    </>
  )
}

export default App
