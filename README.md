## Installation

1. **Clone the repository to your local machine:**

   ```bash
   git clone https://github.com/Yarzik7/superhero-database-backend.git
   cd superhero-database-backend
   ```

2. **Install the dependencies:**

   npm:

   ```bash
   npm install
   ```

   yarn:

   ```bash
   yarn install
   ```

3. **Setting environment variables:**

   At the root of the project, create an .env file and add the following variables:

   DB_URI=mongodb+srv://your_name:your_password@cluster1.4jgoi.mongodb.net/your_database?retryWrites=true&w=majority&appName=your_cluster (for MongoDB example)

   PORT=your_port (3001 for default)

   Variables for Cloudinary:
   
   CLOUDINARY_NAME=
   CLOUDINARY_KEY=
   CLOUDINARY_SECRET=

4. **Running the project:**

   ```bash
   npm start
   ```

Next, you can view the work of the server at http://localhost:3001
