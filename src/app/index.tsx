import { Text, View } from 'react-native'
import { Link } from 'expo-router'

export default function HomeScreen() {
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
