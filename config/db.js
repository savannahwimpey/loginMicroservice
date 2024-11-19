const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('IMPORTANT: REPLACE WITH YOUR MONGODB CONNECTION STRING', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

module.exports = connectDB;
