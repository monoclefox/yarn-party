import PropTypes from 'prop-types';
import CounterItem from './CounterItem';

function Counter({data}) {
    return <div className="counter">
        <div className="counter-title">Row Count</div>
        <div className="counter-items">
        {data.map((item) => (
            <CounterItem id={item.id} key={item.id} />
        ))}
        </div>
    </div>
}

Counter.propTypes = {
    data: PropTypes.array.isRequired
}

export default Counter;