import { useNavigation, useRoute } from "@react-navigation/native";
import { useState } from "react";
import { KeyboardAvoidingView, Keyboard, Alert } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import * as Yup from "yup";

import { BackButton } from "../../../components/BackButton";
import { Bullet } from "../../../components/Bullet";

import { Button } from "../../../components/Button";
import { InputPassword } from "../../../components/InputPassword";
import { api } from "../../../services/api";

import { Steps, Container, Form, FormTitle, Header, Content, Title, SubTitle} from "./styles";

type RouteParams = {
  user: {
    name: string;
    email: string;
    cnh: string;
  }
}

export const SignUpSecondStep = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigation = useNavigation();
  const route = useRoute();

  const { user } = route.params as RouteParams;


  const handleSignUp = async () => {

    if ( password != confirmPassword ) {
      return Alert.alert('As senhas não são iguais')
    }

    await api.post('/users', {
      name: user.name,
      email: user.email,
      driver_license: user.cnh,
      password,
    })
      .then(() => {
        navigation.navigate('confirmation', { 
          title: 'Conta criada!',
          message: 'Agora é só fazer login \n e aproveitar',
          nextScreenRoute: 'SignIn'
         })
      })
      .catch((error) => {
        console.log(error)
        Alert.alert('Opa', 'Não foi possivel cadastrar');
      });
  }


  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>

          <Header>
            <BackButton onPress={() => navigation.goBack()} />

            <Steps>
              <Bullet active={false} />
              <Bullet active={true} />
            </Steps>
          </Header>

          <Content>
            <Title>
              Crie sua {'\n'}
              conta
            </Title>
            <SubTitle>
              Faça seu cadastro de {'\n'}
              forma rápida e fácil.
            </SubTitle>
          </Content>

          <FormTitle>2. Senha</FormTitle>

          <Form>
            <InputPassword 
                iconName="lock"
                placeholder="Senha"
                onChangeText={setPassword}
                value={password}
              />

            <InputPassword 
                iconName="lock"
                placeholder="Repetir Senha"
                onChangeText={setConfirmPassword}
                value={confirmPassword}
              />

     
          </Form>


          <Button
            green 
            title="Cadastrar"
            enabled={!!password && !!confirmPassword}
            onPress={handleSignUp}
          />

        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}