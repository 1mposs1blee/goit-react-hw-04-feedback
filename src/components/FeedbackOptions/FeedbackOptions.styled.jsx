import styled from '@emotion/styled';

export const OptionsList = styled.ul`
  margin-bottom: 10px;

  display: flex;
  align-items: center;
  gap: 20px;
`;

export const OptionItem = styled.li``;

export const OptionButton = styled.button`
  cursor: pointer;
  border-radius: 5px;
  
  background-color: white;

  &:hover,
  &:focus {
    background-color: silver;
  }
`;
