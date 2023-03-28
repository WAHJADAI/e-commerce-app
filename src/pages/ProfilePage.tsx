import React from "react";
import styled from "styled-components";

const ProfileContent = styled.div`
  display: flex;

  justify-content: center;
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
function ProfilePage() {
  return (
    <ProfileContent>
      <div>Profile Page</div>
      <form style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
        <PhotoProfile>Photo</PhotoProfile>
        <span>E-mail</span>
        <input type='email' name='' placeholder='Email' />
        <span>Password</span>
        <input type='password' name='' placeholder='password' />
        <span>Conform Password</span>
        <input type='password' name='' placeholder='Conform password' />
        <button type='submit'>Submit</button>
      </form>
    </ProfileContent>
  );
}

export default ProfilePage;
