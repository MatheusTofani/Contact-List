import styled from "styled-components";

export const CardContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin: 8px 0;
  background-color: #f9f9f9;
  display: flex;
  height: 200px
`;


export const CardTitle = styled.p`
  font-size: 22px;
  display: flex; 
  align-items: center;
`;


export const TagColor = styled.span`
  color: #394193;
  font-size: 40px; 
  display: flex; 
  align-items: center; 
`;

export const InfoContainer = styled.div`
  display: flex;
  align-items: center; 
  gap: 10px; 
`;


export const ButtonsContainer = styled.div`
display: flex;
flex-direction: column;
width: 50%;
align-items: end;
justify-content: space-between;
`
  ;

export const ContentsContainer = styled.div`
display: flex;
flex-direction: column;
width: 50%;
justify-content: space-between;
`
  ;