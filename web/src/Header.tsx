import React from 'react';

// Works like OOP
interface HeaderProps {
    // We could set as a optional param by using ? (title? : string)
    title: string;
}

// FC is for Function Component (generic, a TypeScript type that receives a param)
// We can call a param with brackets, and define them in the tag attribute
const Header: React.FC<HeaderProps> = props => {
  return (
    <header>
        <h1>{props.title}</h1>
    </header>
  );
}

export default Header;
