import React from "react";

import { LeftArrowAlt as Back } from "styled-icons/boxicons-regular";

import * as S from "./styled";
import Avatar from '@mui/material/Avatar';
import user from "../../assets/user.png";


export default function HeaderMenu({ userData, renderBackButton }) {
  console.log(userData)
  return (
    <S.ProfileWrapper>
      <S.ProfileContainer>
        <S.ProfileLink to="/profile">
          <S.ProfileImgContainer>
            {userData.photoURL ? <S.ProfileImg
              alt={`${userData.name} profile image`}
              title={`${userData.name} - ${userData.email}`}
              src={userData.photoURL}
            /> : <Avatar src={user} />}
          </S.ProfileImgContainer>
          <S.DisplayName>{userData.name}</S.DisplayName>
        </S.ProfileLink>
        {renderBackButton && (
          <S.ButtonBackWrapper to="/dashboard">
            <S.BackIconBox>
              <Back />
            </S.BackIconBox>
            <S.BackLabel>Back</S.BackLabel>
          </S.ButtonBackWrapper>
        )}
      </S.ProfileContainer>
    </S.ProfileWrapper>
  );
}
