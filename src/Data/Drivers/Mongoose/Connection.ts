import mongoose from 'mongoose'

mongoose
  .connect(process.env.DB_URI as string, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB'))
