import express from 'express'
import cors from 'cors'

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
        name: 'Divyansh',
        email: 'connectwithdivyansh@gmail.com',
        contact: '9305441885',
        address: {
            city: 'Delhi',
            state: 'Delhi',
            country: 'India',
            pincode: '110058'
        
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
