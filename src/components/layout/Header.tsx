import React from 'react';

type HeaderProps = {
  onClick: () => void
};

/**
 * React component for the Header Section.
 */
export const Header = (props: HeaderProps) => {
  return (
    <header className="header">
      <h1>
      <a href="./" title="sudoku">Su<span className="header__group-one">do</span><span className="header__group-two">ku</span></a>
      </h1>
      <h2 onClick={props.onClick}>
        New Game
      </h2>
    </header>
  )
}
