import { View, Text, Button } from 'react-native'
import { router, useLocalSearchParams } from 'expo-router'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { getEvent, joinEvent } from '@/services/events'
import { useAuth } from '@/providers/auth-provider'

export default function JoinScreen() {
  const { id } = useLocalSearchParams<{ id: string }>()
  const { user } = useAuth()
  const queryClient = useQueryClient()

  const { data: event } = useQuery({
    queryKey: ['events', id],
    queryFn: () => getEvent(id),
  })

  const joinEventMutation = useMutation({
    mutationFn: () => joinEvent(id, user?.id!),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['events', id] })
      router.replace(`/events/${id}`)
    },
  })

  return (
    <View className='p-4 flex-1 gap-4 items-center justify-center'>
      <Text className='text-xl font-bold text-white'>
        You are invited to the event
      </Text>
      <Text className='text-3xl font-bold text-white'>{event?.name}</Text>

      <Button title='Join Event' onPress={() => joinEventMutation.mutate()} />
    </View>
  )
}
