import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import { TextInputProps } from "react-native";
import { useTheme } from "styled-components";
import { Container, IconContainer, InputText, PasswordVisibilityButton } from "./styles"

interface InputProps extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>['name']
  value: string;
}

export const InputPassword = ({ iconName, value, ...rest }: InputProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const theme = useTheme();

  const handleInputFocus = () => {
    setIsFocused(true);
  }

  const handleInputBlur = () => {
    setIsFocused(false);
    setIsFilled(!!value);
  }

  const handlePasswordVisibilityChange = () => {
    setIsPasswordVisible(prevState => !prevState)
  }

  return (
    <Container isFocused={isFocused}>
      <IconContainer>
        <Feather 
          name={iconName} 
          size={24} 
          color={(isFocused || isFilled) ? theme.color.main : theme.color.text} 
        />
      </IconContainer>
      
        <InputText 
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          secureTextEntry={!isPasswordVisible} 
          autoCorrect={false}
          autoCapitalize='none'
          {...rest} 
        />

      <PasswordVisibilityButton onPress={handlePasswordVisibilityChange}>
        <Feather 
          name={isPasswordVisible ? 'eye-off' : 'eye'} 
          size={24} 
          color={theme.color.text} 
        />
      </PasswordVisibilityButton>

    </Container>
  )
}