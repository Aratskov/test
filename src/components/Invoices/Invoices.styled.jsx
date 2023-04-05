import styled from "styled-components";

export const Container = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding:0;
  margin:0;
  height: 100vh;
  border-right: 1px solid black;
`;

export const Wrap = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr;
`;
