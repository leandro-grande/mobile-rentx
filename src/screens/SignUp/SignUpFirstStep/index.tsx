import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { KeyboardAvoidingView, Keyboard, Alert } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import * as Yup from "yup";
import { BackButton } from "../../../components/BackButton";
import { Bullet } from "../../../components/Bullet";

import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";

import { Steps, Container, Content, Form, FormTitle, Header, SubTitle, Title } from "./styles";


export const SignUpFirstStep = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cnh, setCnh] = useState('');

  const navigation = useNavigation();

  const handleNextStep = async () => {

    try {
      const schema = Yup.object().shape({
        cnh: Yup.string().required('CNH obrigatório'),
        email: Yup.string().required('E-mail obrigatório').email('Digite um e-mail válido'),
        name: Yup.string().required('Nome obrigatório'),
      })

      const data = { name, email, cnh }

      await schema.validate(data);

      navigation.navigate('signUpSecondStep', { user: data });
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        Alert.alert('Opa', error.message)
      } else {
        Alert.alert('Opa', 'Ocorreu um erro ao cadastrar')
      }
    }
  }


  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>

          <Header>
            <BackButton onPress={() => navigation.goBack()} />

            <Steps>
              <Bullet active={true} />
              <Bullet active={false} />
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

          <FormTitle>1. Dados</FormTitle>

          <Form>
            <Input 
                iconName="user"
                placeholder="Nome"
                onChangeText={setName}
                value={name}
              />

            <Input 
              iconName="mail"
              placeholder="E-mail"
              keyboardType="email-address"
              autoCorrect={false}
              autoCapitalize="none"

              onChangeText={setEmail}
              value={email}
            />

            <Input 
              iconName="credit-card"
              placeholder="CNH"
              keyboardType="numeric"

              onChangeText={setCnh}
              value={cnh}
            />
          </Form>


          <Button 
            title="Próximo"
            onPress={handleNextStep}
          />

        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}