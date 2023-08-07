import styled from '@emotion/styled';

export const OptionsList = styled.ul`
  margin-bottom: 10px;

  display: flex;
  align-items: center;
  gap: 20px;
`;

export const OptionItem = styled.li``;

export const OptionButton = styled.button`
  padding: 5px 10px;

  width: 100px;

  border: none;
  border-radius: 5px;

  cursor: pointer;

  background-color: silver;

  &:active {
    transform: translateY(2px);
  }
`;