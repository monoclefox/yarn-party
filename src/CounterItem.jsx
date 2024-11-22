import PropTypes from 'prop-types';
import { useState } from 'react';

function CounterItem({id}) {
    const [toggle, setToggle] = useState(false);
    return <div 
        className={`counter-item ${toggle ? "selected" : ""}`} 
        onClick={() => setToggle(!toggle)}>{id}</div>
}

CounterItem.propTypes = {
    id: PropTypes.number.isRequired
}

export default CounterItem;