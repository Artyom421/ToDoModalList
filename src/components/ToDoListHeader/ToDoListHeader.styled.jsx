import styled from "styled-components";

const Root = styled.div`
    background-color: white;
    display:flex;
    justify-content: center; 
    width: 100%;
    padding: 10px 0;
    border-radius: 10px;
    box-shadow: 2px 4px 4px silver;

`

const Form = styled.form `
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Input = styled.input`
    outline: none;
    border: none;
    padding: 10px;
    font-size: 18px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 600;
    color: #282828;
    width: 70%;
`

const Button = styled.button`
    border: none;
    background-color: #282828;
    border-radius: 5px;
    color: bisque;
    font-size: 18px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-weight: 600;
    width: 20%;
    height: 100%;
    cursor: pointer;
    box-shadow: 1px 2px 2px grey;
    transition: 1s;
`

export const Styled = { Root, Form, Input, Button }