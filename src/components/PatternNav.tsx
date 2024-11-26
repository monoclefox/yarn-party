import { useState } from "react";
import styled from "@emotion/styled";
import check from "../assets/checkmark.svg";
import chevron from "../assets/chevron-up.svg";

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

// Styled components
const NavContainer = styled.div`
  transition: all 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 8px;
  z-index: 99;
`;

const Dropdown = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownHeader = styled.div`
  background: #F2F29033;
  width: 132px;
  height: 56px;
  border-radius: 80px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  user-select: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: #414141; 
  }
`;

const DropdownHeaderText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DropdownHeaderArrow = styled.span<{ isOpen: boolean }>`
  transition: all 0.3s ease;
  transform-origin: 72% 40%;
  transform: rotate(180deg);
  margin-top: 6px;
  &.open {
    transform: rotate(0deg);
  }
`;

const DropdownMenu = styled.div`
position: absolute;
  top: 100%;
  left: -90%;
  max-height: 500px;
  width: 340px;
  overflow-y: auto;
  background-color: #171717; /* Dark dropdown background */
  border-radius: 8px;
  margin-top: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  text-align: left;
  padding: 16px;
  box-shadow: 0px 0px 34px 0px #0000001F;
`;

const DropdownItem = styled.div<{ isSelected: boolean }>`
  padding: 10px 20px;
  border-radius: 12px;
  font-size: 20px;
  font-weight: 700;
  color: #d3d3d3; 
  cursor: pointer;
  transition: background-color 0.2s ease, color 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:hover {
    background-color: var(--highlight-color-2);
    color: #000;
  }
  &.selected {
    background: #F2F2901A;
    color: var(--highlight-color-2);
    font-weight: bold;
  }
`;

function Nav({ data, card, clickHandler }: NavProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <NavContainer>
            <Dropdown>
                <DropdownHeader onClick={() => setIsOpen(!isOpen)}>
                    <DropdownHeaderText>
                        Row {card + 1}
                        <DropdownHeaderArrow isOpen={isOpen}>
                            <img src={chevron} alt="chevron" />
                        </DropdownHeaderArrow>
                    </DropdownHeaderText>
                </DropdownHeader>
                
                {isOpen && (
                    <DropdownMenu>
                        {data.map((item) => (
                            <DropdownItem
                                key={item.id}
                                isSelected={card === item.id}
                                onClick={() => {
                                    clickHandler(item.id);
                                    setIsOpen(false);
                                }}
                            >
                                Row {item.id + 1}
                                {card === item.id && <img src={check} alt="check" />}
                            </DropdownItem>
                        ))}
                    </DropdownMenu>
                )}
            </Dropdown>
        </NavContainer>
    );
}

export default Nav; 