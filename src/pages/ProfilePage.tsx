import React, { ChangeEvent, useState } from "react";
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

  background-color: #061d1c;
`;

const CardForm = styled.form`
  display: flex;
  justify-content: start;
  width: 450px;
  padding: 10px;
  margin: 20px;
  border-radius: 30px;
  background: white;
  box-shadow: 15px 15px 30px #7e81ff, -15px -15px 30px #ffffff;
`;
const CardName = styled.div`
  font-family: "Sofia Sans", sans-serif;
  display: flex;
  justify-content: start;
  width: 150px;
  margin: 10px;
  background-color: #cbcbcb;
`;
const CardAction = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Sofia Sans", sans-serif;
  margin: 10px;
`;
const Input = styled.input`
  padding: 8px 12px;
  border-radius: 4px;
  outline: none;
  border: 2px solid #0d9488;
  padding: 15px;
  font-family: "Sofia Sans", sans-serif;
  ::placeholder {
    color: transparent;
  }
  :placeholder-shown ~ Label {
    position: absolute;
    margin-top: 15px;
    margin-left: 10px;
    font-size: 16px;
    transition: 0.2s;
  }
  :focus {
    ~ Label {
      position: absolute;
      margin: 0;
      margin-left: 10px;
      font-size: 15px;
      transition: 0.2s;
      color: #656462;
    }
  }
`;
const SaveChangeButton = styled.button`
  border: none;
  background-color: bisque;
  padding: 20px;
  border-radius: 10px;
  margin: 2rem;
  font-family: "Sofia Sans", sans-serif;
  width: 150px;
  :hover {
    background-color: #98c5fc;
  }
`;
const NameInput = styled.label`
  font-family: "Sofia Sans", sans-serif;
  position: absolute;
  margin-left: 10px;
  font-size: 15px;
  transition: 0.2s;
  color: black;
`;
const WrapperInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin: 5px;
`;
function ProfilePage() {
  const [imgProfile, setImgProfile] = useState<File | null>(null);
  const handleSetImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImgProfile(e.target.files[0]);
    }
    console.log(imgProfile);
  };
  return (
    <ProfileContent>
      {/* <div
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
      </div> */}
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
            <label>
              <PhotoProfile>
                {imgProfile ? <img src={URL.createObjectURL(imgProfile)}></img> : null}
              </PhotoProfile>
              <input
                type='file'
                name='photo'
                id=''
                style={{ display: "none" }}
                onChange={handleSetImage}
              />
            </label>

            <WrapperInput>
              <Input type='email' name='' placeholder='EMAIL ADDRESS' />
              <NameInput>EMAIL ADDRESS</NameInput>
            </WrapperInput>

            <WrapperInput>
              <Input type='text' name='' placeholder='NAME' />
              <NameInput>NAME</NameInput>
            </WrapperInput>

            <WrapperInput>
              <Input type='text' name='' placeholder='SURNAME' />
              <NameInput>SURNAME</NameInput>
            </WrapperInput>

            <SaveChangeButton type='submit'>SAVE </SaveChangeButton>
          </CardAction>
        </CardForm>
        <CardForm>
          <CardName>Change Password</CardName>
          <CardAction>
            <SaveChangeButton type='submit'>CLICK CHANGES PASSWORD</SaveChangeButton>
          </CardAction>
        </CardForm>
      </div>
    </ProfileContent>
  );
}

export default ProfilePage;
