import styled from 'styled-components'

export const AddButton = styled.button `
    background: #e9408a;
    color: #ffffff;
    height: 32px;
    font-weight: 800;
    padding:5px;
    border-radius: 5px;
    border: none;
    margin-left: 50px;
    cursor:pointer;

    &:hover{
        background:#950443;
        transition: 0.5s;
    }
`
export const Container = styled.div`
    background:#eeaeca;
    padding: 20px;
    border-radius: 10px;

    h1{
        color: #ffffff;

    }

    input{
        border-radius: 5px;
        border:none;
        margin-top:30px;
        outline: none;
        height: 30px;
        padding: 10px;
        font-size: 20px;

    }

`

export const Product = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 30px;
    margin: 10px;
    padding: 10px;
    background: #ffffff;
    border-radius: 5px;
    font-size: 20px;

    p{
        text-transform: capitalize;
        font-weight: bold;
    }


`

export const Trashbutton = styled.button`
    background: transparent;
    border: none;
    font-size: 20px;
    cursor: pointer;

`

