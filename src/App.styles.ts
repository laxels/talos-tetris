import styled from 'styled-components';

export const App = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Configuration = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SolveButton = styled.button`
  margin: 40px 0;
  padding: 8px 16px;
  font-size: 24px;
  cursor: pointer;
`;

export const GridAndBlocks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InputRows = styled.div`
  flex-direction: column;
`;

export const InputRow = styled.div`
  display: flex;
  &:not(:first-child) {
    margin-top: 12px;
  }
`;

export const Label = styled.label`
  margin-right: 8px;
  width: 100px;
`;

export const Input = styled.input``;
