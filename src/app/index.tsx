import { Text, View } from 'react-native'
import { Link } from 'expo-router'
import { supabase } from '../lib/supabase'
import { useEffect } from 'react'

export default function HomeScreen() {
  useEffect(() => {
    supabase
      .from('events')
      .select('*')
      .then(({ data }) => {
        console.log(JSON.stringify(data, null, 2))
      })
  }, [])

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
