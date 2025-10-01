import {
  ActivityIndicator,
  Pressable,
  Text,
  useWindowDimensions,
  View,
} from 'react-native'
import { Link, useLocalSearchParams } from 'expo-router'
import { useQuery } from '@tanstack/react-query'
import { getEvent } from '@/services/events'
import { Stack } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { FlatList } from 'react-native'
import AssetItem from '@/components/AssetItem'

export default function EventDetailsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>()
  const { width } = useWindowDimensions()
  const { bottom } = useSafeAreaInsets()

  const {
    data: event,
    isLoading,
    error,
    refetch,
    isRefetching,
  } = useQuery({
    queryKey: ['events', id],
    queryFn: () => getEvent(id),
  })

  if (isLoading) {
    return <ActivityIndicator size='large' color='red' />
  }

  if (error) {
    return <Text>Error: {error.message}</Text>
  }

  if (!event) {
    return <Text>Event not found</Text>
  }

  return (
    <View className='flex-1'>
      <Stack.Screen
        options={{
          title: event.name,
          headerRight: () => (
            <Link href={`/events/${id}/share`} asChild>
              <Ionicons
                name='share-outline'
                size={24}
                color='white'
                className='mr-2 ml-2'
              />
            </Link>
          ),
        }}
      />
      <FlatList
        data={event.assets}
        numColumns={2}
        contentContainerClassName='p-4 gap-1'
        columnWrapperClassName='gap-1'
        renderItem={({ item }) => <AssetItem asset={item} />}
        contentInsetAdjustmentBehavior='automatic'
        refreshing={isRefetching}
        onRefresh={refetch}
      />

      <Link href={`/events/${id}/camera`} asChild>
        <Pressable
          className='absolute bottom-0 right-0 flex-row bg-white justify-center items-center p-6 rounded-full'
          style={{ bottom: bottom, right: bottom }}
        >
          <Ionicons name='camera-outline' size={40} color='black' />
        </Pressable>
      </Link>
    </View>
  )
}
