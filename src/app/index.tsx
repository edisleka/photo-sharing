import { ActivityIndicator, FlatList, Text, View } from 'react-native'
import { useQuery } from '@tanstack/react-query'
import { getEvents } from '../services/events'
import EventListItem from '../components/EventListITem'

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
    />
  )
}
