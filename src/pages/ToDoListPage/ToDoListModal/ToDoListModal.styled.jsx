import styled from "styled-components";

const Root = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 20px;
    width: 350px;
`

const Div = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
`

const Hedear = styled.div`
    color: rgb(173, 0, 0);
    font-family: sans-serif;
    font-size: 20px;
    font-weight: 600;
`

const Span = styled.span`
    font-family: sans-serif;
    font-size: 20px;
    color: #282828;
    font-weight: 600;
    letter-spacing: 2px;

`

const Button = styled.button`
    border: none;
    background-color: silver;
    font-size: 15px;
    font-weight: 600;
    color: #282828;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: 1px 2px 2px silver;
`

const Button2 = styled.button`
    border: none;
    background-color: green;
    font-size: 15px;
    font-weight: 600;
    color: whitesmoke;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 1px 2px 2px ;
    cursor: pointer;
`

const TextArea = styled.textarea`
    width: 80%;
    border: none;
    outline: none;
    background-color: antiquewhite;
    padding: 10px;
    border-radius: 5px;
    color: #282828;
    font-family: sans-serif;
    list-style-type: none;
`

export const Styled = { Root, Div, Span, Hedear, Button, Button2, TextArea }