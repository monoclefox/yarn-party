import { useState, useEffect } from 'react';
import CounterItem from './CounterItem';

interface CounterProps {
  data: any[];
  advanceCallback: (id: number) => void;
  doReset: boolean;
}

function Counter({ data, advanceCallback, doReset }: CounterProps) {
  const [activeIndexes, setActiveIndexes] = useState<(number | string)[]>([]);

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
  }
  useEffect(() => {
    console.log('doReset', doReset)
    if (doReset) {
      console.log('wft', doReset)
      reset();
    }
  }, [doReset])


  const indexCallback = (id: number, toggle: boolean): void => {
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
    <button className="reset-button" onClick={() => reset()}>Reset</button>
      {data.map((item) => (
        <CounterItem
          id={item.id}
          key={item.id}
          toggle={activeIndexes.includes(item.id)}
          toggleCallback={indexCallback}/>
      ))}
    </div>
  </div>
}

// Remove PropTypes validation
export default Counter;