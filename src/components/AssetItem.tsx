import { Tables } from '@/types/database.types'
import { AdvancedImage } from 'cloudinary-react-native'
import { cloudinary } from '@/lib/cloudinary'
import { artisticFilter } from '@cloudinary/url-gen/actions/effect'

export default function AssetItem({ asset }: { asset: Tables<'assets'> }) {
  return (
    <AdvancedImage
      cldImg={cloudinary
        .image(asset.asset_id!)
        .effect(artisticFilter('al_dente'))}
      className='flex-1 w-full aspect-[3/4] rounded-xl max-w-[50%]'
    />
  )
}
