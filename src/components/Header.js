import React from "react";
import styled from "styled-components";
import profile from "../assets/profile.png"

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderBox>
        <Title>TrackIt</Title>
        <UserPicture src={profile}/>
      </HeaderBox>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  width: 100%;
  height: 70px;
  background-color: #126ba5;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
`;

const HeaderBox = styled.div`
  width: 340px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;

`;

const Title = styled.div`
  font-size: 39px;
  font-family: "Playball", cursive;
  color: #ffffff;
`;

const UserPicture = styled.img `
    height: 51px;
    width: 51px;
    border-radius: 100px;
`
