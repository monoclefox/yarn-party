import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import CounterItem from './CounterItem';
import resetIcon from '../assets/reset-arrow.svg';

interface CounterProps {
  data: any[];
  advanceCallback: (id: number) => void;
  doReset: boolean;
  next: number;
}

// Styled components
const CounterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 16px;
  left: 0;
  right: 0;
  padding: 16px;
  background-color: var(--card-background-color);
  box-shadow: 0 -2px 4px var(--shadow-color);
`;

const CounterItems = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

const ResetButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  margin-right: 8px;
  border-radius: 24px;
  background: #313131;
  opacity: 0px;
  rotate: -90deg;
`;

function Counter({ data, advanceCallback, doReset, next }: CounterProps) {
  const [activeIndexes, setActiveIndexes] = useState<(number | string)[]>([]);

  console.log('next', next)

  useEffect(() => {
    const savedState = localStorage.getItem('indexState');
    console.log('savedState', savedState)
    if (savedState !== null) { 
      const parsedState = JSON.parse(savedState);
      setActiveIndexes(parsedState);
    }
  }, [])

  useEffect(() => {
    const newIndexes: number[] = [];
    data.forEach((item) => {
      if (item.id < next && !activeIndexes.includes(item.id)) {
        newIndexes.push(item.id);
      }
    })
    setActiveIndexes([...activeIndexes, ...newIndexes] as number[]);
  }, [next])
  
  useEffect(() => {
    if (doReset) {
      reset();
    }
  }, [doReset])

  const setLocalStorageIndexes = (indexes: number[]) => {
    localStorage.setItem('indexState', JSON.stringify(indexes));
  }


  const reset = () => {
    setActiveIndexes([]);
    setLocalStorageIndexes([]);
    advanceCallback(0);
  }
  
  const indexCallback = (id: number, toggle: boolean): void => {
    if (activeIndexes.includes(id) && (id !== activeIndexes.length - 1) || id !== next) {
      return;
    }
    const indexes = toggle ? [...activeIndexes, id] : activeIndexes.filter((index) => index !== id);
    if (toggle) {
      advanceCallback(id + 1);
    }
    setActiveIndexes(indexes as number[]);
    setLocalStorageIndexes(indexes as number[]);
  }

  return <CounterContainer>
    <CounterItems>
      <ResetButton onClick={() => reset()}>
        <img src={resetIcon} alt="reset" />
      </ResetButton>
      {data.map((item) => (
        <CounterItem
          id={item.id}
          key={item.id}
          toggle={activeIndexes.includes(item.id)}
          toggleCallback={indexCallback}
          next={next}
        />
      ))}
    </CounterItems>
  </CounterContainer>
}

// Remove PropTypes validation
export default Counter;