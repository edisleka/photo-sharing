import { Stack } from 'expo-router'
import { DarkTheme, ThemeProvider } from '@react-navigation/native'

export default function RootLayout() {
  return (
    <ThemeProvider value={DarkTheme}>
      <Stack>
        <Stack.Screen
          name='index'
          options={{
            title: 'Home',
            headerTitleAlign: 'center',
          }}
        />
      </Stack>
    </ThemeProvider>
  )
}
