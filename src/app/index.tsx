import {
  ActivityIndicator,
  Button,
  FlatList,
  Pressable,
  Text,
  View,
} from 'react-native'
import { useQuery } from '@tanstack/react-query'
import { getEvents } from '../services/events'
import EventListItem from '../components/EventListITem'
import { Link } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons'

export default function HomeScreen() {
  const {
    data: events,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['events'],
    queryFn: () => getEvents(),
  })

  if (isLoading) {
    return <ActivityIndicator size='large' color='red' />
  }

  if (error) {
    return <Text>Error: {error.message}</Text>
  }

  return (
    <FlatList
      data={events}
      renderItem={({ item }) => <EventListItem event={item} />}
      contentContainerClassName='p-4 gap-4'
      keyExtractor={(item) => item.id}
      ListHeaderComponent={() => (
        <Link href='/events/create' asChild>
          <Pressable className='bg-purple-500 p-4 rounded-md flex-row items-center justify-center gap-2'>
            <Ionicons name='add-circle' size={24} color='white' />
            <Text className='text-white text-center font-bold'>
              Create Event
            </Text>
          </Pressable>
        </Link>
      )}
    />
  )
}
