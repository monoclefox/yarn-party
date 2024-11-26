import styled from "@emotion/styled";

interface CounterItemProps {
  id: number;
  toggle?: boolean;
  toggleCallback: (id: number, toggle: boolean) => void;
  next?: number;
}

const CounterItemContainer = styled.div<{ toggle?: boolean; isNext: boolean; }>`
  background-color: ${({ isNext, toggle }) => 
    toggle ? 'var(--highlight-color)' : 
    isNext ? '#00000033' : 
    'var(--button-background-color)'};
  color: ${({ toggle }) => toggle ? 'var(--highlight-color-2)' : 'var(--text-color)'};
  width: ${({ isNext }) => isNext ? '147px' : '48px'};
  height: 48px;
  border-radius: 24px;
  border: ${({ isNext }) => 
    isNext ? '2px solid var(--highlight-color-2)' : 
    '2px solid transparent'};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  font-weight: bold;
  transition: all 0.3s ease;
  cursor: pointer;
  &.selected {
    background-color: var(--highlight-color);
    color: var(--highlight-color-2);
  }

  &.next {
    background-color: #00000033;
    border: 2px solid var(--highlight-color-2);
    width: 147px;
  }
`;

function CounterItem({ id, toggle, toggleCallback, next }: CounterItemProps) {

  return (
    <CounterItemContainer
      toggle={toggle}
      isNext={next === id}
      onClick={() => toggleCallback(id, !toggle)}
    >
      {id + 1}
    </CounterItemContainer>
  );
}

export default CounterItem;