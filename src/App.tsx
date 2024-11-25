import { useState, useEffect } from 'react'
import data from './yarn-party-data.json'
import YarnCard from './YarnCard'
import Nav from './Nav'
import Counter from './Counter'
import './App.css'

// Add interface for yarn item
interface YarnItem {
  id: number;
  text: string;
}

// Add interface for data structure
interface YarnData {
  title: string;
  items: YarnItem[];
}

const typedData = data as YarnData;

function App() {
  const [card, setCard] = useState<number>(0)
  const [rowDone, setRowDone] = useState<boolean>(false);
  const [doReset, setDoReset] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  // Load saved state from localStorage on component mount
  useEffect(() => {
    const savedState = localStorage.getItem('cardState');
    if (savedState !== null) { 
      const parsedState = JSON.parse(savedState);
      setCard(parsedState);
      setCurrentIndex(parsedState);
    }
  }, []); 
  
  const handleCardClick = (index: number): void => {
    const next = index > typedData.items.length - 1 ? 0 : index;
    if (index === typedData.items.length && next === 0) {
      setRowDone(true);
      setDoReset(true);
      setTimeout(() => {
        setRowDone(false);
      }, 3000);
    } else {
      setRowDone(false);
      setDoReset(false);
    }
    setCard(next);
    setCurrentIndex(next);
    localStorage.setItem('cardState', JSON.stringify(next));
  }

  const handleNavClick = (index: number): void => {
    setCard(index);
    localStorage.setItem('cardState', JSON.stringify(index));
  }

  return (
    <>
      <div className="container">
        <div className="header">
        <div className="title" dangerouslySetInnerHTML={ { __html: typedData.title } } />
        <Nav data={typedData.items} card={card} clickHandler={handleNavClick} />
        </div>
        {typedData.items.map((item) => (
          <YarnCard
            className={(card === item.id ? "selected" : "") + ` z-index-${item.id}`}
            key={item.id}
            item={item}
            clickHandler={handleCardClick}
          />
        ))}
      <div className='counter-container'>
        <Counter
          data={typedData.items}
          advanceCallback={handleCardClick}
          doReset={doReset}
          next={currentIndex > typedData.items.length - 1 ? 0 : currentIndex}
        />
      </div>
      <div className={`row-done ${rowDone ? 'show' : ''}`}>🎉 Row Done! 🎉</div>
      </div>
    </>
  )
}

export default App
