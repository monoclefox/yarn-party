import { useState, useEffect } from 'react';
import CounterItem from './CounterItem';
import resetIcon from './assets/reset-arrow.svg';
interface CounterProps {
  data: any[];
  advanceCallback: (id: number) => void;
  doReset: boolean;
  next: number;
}

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

  return <div className="counter">
    {/* <div className="counter-header">
      <div className="counter-title">Row Count</div>
    </div> */}
    <div className="counter-items">
    <div className="reset-button" onClick={() => reset()}><img src={resetIcon} alt="reset" /></div>
      {data.map((item) => (
        <CounterItem
          id={item.id}
          key={item.id}
          toggle={activeIndexes.includes(item.id)}
          toggleCallback={indexCallback}
          next={next}
        />
      ))}
    </div>
  </div>
}

// Remove PropTypes validation
export default Counter;