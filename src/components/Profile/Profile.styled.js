import styled from "@emotion/styled";

export const Container = styled.div`
  border-radius: 4px;
  background-color: #f7f5f7;
  box-shadow: 3px 3px 12px 0px rgba(138, 128, 138, 1);
  width: 350px;
  height: 450px;
  margin-right: auto;
  margin-left: auto;
`;

export const ProfileDescription = styled.div`
  padding: 40px 40px 26px 40px;
`;

export const ProfilePhoto = styled.img`
  border-radius: 50px;
  width: 100px;
  height: 100px;
  margin-bottom: 20px;
`;

export const UserName = styled.p`
  text-align: center;
  font-size: 24px;
  font-weight: 500;
  color: #424242;
  margin-bottom: 15px;
`;
export const UserInfo = styled.p`
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  color: #878687;
`;
export const StatsList = styled.ul`
  display: flex;
  flex-wrap: no-wrap;
  border-top: 1px solid #e0d8e3;
  background-color: #f1e9f5;
  padding: 0;
  margin: 0;
`;
export const StatsElemnt = styled.li`
  display: flex;
  flex-direction: column;
  border-right: 1px solid #e0d8e3;
  flex-basis: calc(100% / 3);
  padding: 10px;
  margin: 0;
`;
export const StatName = styled.p`
  color: #878687;
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  margin: 0;
  padding: 6px;
`;
export const StatInfo = styled.p`
  color: #424242;
  text-align: center;
  font-size: 24px;
  font-weight: 500;
  margin: 0;
  padding: 6px;
`;
