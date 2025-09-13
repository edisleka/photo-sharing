import { Cloudinary } from '@cloudinary/url-gen'
import { upload, UploadApiOptions } from 'cloudinary-react-native'
import { UploadApiResponse } from 'cloudinary-react-native/lib/typescript/src/api/upload/model/params/upload-params'

export const cloudinary = new Cloudinary({
  cloud: {
    cloudName: process.env.EXPO_PUBLIC_CLOUDINARY_CLOUD_NAME!,
  },
})

export const uploadToCloudinary = async (
  file: string
): Promise<UploadApiResponse> => {
  const options: UploadApiOptions = {
    upload_preset: 'sample_preset',
    unsigned: true,
  }

  return new Promise(async (resolve, reject) => {
    await upload(cloudinary, {
      file,
      options,
      callback: (error, result) => {
        if (error) {
          reject(error)
        } else if (!result) {
          reject(new Error('No result'))
        } else {
          resolve(result)
        }
      },
    })
  })
}
