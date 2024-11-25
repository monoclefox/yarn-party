import { useState } from "react";
import check from "./assets/checkmark.svg";
import chevron from "./assets/chevron-up.svg";
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

function Nav({ data, card, clickHandler }: NavProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="nav">
        <div className="nav-dropdown">
            <div 
                className="nav-dropdown-header"
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="nav-dropdown-header-text">
                    Row {card + 1}
                    <span className={isOpen ? "nav-dropdown-header-arrow open" : "nav-dropdown-header-arrow"}>
                        <img src={chevron} alt="chevron" />
                    </span>
                </div>
            </div>
            
            {isOpen && (
                <div className="nav-dropdown-menu">
                    {data.map((item) => (
                        <div
                            key={item.id}
                            className={(card === item.id ? "selected" : "") + " nav-dropdown-item"}
                            onClick={() => {
                                clickHandler(item.id);
                                setIsOpen(false);
                            }}
                        >
                            Row {item.id + 1}
                            {card === item.id && <img src={check} alt="check" />}
                        </div>
                    ))}
                </div>
            )}
        </div>
        </div>
    );
}

export default Nav; 