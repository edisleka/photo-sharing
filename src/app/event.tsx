import { View, Text, useWindowDimensions } from 'react-native'
import { AdvancedImage } from 'cloudinary-react-native'
import { cloudinary } from '../lib/cloudinary'
import { thumbnail } from '@cloudinary/url-gen/actions/resize'
import { SafeAreaView } from 'react-native-safe-area-context'
import { artisticFilter } from '@cloudinary/url-gen/actions/effect'

export default function EventScreen() {
  const { width } = useWindowDimensions()

  return (
    <SafeAreaView>
      <Text className='text-white'>Event</Text>
      {/* <AdvancedImage
        cldImg={cloudinary.image('pl9og7ttntlgaep40exe').resize(
          thumbnail()
            .height(width * (4 / 3))
            .width(width)
        )}
        className='w-full aspect-[3/4]'
      /> */}
      <AdvancedImage
        cldImg={cloudinary
          .image('pl9og7ttntlgaep40exe')
          .effect(artisticFilter('incognito'))}
        style={{ width: '100%', aspectRatio: 3 / 4 }}
      />
    </SafeAreaView>
  )
}
