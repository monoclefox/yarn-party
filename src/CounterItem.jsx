import PropTypes from 'prop-types';

function CounterItem({id, toggle, toggleCallback}) {
    return <div 
        className={`counter-item ${toggle ? "selected" : ""}`} 
        onClick={() => toggleCallback(id, !toggle)}>{id + 1}</div>
}

CounterItem.propTypes = {
    id: PropTypes.number.isRequired,
    toggle: PropTypes.bool,
    toggleCallback: PropTypes.func.isRequired
}

export default CounterItem;