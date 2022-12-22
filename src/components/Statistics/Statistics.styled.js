import styled from "@emotion/styled";

export const Section = styled.section`
  padding-top: 10px;
  background-color: #f2f5f5;
  position: relative;
  margin-right: auto;
  margin-left: auto;

  width: 500px;
  height: 200px;
`;
export const Title = styled.h2`
  color: #757878;
  font-size: 26px;
  text-transform: uppercase;
`;
export const StatList = styled.ul`
  padding: 0;
  margin: 0;
  position: absolute;
  bottom: 0;

  display: flex;
`;
export const StatItem = styled.li`
  padding-top: 10px;
  width: 100px;
  height: 100px;
`;
export const StatText = styled.span`
  display: block;
  font-size: 24px;
  font-weight: 500;
  color: #f2f5f5;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;
