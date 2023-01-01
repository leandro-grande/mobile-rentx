import { useNavigation } from "@react-navigation/native";
import {  useState } from "react";
import { KeyboardAvoidingView, Keyboard, Alert, Button as ButtonReact } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import * as Yup from "yup";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { InputPassword } from "../../components/InputPassword";
import { database } from "../../database";
import { useAuth } from "../../hooks/useAuth";

import { Container, Form, Header, SubTitle, Title } from "./styles";

export const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn } = useAuth();

  const navigation = useNavigation();

  const handleSignIn = async () => {
    try {
      const schema = Yup.object().shape({
        password: Yup.string().required('Senha obrigatória'),
        email: Yup.string().required('E-mail obrigatório').email('Digite um e-mail válido'),
      })

      await schema.validate({ email, password });

      signIn({ email, password });

    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        Alert.alert('Opa', error.message)
      } else {
        Alert.alert('Opa', 'Ocorreu um erro ao fazer login, verifique as credenciais')
      }
    }
  }

  const handleSignUp = () => {
    navigation.navigate('signUpFirstStep');
  }

  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <Header>
            <Title>
              Estamos {'\n'}
              quase lá.
            </Title>
            <SubTitle>
              Faça seu login para começar {'\n'}
              uma experiência incrível.
            </SubTitle>
          </Header>

          <Form>
            <Input 
              iconName="mail"
              placeholder="E-mail"
              keyboardType="email-address"
              autoCorrect={false}
              autoCapitalize="none"

              onChangeText={setEmail}
              value={email}
            />

            <InputPassword 
              iconName="lock"
              placeholder="Senha"

              onChangeText={setPassword}
              value={password}
            />
          </Form>


          <Button 
            title="Login"
            onPress={handleSignIn}
          />

          <Button 
            ghost
            title="Criar conta gratuita"
            onPress={handleSignUp}
          />


        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}