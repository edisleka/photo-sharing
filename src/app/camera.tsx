import Ionicons from '@expo/vector-icons/Ionicons'
import { CameraView, CameraType, useCameraPermissions } from 'expo-camera'
import { useRef, useState } from 'react'
import {
  ActivityIndicator,
  Button,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function CameraScreen() {
  const [facing, setFacing] = useState<CameraType>('back')
  const [permission, requestPermission] = useCameraPermissions()

  const camera = useRef<CameraView>(null)

  if (!permission) {
    // Camera permissions are still loading.
    return <ActivityIndicator size='large' color='white' />
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View className='flex-1 justify-center'>
        <Text className='text-center pb-2.5'>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title='grant permission' />
      </View>
    )
  }

  function toggleCameraFacing() {
    setFacing((current) => (current === 'back' ? 'front' : 'back'))
  }

  async function takePhoto() {
    console.log('takePhoto')
    const photo = await camera.current?.takePictureAsync()
    console.log(JSON.stringify(photo, null, 2))
  }

  return (
    <View className='flex-1 justify-center'>
      <CameraView ref={camera} style={{ flex: 1 }} facing={facing}>
        <View className='absolute bottom-0 left-0 right-0 w-full bg-neutral-900/20 p-4'>
          <Ionicons
            name='camera-reverse'
            size={24}
            color='white'
            onPress={toggleCameraFacing}
          />
        </View>
      </CameraView>
      <SafeAreaView
        edges={['bottom']}
        className='flex-row bg-transparent w-full p-4 justify-center items-center'
      >
        <Pressable
          className='bg-white rounded-full w-20 h-20'
          onPress={takePhoto}
        />
      </SafeAreaView>
    </View>
  )
}
