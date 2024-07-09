import mongoose, { connect } from "mongoose";

mongoose.connectDB('', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('connect to mongoDB');
})
.catch((error) => {
    console.error(`Error connecting to mongoDB:, {error.message}`);
}); 

const userSchema = new mongoose.Schema({
    name: String,
    picture: true,
    id: String
});


const User = mongoose.model('User', userSchema);

export = { connectDB, User};
// import dotenv from "dotenv";

// dotenv.config();

// const connectDB = async () => {
//     try {
//         const conn = await mongoose.connect(process.env.MONGO_URL, {
//         })
//         console.log(`MongoDB connected successfully:${conn.connection.host}`)
//     } catch (error) {
//         console.error(`Error while connecting ${error.message}`)
//         process.exit(1)
//     }
// }

// export default connectDB;


