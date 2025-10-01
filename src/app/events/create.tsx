import { useState } from 'react'
import { View, TextInput, Button } from 'react-native'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createEvent } from '../../services/events'
import { useAuth } from '../../providers/auth-provider'
import { router } from 'expo-router'

export default function CreateEventScreen() {
  const [eventName, setEventName] = useState('')
  const { user } = useAuth()
  const queryClient = useQueryClient()

  const createEventMutation = useMutation({
    mutationFn: () =>
      createEvent({ name: eventName, owner_id: user?.id }, user?.id!),
    onSuccess: (data) => {
      setEventName('')
      queryClient.invalidateQueries({ queryKey: ['events'] })
      router.replace(`/events/${data.id}`)
    },
  })

  return (
    <View className='p-4 flex-1 gap-4'>
      <TextInput
        placeholder='Event Name'
        className='bg-neutral-900 rounded-lg p-5 text-white'
        placeholderTextColor='gray'
        value={eventName}
        onChangeText={setEventName}
      />

      <Button
        title='Create Event'
        onPress={() => {
          createEventMutation.mutate()
        }}
      />
    </View>
  )
}
