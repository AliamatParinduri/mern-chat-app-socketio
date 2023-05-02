import 'dotenv/config'

const images = 'https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg'

export const PORT = process.env.PORT ?? 8000
export const DefaultPicture = process.env.DefaultPicture ?? images
export const DBUri = process.env.DBUri ?? 'your uri'
export const privateKey = process.env.privateKey ?? 'your private key'
export const publicKey = process.env.publicKey ?? 'your public key'
