import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setCard, setRowDone, setCurrentIndex, setPatternIndex } from '../slices/pattern';
import { reset } from '../slices/counterSlice';
import { RootState } from '../store';
import styled from '@emotion/styled'
import data from '../yarn-party-data.json'
import YarnCard from '../YarnCard'
import Nav from '../components/PatternNav'
import Counter from '../components/Counter'

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
  cursor: pointer;
  position: relative;

  &:hover {
    color: var(--highlight-color);
  }
`;

const PatternMenu = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 8px;
  margin-top: 16px;
  flex-wrap: wrap;
  position: absolute;
  top: 34%;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: #171717;
  border-radius: 20px;
  padding: 16px;
  margin-top: 8px;
  max-width: fit-content;
  margin-left: auto;
  margin-right: auto;
  
  .pattern-option {
    border-radius: 4px;
    padding: 4px 12px;
    cursor: pointer;
    font-size: 24px;
    
    &:hover {
      background: var(--highlight-color);
      color: var(--background-color);
      border-color: var(--highlight-color);
    }
  }

  &.hidden {
    display: none;
  }
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

// Update the YarnData interface to match your JSON structure
interface YarnData {
  patterns: {
    title: string;
    items: YarnItem[];
  }[];
}

const typedData = data as YarnData;

function Pattern() {
  const dispatch = useDispatch();
  const card = useSelector((state: RootState) => state.pattern.card);
  const rowDone = useSelector((state: RootState) => state.pattern.rowDone);
  const currentIndex = useSelector((state: RootState) => state.pattern.currentIndex);
  const patternIndex = useSelector((state: RootState) => state.pattern.patternIndex);

  // Add state for menu
  const [menuOpen, setMenuOpen] = useState(false);

  // Load the saved state from localStorage
  useEffect(() => {
    const savedState = localStorage.getItem('cardState');
    const savedPattern = localStorage.getItem('patternIndex');
    
    if (savedPattern !== null) {
      dispatch(setPatternIndex(parseInt(savedPattern)));
    }
    if (savedState !== null) {
      const parsedState = JSON.parse(savedState);
      dispatch(setCard(parsedState));
      dispatch(setCurrentIndex(parsedState));
    }
  }, [dispatch]);

  useEffect(() => {
    if (rowDone) {
      const timer = setTimeout(() => {
        dispatch(setRowDone(false));
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [rowDone, dispatch]);

  const handleCardClick = (index: number): void => {
    const next = index > typedData.patterns[patternIndex].items.length - 1 ? 0 : index;
    if (index === typedData.patterns[patternIndex].items.length && next === 0) {
      dispatch(setRowDone(true));
    }
    dispatch(setCard(next));
    dispatch(setCurrentIndex(next));
    localStorage.setItem('cardState', JSON.stringify(next));
  }

  const handleNavClick = (index: number): void => {
    dispatch(setCard(index));
    localStorage.setItem('cardState', JSON.stringify(index));
  }

  const handlePatternSelect = (index: number) => {
    dispatch(setPatternIndex(index));
    dispatch(setCard(0));
    dispatch(setCurrentIndex(0));
    dispatch(reset());
    localStorage.setItem('patternIndex', index.toString());
    setMenuOpen(false);
  };

  return (
    <>
      <Header>
        <Title onClick={() => setMenuOpen(!menuOpen)}>
          <span dangerouslySetInnerHTML={{ __html: typedData.patterns[patternIndex].title }} />
        </Title>
        <PatternMenu className={menuOpen ? '' : 'hidden'}>
          {typedData.patterns.map((pattern, index) => (
            <div
              key={index}
              className="pattern-option"
              onClick={() => handlePatternSelect(index)}
              dangerouslySetInnerHTML={{ __html: pattern.title }}
            />
          ))}
        </PatternMenu>
        <Nav data={typedData.patterns[patternIndex].items} card={card} clickHandler={handleNavClick} />
      </Header>
      {typedData.patterns[patternIndex].items.map((item) => (
        <YarnCard
          className={(card === item.id ? "selected" : "") + ` z-index-${item.id}`}
          key={item.id}
          item={item}
          clickHandler={handleCardClick}
        />
      ))}
      <div className='counter-container'>
        <Counter
          data={typedData.patterns[patternIndex].items}
          advanceCallback={handleCardClick}
          doReset={rowDone}
          next={currentIndex > typedData.patterns[patternIndex].items.length - 1 ? 0 : currentIndex}
        />
      </div>
      <RowDone rowDone={rowDone}>🎉 Row Done! 🎉</RowDone>
    </>
  )
}

export default Pattern
