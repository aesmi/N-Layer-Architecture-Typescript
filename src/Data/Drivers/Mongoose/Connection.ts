import mongoose from 'mongoose'

export async function connectToMongo(
  uri: string = process.env.DB_URI as string
) {
  mongoose
    .connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('Connected to MongoDB'))
}
