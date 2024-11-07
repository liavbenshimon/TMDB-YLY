//mvp minimum valuble product
import express from 'express';
import mongoose from 'mongoose';

const URI ="mongodb+srv://liavbenshimon:r2RUgh7Ko3cNRlD8@cluster0.k19ik.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const jokeSchema = new mongoose.Schema({
    setup: String,
    punchline: String
  });
  
  const Joke = mongoose.model('Joke', jokeSchema);



mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch(error => console.error("Failed to connect to MongoDB Atlas:", error));
  

  


// Create an instance of express
const app = express();

// Define the port
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello, welcome to my Express server!');
});

app.get('/jokes/', async(req, res) => {
    try {
        const jokes = await Joke.find();
        res.json(jokes);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
  });
  
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});