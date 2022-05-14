const mongoose = require('mongoose')

const connectionDB = 'mongodb+srv://admin:admin123@cluster0.47aus.mongodb.net/users?retryWrites=true&w=majority'

mongoose.set('debug', true)
mongoose
.connect(connectionDB, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})
.then(() => {
    console.log('Database is connected successfully!')
})
.catch(err => {
    console.log('Cannot connect to the database!', err)
    process.exit()
})

