interface Item {
    id: number;
    text: string;
}

interface YarnCardProps {
    item: Item;
    clickHandler: (id: number) => void;
    className?: string;
}

function YarnCard({ item, clickHandler, className }: YarnCardProps) {
    return <div 
        className={`card ${className}`} 
        onClick={() => clickHandler(item.id + 1)}
    >
        {item.text}
    </div>
}

export default YarnCard;