import styled from "styled-components";

const Root = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`

const Label = styled.label`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3px 5px;
    column-gap: 5px;
    cursor: pointer;
`
const Span = styled.span`
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: green;
    color: white;
    font-weight: 600;
`

const Input = styled.input`
    width: 25px;
    height: 25px;

`

const Ptag = styled.p`
    width: 61%;
    font-size: 18px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 500;
    color: #282828;
`

const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24%;
    column-gap: 5px;
`

const button = `
    outline: none;
    border: none;
    color: whitesmoke;
    font-size: 18px;
    font-weight: 400;
    font-family: sans-serif;
    width: 50%;
    padding: 3px;
    border-radius: 3px;
    height: 30px;
    cursor: pointer;
    box-shadow: 1px 2px 2px grey;
`

const ButtonEdit = styled.button`
    ${button}
    background-color: green;
`

const ButtonDel = styled.button`
    ${button}
    background-color: red;
`


export const Styled = { Root, Label, Span, Input, Ptag, Div, ButtonDel, ButtonEdit }