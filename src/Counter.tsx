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


  const reset = () => {
    setActiveIndexes([]);
    localStorage.setItem('indexState', JSON.stringify([]));
    advanceCallback(0);
  }
  
  useEffect(() => {
    if (doReset) {
      reset();
    }
  }, [doReset])


  const indexCallback = (id: number, toggle: boolean): void => {
    if (activeIndexes.includes(id) && (id !== activeIndexes.length - 1) || id !== next) {
      return;
    }
    const indexes = toggle ? [...activeIndexes, id] : activeIndexes.filter((index) => index !== id);
    if (toggle) {
      advanceCallback(id + 1);
    }
    setActiveIndexes(indexes);
    localStorage.setItem('indexState', JSON.stringify(indexes));
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