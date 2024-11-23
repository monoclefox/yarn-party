import { useState } from "react";

// Define interface for the data items
interface NavItem {
    id: number;
    // Add other properties if they exist in your data items
}

// Define interface for component props
interface NavProps {
    data: NavItem[];
    card: number;
    clickHandler: (id: number) => void;
}

interface NavScrollerProps {
    direction: string;
    onClick?: () => void;
}

const NavScroller = ({ direction, onClick }: NavScrollerProps) => {
    return <div className={`nav-scroller ${direction}`} onClick={onClick}>
        {direction === 'left' ? '<' : '>'}
    </div>
}

function Nav({ data, card, clickHandler }: NavProps) {
    const [navPosition, setNavPosition] = useState('left');

    const handleNavScrollerClick = (direction: string) => {
        setNavPosition(direction);
    }

    return <>
        {/* <NavScroller direction="left" onClick={() => handleNavScrollerClick('left')} />
        <NavScroller direction="right" onClick={() => handleNavScrollerClick('right')}/> */}
        <div className={navPosition + " nav"}>
        {data.map((item) => (
            <div
                key={item.id}
                className={(card === item.id ? "selected" : "") + " nav-item"} 
                onClick={() => clickHandler(item.id)}
            >
                {item.id + 1}
            </div>
        ))}
        </div>
    </>
}

export default Nav;