import { useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { ValidationError } from "yup";
import * as ImagePicker from 'expo-image-picker';
import * as Yup from 'yup';

import { BackButton } from "../../components/BackButton";

import { ButtonArea, Container, Content, Header, HeaderTitle, HeaderTop, LogoutButton, Option, Options, OptionTitle, Photo, PhotoButton, PhotoContainer, Section } from "./styles";
import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { Input } from "../../components/Input";
import { Alert, Keyboard, KeyboardAvoidingView } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { Button } from "../../components/Button";
import { InputPassword } from "../../components/InputPassword";


export const Profile = () => {
  const { user, signOut, updateUser } = useAuth();

  const [avatar, setAvatar] = useState(user.avatar);
  const [name, setName] = useState(user.name);
  const [driverLicense, setDriverLicense] = useState(user.driver_license);

  const [option, setOption ] = useState<'dataEdit'| 'passwordEdit'>('dataEdit');


  const navigation = useNavigation();
  const theme = useTheme();

  const handleBack = () => {
    navigation.goBack();
  }

  const handleSignOut = () => {
    Alert.alert('Tem certeza?', 'Se voce sair, irá precisar de internet para conectar-se novamente', 
      [
        {
          text: 'Cancelar',
          onPress: () => {}
        },
        {
          text: 'Sim',
          onPress: () => signOut()
        }
      ]
    )
  }

  const handleSelectOption = (options: 'dataEdit'| 'passwordEdit') => {
    setOption(options);
  }

  const handleSelectAvatar = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    })

    if (!result.canceled) {
      setAvatar(result.assets[0].uri)
    }
  }

  const handleProfileUpdate = async () => {
    try {
      const schema = Yup.object().shape({
        driverLicense: Yup.string().required('CNH obrigatória'),
        name: Yup.string().required('Nome é obrigatório'),
      })

      const data = { name, driverLicense };

      await schema.validate(data);

      await updateUser({
        id: user.id,
        user_id: user.user_id,
        email: user.email,
        driver_license: user.driver_license,
        token: user.token,
        name,
        avatar,
      });

      console.log(user);

      Alert.alert('Perfil atualizado!');

    } catch (error) {
      if (error instanceof ValidationError) {
        Alert.alert('Opa', error.message);
      } else {
        Alert.alert('Opa', 'Não foi possível atualizar');
      }
    }
  }

  return (
    <KeyboardAvoidingView behavior="position" enabled >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <Header>
            <HeaderTop>
              <BackButton onPress={handleBack} />
              <HeaderTitle>Editar Perfil</HeaderTitle>
              <LogoutButton onPress={handleSignOut}>
                <Feather 
                  name="power"
                  size={24}
                  color={theme.color.shape}
                />
              </LogoutButton>
            </HeaderTop>

            <PhotoContainer>
              { !!avatar && <Photo source={{ uri: avatar }} /> }
              <PhotoButton onPress={handleSelectAvatar}>
                <Feather 
                  name="camera"
                  size={24}
                  color={theme.color.shape}
                />
                
              </PhotoButton>
            </PhotoContainer>
          </Header>

          <Content style={{marginBottom: useBottomTabBarHeight()}}>
            <Options>
              <Option 
                active={option === 'dataEdit'}
                onPress={() => handleSelectOption('dataEdit')}
              >

                <OptionTitle active={option === 'dataEdit'}>Dados</OptionTitle>
              </Option>

              <Option
                active={option === 'passwordEdit'} 
                onPress={() => handleSelectOption('passwordEdit')}
              >
                <OptionTitle active={option === 'passwordEdit'}>Trocar Senha</OptionTitle>
              </Option>
            </Options>

            { option === "dataEdit" ? ( 
              <Section>
                <Input 
                  iconName="user"
                  placeholder="Nome"
                  autoCorrect={false}
                  defaultValue={user.name}
                  value={name}
                  onChangeText={setName}
                />
                <Input 
                  iconName="mail"
                  editable={false}
                  defaultValue={user.email}
                />
                <Input 
                  iconName="credit-card"
                  placeholder="CNH"
                  keyboardType="numeric"
                  defaultValue={user.driver_license}
                  value={driverLicense}
                  onChangeText={setDriverLicense}
                />
              </Section>
            ) : (
              <Section>
                <InputPassword 
                  iconName="lock"
                  placeholder="Senha Atual"
                  value=""
                />

                <InputPassword 
                  iconName="lock"
                  placeholder="Nova Senha"
                  value=""
                />

                <InputPassword 
                  iconName="lock"
                  placeholder="Repetir Senha"
                  value=""
                />
              </Section>
            )}

              <ButtonArea>
                <Button 
                  title="Salvar Alterações" 
                  onPress={handleProfileUpdate}
                />
              </ButtonArea>

          </Content>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}