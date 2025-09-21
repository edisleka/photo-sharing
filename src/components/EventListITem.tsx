import { Text, View } from 'react-native'
import { Tables } from '../types/database.types'

type Event = Tables<'events'>

type EventListItemProps = {
  event: Event
}

export default function EventListItem({ event }: EventListItemProps) {
  return (
    <View className='bg-neutral-800 p-4 rounded-lg'>
      <Text className='text-white font-bold text-2xl'>{event.name}</Text>
    </View>
  )
}
