import styled from "@emotion/styled";

interface Item {
    id: number;
    text: string;
}

interface YarnCardProps {
    item: Item;
    clickHandler: (id: number) => void;
    className?: string;
}

const Card = styled.div<{ className?: string }>`
  font-size: 36px;
  font-weight: 700;
  padding: 24px;
  display: none;
  transition: all 0.2s;
  transition-behavior: allow-discrete;
  opacity: 0;
  position: fixed;
  top: 38%;
  left: 25%;
  width: 50vw;
  user-select: none;
  -webkit-user-select: none;
  &.selected {
    display: block;
    opacity: 1;
  }
`;

function YarnCard({ item, clickHandler, className }: YarnCardProps) {
    return <Card className={className} onClick={() => clickHandler(item.id + 1)}>
        <div dangerouslySetInnerHTML={{ __html: item.text }} />
    </Card>
}

export default YarnCard;