import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Home = () => {
    const handleClick = () => {
        console.log('Button clicked!');
    };
    return (
        <>
            <header className="App-header">
                <h1>Daily UI</h1>
                <p>100 Days of UI Design Challenge</p>
                <Link to="/day1">
                    <CustomButton onClick={handleClick}>Start</CustomButton>
                </Link>
            </header>
        </>
    );
};

const CustomButton = styled.button`
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 10px;
`;

export default Home;
