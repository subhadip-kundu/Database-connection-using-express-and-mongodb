import app from "./app.js"
import mongoose from "mongoose"
const port = 3001


  // Database connection - mongodb
  // mongoose.connect('mongodb://127.0.0.1:27017/test');

  (async () => {
    try {
      await mongoose.connect('mongodb://127.0.0.1:27017/test');
      console.log('DB connected!');

      app.on('error', (err) => {
        console.error('ERROR: ', err);
        throw err;
      })

      app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
      });

    } catch (error) {
      console.error('ERROR: ', error);
      throw error;
    }
  })()

