import { Link, Stack } from 'expo-router'
import { DarkTheme, ThemeProvider } from '@react-navigation/native'
import '../../global.css'
import Ionicons from '@expo/vector-icons/Ionicons'

export default function RootLayout() {
  return (
    <ThemeProvider value={DarkTheme}>
      <Stack>
        <Stack.Screen
          name='index'
          options={{
            title: 'Events',
            // headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name='camera'
          options={{
            title: 'Camera',
            headerTitleAlign: 'center',
            headerTransparent: true,
            headerBlurEffect: 'dark',
            headerRight: () => (
              <Link href='/share' className='mx-2'>
                <Ionicons name='share-outline' size={24} color='white' />
              </Link>
            ),
          }}
        />
      </Stack>
    </ThemeProvider>
  )
}
