import { Link, Stack } from 'expo-router'
import { DarkTheme, ThemeProvider } from '@react-navigation/native'
import '../../global.css'
import Ionicons from '@expo/vector-icons/Ionicons'
import { useEffect } from 'react'
import { supabase } from '../lib/supabase'
import { AuthProvider } from '../providers/auth-provider'
import QueryProvider from '../providers/query-provider'

export default function RootLayout() {
  useEffect(() => {
    const signInIfNeeded = async () => {
      const { data, error } = await supabase.auth.getSession()

      if (error) {
        console.error(error)
      }

      if (!data.session) {
        const { data, error } = await supabase.auth.signInAnonymously()
      }
    }

    signInIfNeeded()
  }, [])

  return (
    <AuthProvider>
      <QueryProvider>
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
              name='events/[id]'
              options={{
                title: 'Event',
                // headerTitleAlign: 'center',
              }}
            />

            <Stack.Screen
              name='events/[id]/camera'
              options={{
                title: 'Camera',
                headerTitleAlign: 'center',
                headerTransparent: true,
                headerBlurEffect: 'dark',
                headerRight: () => (
                  <Link href='/' className='mx-2'>
                    <Ionicons name='share-outline' size={24} color='white' />
                  </Link>
                ),
              }}
            />

            <Stack.Screen
              name='events/create'
              options={{
                title: 'Create Event',
                headerTitleAlign: 'center',
                presentation: 'modal',
              }}
            />

            <Stack.Screen
              name='event'
              options={{
                title: 'Event',
                headerTitleAlign: 'center',
                headerTransparent: true,
                headerShown: false,
              }}
            />
          </Stack>
        </ThemeProvider>
      </QueryProvider>
    </AuthProvider>
  )
}
