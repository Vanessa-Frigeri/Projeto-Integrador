import React from 'react';
import profile from '../../assets/images/mione.jpg';
import { 
  ProfileContainer,
  ProfileImage
} from './ProfileElements';

const Profile = () => {
  return (
    <>
      <ProfileContainer>
        <ProfileImage src={profile} alt="imagem_perfil"/>        
      </ProfileContainer>
    </>  
  )
};

export default Profile;