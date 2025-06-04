const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://<db_username>:<db_password>@cluster0.fqcly9t.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Conectado a MongoDB Atlas'))
.catch(err => console.error('Error de conexión:', err));