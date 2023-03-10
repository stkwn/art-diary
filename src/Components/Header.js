import React, { useEffect, useState } from "react";
import logo from "../logo.png";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

export default function Header() {
  const [user, setUser] = useState("");

  useEffect(() => {}, []);

  return (
    <NavContainer className="section-center">
      <div className="logo__box">
        <img src={logo} alt="logo" />
      </div>
      <form className="search__box" action="">
        <input
          type="text"
          placeholder="Search drawing type of watercolor, creatative..."
        />
        <button>
          <FaSearch />
        </button>
      </form>
      {!user ? (
        <button className="btn">login</button>
      ) : (
        <button className="btn">manager</button>
      )}
    </NavContainer>
  );
}

const NavContainer = styled.nav`
  display: flex;
  padding: 1rem;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;

  .logo__box {
    height: 4rem;
    margin: 1.5rem;
    img {
      height: 100%;
    }
  }

  .search__box {
    width: 100%;
    display: flex;
    order: 2;

    input {
      width: 100%;
      padding: 0.5rem 1rem;
      /* outline: none; */
      border: none;
      border-bottom: 2px solid var(--clr-primary-5);
      outline: none;

      ::placeholder {
        color: var(--clr-primary-7);
      }
    }
    button {
      background-color: transparent;
      border: none;
      border-bottom: 2px solid var(--clr-primary-5);
      color: var(--clr-primary-5);
      outline: none;
    }
  }

  @media screen and (min-width: 800px) {
    .search__box {
      width: 50%;
      display: flex;
      order: 0;
    }
  }
`;
