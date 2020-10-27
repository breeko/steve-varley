import axios from "axios"


interface UploadImageResponse {
  data: {
    id: string
    title: string
    url_viewer: string
    url: string
    display_url: string
    size: string
    time: string
    expiration: string
    image: {
      filename: string
      name: string
      mime: string
      extension: string
      url: string
    },
    thumb: {
      filename: string
      name: string
      mime: string
      extension: string
      url: string
    },
    medium: {
      filename: string
      name: string
      mime: string
      extension: string
      url: string
    },
    delete_url: string
  },
  success: boolean
  status: number
}

process.env.IMGBB_API_KEY

export const uploadImage = async (blob: Blob): Promise<UploadImageResponse> => {
  const url = `https://api.imgbb.com/1/upload?key=${process.env.IMGBB_API_KEY}`
  const reader = new FileReader();
  reader.readAsDataURL(blob); 
  return new Promise(resolve => reader.onloadend = () => {
    const base64data = reader.result
    if (typeof base64data !== "string") {
      return
    }
    const trimmed = base64data.substr(base64data.indexOf(',') + 1)
    const data = new FormData()
    data.append('image', trimmed)
    axios({
      method: 'post',
      url,
      data,
      headers: {'Content-Type': 'multipart/form-data' }
      }).then(im => resolve(im.data as UploadImageResponse))
  })
}
