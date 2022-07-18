const Mongoose = require('mongoose')
const RemoteDB = 'mongodb+srv://IsaacHHB:Hollowhorn7@cluster0.lkpys.mongodb.net/?retryWrites=true&w=majority'
const connectDB = async () => {
    await Mongoose.connect(RemoteDB)
    .then(client => {
        console.log("MongoDB connected succesfully")
    })
}
module.exports = connectDB