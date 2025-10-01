import { View, Text, StyleSheet } from 'react-native'
import QRCode from 'react-native-qrcode-svg'
import { useLocalSearchParams } from 'expo-router'

export default function ShareScreen() {
  const { id } = useLocalSearchParams<{ id: string }>()

  return (
    <View className='p-4 flex-1 gap-4 items-center '>
      <Text className='text-2xl font-bold text-white'>
        Share event with your friends
      </Text>

      {/* <QRCode value={`photosharing://events/${id}/join`} size={200} /> */}
      <QRCode
        value={`exp+photo-sharing://expo-development-client/?url=http%3A%2F%2F192.168.1.6%3A8081/--/events/${id}/join`}
        size={200}
      />
    </View>
  )
}
