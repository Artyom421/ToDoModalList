import styled from "styled-components";

const Root = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-height: 200px;
    overflow: scroll;
    overflow-x: hidden;
`

const RootDiv = styled.div `
    width: 100%;
    display: flex;
    max-height: 200px;
`

const Label = styled.label`
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3px 5px;
    column-gap: 5px;
    cursor: pointer;
`
const Span = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25px;
    height: 25px;
    border-right: 1px solid #282828;
    border-left: 1px solid #282828;
    font-size: 22px;
    color: #282828;
    font-weight: 600;
`

const Input = styled.input`
    width: 25px;
    height: 25px;
    position: absolute;
    opacity: 0;
    visibility: hidden;
    
`

const Ptag = styled.p`
    width: 85%;
    font-size: 22px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 700;
    font-weight: 700;
    color: #282828;
    letter-spacing: 2px;
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
    transition: 0.5s;
`

const ButtonEdit = styled.button`
    ${button}
    background-color: green;
`

const ButtonDel = styled.button`
    ${button}
    background-color: red;
`


export const Styled = { Root, Label, Span, Input, Ptag, Div, ButtonDel, ButtonEdit, RootDiv }
