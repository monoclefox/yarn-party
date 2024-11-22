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
    return <div className="nav">
        {data.map((item) => (
            <div
                key={item.id}
                className={(card === item.id ? "selected" : "") + " nav-item"} 
                onClick={() => clickHandler(item.id)}
            >
                Row {item.id + 1}
            </div>
        ))}
    </div>
}

export default Nav;