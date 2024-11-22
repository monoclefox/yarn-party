import PropTypes from 'prop-types';

function YarnCard({ item, clickHandler, className }) {
    return <div 
        className={`card ${className}`} 
        onClick={() => clickHandler(item.id + 1)}
    >
            {item.text}
        </div>
}

YarnCard.propTypes = {
    item: PropTypes.object.isRequired,
    clickHandler: PropTypes.func.isRequired,
    className: PropTypes.string
}

export default YarnCard;