require('dotenv').config();
const connectDb = require('./db/connectDb');
const app = require('./app');

const { PORT = 3001, DB_URI } = process.env;

(async () => {
  try {
    await connectDb(DB_URI);
    console.log(`Database connection was successfully established`);
    app.listen(PORT, () => {
      console.log(`Server is up and running on port ${PORT}`);
    });
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
})();
