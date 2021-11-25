import React from 'react';
import profile from '../../assets/images/mione.jpg';
import { 
  ProfileContainer,
  ProfileImage,
  ProfileText,
  ProfileRadio,
  RadioLink,
  RadioLabel,
  RadioGroupList,
  RadioGroupItem
} from './ProfileElements';

const Profile = () => (
  <>
    <ProfileContainer>
      <ProfileText>
        <RadioGroupList>
          <RadioGroupItem>
            <ProfileRadio type="radio" name="profile_login"/>
            <RadioLabel>
              <RadioLink to="/login">Entrar</RadioLink>   
            </RadioLabel>
          </RadioGroupItem>
          <RadioGroupItem>                
            <ProfileRadio type="radio" name="profile_login"/>
            <RadioLabel>
              <RadioLink to="/signup">Nova Conta</RadioLink>  
            </RadioLabel>
          </RadioGroupItem>
        </RadioGroupList>     
      </ProfileText>
      <ProfileImage src={profile} alt="imagem_perfil"/>
    </ProfileContainer>    
  </>  
);

export default Profile;