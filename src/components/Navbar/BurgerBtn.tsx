import React from "react";
import styled from "styled-components";

interface StyledBurgerProps {
  open: boolean;
}

const StyledBurger = styled.button<StyledBurgerProps>`
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1000;

  &:focus {
    outline: none;
  }
`;

const StyledLine = styled.div<StyledBurgerProps>`
  width: 2rem;
  height: 0.25rem;
  border-radius: 10px;
  transition: all 0.3s linear;
  transform-origin: center center;
  background-color: #303030;

  &:first-child {
    transform: ${({ open }) => (open ? "rotate(45deg) translateY(15px)" : "rotate(0)")};
  }

  &:nth-child(2) {
    opacity: ${({ open }) => (open ? "0" : "1")};
    transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
  }

  &:nth-child(3) {
    transform: ${({ open }) => (open ? "rotate(-45deg) translateY(-15px)" : "rotate(0)")};
  }
`;

interface BurgerBtnProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const BurgerBtn: React.FC<BurgerBtnProps> = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <StyledLine open={open} />
      <StyledLine open={open} />
      <StyledLine open={open} />
    </StyledBurger>
  );
};

export default BurgerBtn;
