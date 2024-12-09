import styled from "styled-components";

export const SearchInput = styled.input`
height: 40px;
border-radius: 50px;
width: 250px;
padding-left: 20px;
border: none;
background-color: #EBF7FF;
transition: all 0.3s ease;
 
&:hover{
    background-color: #D6EFFF;
}

&:focus {
    outline: none;
    background-color: #D6EFFF;
}
`