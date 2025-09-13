import { Text, View } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign'
import { Link } from 'expo-router'

export default function HomeScreen() {
  return (
    <View className='flex-1 items-center justify-center'>
      <Link href='/camera' className='text-white'>
        Open Camera
      </Link>
    </View>
  )
}
