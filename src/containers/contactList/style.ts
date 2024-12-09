import styled from "styled-components";

export const EmptyMessage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 100px);; 
    width: 100%;
    font-size: 40px;
    font-weight: bold;
    color: #EBF7FF; 
`;

export const ContactContainer = styled.div`
    display: grid;
   grid-template-columns: repeat(2, 44%);
   gap: 12%;
`;