import { Text, Pressable } from 'react-native'
import { Tables } from '../types/database.types'
import { Link } from 'expo-router'

type Event = Tables<'events'>

type EventListItemProps = {
  event: Event
}

export default function EventListItem({ event }: EventListItemProps) {
  return (
    <Link href={`/events/${event.id}`} asChild>
      <Pressable className='bg-neutral-800 p-4 rounded-lg'>
        <Text className='text-white font-bold text-2xl'>{event.name}</Text>
      </Pressable>
    </Link>
  )
}
