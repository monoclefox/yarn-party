import PropTypes from 'prop-types';

function Nav({ data, card, clickHandler }) {
    return <div className="nav">
        {data.map((item) => (
            <div
                key={item.id}
                className={(card === item.id ? "selected" : "") + " nav-item"} 
                onClick={() => clickHandler(item.id)}
            >
                Step {item.id + 1}
            </div>
        ))}
    </div>
}

Nav.propTypes = {
    data: PropTypes.array.isRequired,
    card: PropTypes.number.isRequired,
    clickHandler: PropTypes.func.isRequired
}

export default Nav;