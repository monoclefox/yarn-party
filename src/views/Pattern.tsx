import { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import data from '../yarn-party-data.json'
import YarnCard from '../YarnCard'
import Nav from '../components/PatternNav'
import Counter from '../components/Counter'

// Styled components
const Container = styled.div`
  /* styles from .container */
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 16px;
`;

const Title = styled.div`
  text-align: center;
  font-size: 24px;
  font-weight: 400;
  margin: 0;
`;

const RowDone = styled.div<{ rowDone: boolean }>`
  position: absolute;
  top: 20%;
  left: calc(50% - 100px);
  font-size: 1.5rem;
  width: 200px;
  font-weight: 600;
  color: var(--highlight-color);
  opacity: ${({ rowDone }) => (rowDone ? 1 : 0)};
  transform: ${({ rowDone }) => (rowDone ? 'translate(0%, -50%)' : 'translate(0%, 0%)')};
  transition: opacity 0.3s ease, transform 0.3s ease;
`;

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

function Pattern() {
  const [card, setCard] = useState<number>(0)
  const [rowDone, setRowDone] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const savedState = localStorage.getItem('cardState');
    if (savedState !== null) {
      const parsedState = JSON.parse(savedState);
      setCard(parsedState);
      setCurrentIndex(parsedState);
    }
  }, []);

  useEffect(() => {
    if (rowDone) {
      const timer = setTimeout(() => {
        setRowDone(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [rowDone]);

  const handleCardClick = (index: number): void => {
    const next = index > typedData.items.length - 1 ? 0 : index;
    if (index === typedData.items.length && next === 0) {
      console.log('Setting rowDone to true');
      setRowDone(true);
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
    <Container>
      <Header>
        <Title dangerouslySetInnerHTML={ { __html: typedData.title } } />
        <Nav data={typedData.items} card={card} clickHandler={handleNavClick} />
      </Header>
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
          doReset={rowDone}
          next={currentIndex > typedData.items.length - 1 ? 0 : currentIndex}
        />
      </div>
      <RowDone rowDone={rowDone}>🎉 Row Done! 🎉</RowDone>
    </Container>
  )
}

export default Pattern
