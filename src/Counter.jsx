import PropTypes from 'prop-types';
import CounterItem from './CounterItem';
import {useState} from 'react';

function Counter({data}) {
    const [activeIndexes, setActiveIndexes] = useState([]);

    const reset = () => {
        setActiveIndexes([]);
    }

    const indexCallback = (id, toggle) => {
        if (toggle) {
            setActiveIndexes([...activeIndexes, id]);
        } else {
            setActiveIndexes(activeIndexes.filter((index) => index !== id));
        }
    }
    return <div className="counter">
        <div className="counter-header">
        <div className="counter-title">Row Count</div>
        <button className="reset-button" onClick={() => reset()}>Reset</button>
        </div>
        <div className="counter-items">
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

Counter.propTypes = {
    data: PropTypes.array.isRequired
}

export default Counter;