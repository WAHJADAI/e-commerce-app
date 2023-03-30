import React from "react";
import styled from "styled-components";

const ProfileContent = styled.div`
  display: flex;

  justify-content: start;
  justify-items: center;
`;
const PhotoProfile = styled.div`
  display: flex;
  justify-content: center;
  width: 200px;
  height: 200px;
  clip-path: circle(100px);

  background-color: blue;
`;

const CardForm = styled.form`
  display: flex;
  justify-content: center;
`;
const CardName = styled.div`
  background-color: #8599b6;
`;
const CardAction = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #b8bfc6;
`;
function ProfilePage() {
  return (
    <ProfileContent>
      <div
        style={{
          backgroundColor: "#7E81FF",
          borderRadius: "10px",
          padding: "10px",
          margin: "10px",
          position: "sticky",
          height: "300px",
        }}
      >
        <div>Account Management</div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "500px",
          flexDirection: "column",
        }}
      >
        <CardForm>
          <CardName>Personal Information</CardName>
          <CardAction>
            <PhotoProfile>Photo</PhotoProfile>
            <input type='file' name='photo' id='' />
            <span>E-mail</span>
            <input type='email' name='' placeholder='Email' />
            <span>Name</span>
            <input type='text' name='' placeholder='Name' />
            <span>Surname</span>
            <input type='text' name='' placeholder='Surname' />

            <button type='submit'>Save </button>
          </CardAction>
        </CardForm>
        <CardForm>
          <CardName>Change Password</CardName>
          <CardAction>
            <span>Password</span>
            <input type='password' name='' placeholder='password' />
            <span>Conform Password</span>
            <input type='password' name='' placeholder='Conform password' />
            <button type='submit'>Save </button>
          </CardAction>
        </CardForm>
      </div>
    </ProfileContent>
  );
}

export default ProfilePage;
