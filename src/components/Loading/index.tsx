import { ActivityIndicator } from "react-native"
import { useTheme } from "styled-components/native"


export const Loading = () => {
  const theme = useTheme();

  return (
    <ActivityIndicator
      color={theme.color.main}
      style={{flex: 1}}
    />
  )
}