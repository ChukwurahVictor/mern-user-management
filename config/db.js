const mongoose = require('mongoose');

const connectDB = async() => {
   try {
      const conn = await mongoose.connect(process.env.DB_URL, {
         useUnifiedTopology: true, 
         useNewUrlParser: true
      })

      console.log("Database connected successfully...");
   } catch (err) {
      console.log(`Error: ${err.message}`);
      process.exit(1);
   }
}

module.exports = connectDB;