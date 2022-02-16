import styled from "styled-components";

const Div = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

const Span = styled.span`
    font-size: 18px;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-weight: 600;
    color: #282828;
`

const Button = styled.button`
    outline: none;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 18px;
    font-weight: 700;
    background-color: silver;
    color: #282828;
    cursor: pointer;
    box-shadow: 1px 2px 2px grey;
`

export const Styled = { Div, Span, Button }