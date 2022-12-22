import styled from "@emotion/styled";

export const List = styled.ul``;
export const FriendListItem = styled.li`
  padding: 10px 10px;
  width: 300px;
  height: 100px;
  display: flex;
  border-radius: 4px;
  box-shadow: 3px 3px 12px 0px rgba(138, 128, 138, 1);
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Status = styled.span`
  margin-top: auto;
  margin-bottom: auto;
  margin-right: 10px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
`;
export const Avatar = styled.img`
  margin-right: 10px;
  width: 80px;
  height: 80px;
  border-radius: 4px;
  border: 1px solid gray;
`;
export const Name = styled.p`
  font-size: 24px;
  font-weight: 500;
`;
