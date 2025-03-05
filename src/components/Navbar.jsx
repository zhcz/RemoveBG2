import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../context/ThemeContext";
import { FaGithub, FaEraser, FaSun, FaMoon } from "react-icons/fa";

// Styled Navbar
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.footerBackground};
  color: ${({ theme }) => theme.footerText};
  position: relative;
`;

// Logo Styling
const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
  @media (max-width: 375px) {
    font-size: 1rem;
  }
`;

// Desktop Icons
const IconGroup = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 1.2rem;

  a {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.3rem 0.8rem;
    border-radius: 8px;
    transition: all 0.3s ease-in-out;
    color: ${({ theme }) => theme.footerText};

    &:hover {
      background: ${({ theme }) => theme.footerText};
      color: ${({ theme }) => theme.footerBackground};
    }
  }
  /* Hide span on mobile screens */
  @media (max-width: 768px) {
    span {
      display: none;
    }
  }
`;

// Styled Switch Button
const SwitchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
`;

// Switch Wrapper
const Switch = styled.div`
  width: 35px;
  height: 17px;
  background: ${({ theme }) => theme.footerText};
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: ${({ isdark }) => (isdark ? "flex-end" : "flex-start")};
  padding: 3px;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease-in-out;
`;

const Toggle = styled.div`
  width: 16px;
  height: 16px;
  background: ${({ theme }) => theme.footerBackground};
  border-radius: 50%;
  transition: all 0.3s ease-in-out;
`;

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const isDark = theme.mode === "dark";

  return (
    <Nav>
      {/* Logo */}
      <Logo>
        <FaEraser />
        Remove BG
      </Logo>

      {/* Desktop Icons */}
      <div style={{ display: "flex", gap: "1rem" }}>
        <IconGroup>
          <a
            href="https://github.com/Eklak-Alam"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none" }}
          >
            <FaGithub />
            <span>Github</span>
          </a>
        </IconGroup>

        {/* Switch Button for Theme Toggle */}
        <SwitchContainer onClick={toggleTheme}>
          {isDark ? <FaMoon /> : <FaSun />}
          <Switch isdark={isDark}>
            <Toggle />
          </Switch>
        </SwitchContainer>
      </div>
    </Nav>
  );
};

export default Navbar;
