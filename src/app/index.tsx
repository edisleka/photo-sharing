import { View } from 'react-native'
import { Link } from 'expo-router'
import { useAuth } from '../providers/auth-provider'

export default function HomeScreen() {
  const { user, isAuthenticated } = useAuth()

  console.log('user: ', user)
  console.log('isAuthenticated: ', isAuthenticated)

  return (
    <View className='flex-1 items-center justify-center gap-5'>
      <Link href='/camera' className='text-white'>
        Open Camera
      </Link>
      <Link href='/event' className='text-white'>
        Event Details
      </Link>
    </View>
  )
}