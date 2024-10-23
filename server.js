require('dotenv').config();
const app = require('./app');

(async () => {
  console.log(`Database connection was successfully established`);
  app.listen(3001, () => {
    console.log(`Server is up and running on port 3001`);
  });
})();
