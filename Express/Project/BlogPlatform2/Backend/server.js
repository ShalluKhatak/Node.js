import express from 'express';
import cors from 'cors';
import fs from 'fs/promises';

const app = express();
const port = 3000;
const DATA_FILE = 'posts.json';

app.use(cors());
app.use(express.json()); // Middleware to parse JSON requests

// Function to read posts.json
const readData = async () => {
  try {
    const data = await fs.readFile(DATA_FILE, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading data:', error);
    return [];
  }
};

// Function to write posts.json
const writeData = async (data) => {
  try {
    await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2), 'utf8');
  } catch (error) {
    console.error('Error writing data:', error);
  }
};

// Fetch all posts
app.get('/getpost', async (req, res) => {
  const posts = await readData();
  res.json(posts);
});

// Fetch a specific post by ID
app.get('/getpost/post/:id', async (req, res) => {
  const posts = await readData();
  const post = posts.find((item) => item.id == req.params.id);
  res.json(post ? [post] : []);
});

// Fetch a post for editing (same as above, just renamed for clarity)
app.get('/edit/:id', async (req, res) => {
  const posts = await readData();
  const post = posts.find((item) => item.id == req.params.id);
  res.json(post ? [post] : []);
});

app.post('/update/:id', async (req, res) => {
  const post_update = req.body;
  let posts = await readData();
  const newPosts = posts.map((item) => {
    if (item.id == post_update.id) {
      let new_post_data = {};
      new_post_data = {
        ...item,
        title: post_update?.title,
        author: post_update?.author,
        content: post_update?.content,
      };
      return new_post_data;
    } else {
      return item;
    }
  });
  await writeData(newPosts);
  res.json({ message: 'Post Update successfully' });
});
// Delete a post by ID
app.get('/delete/:id', async (req, res) => {
  let posts = await readData();
  const newPosts = posts.filter((item) => item.id != req.params.id);

  if (newPosts.length === posts.length) {
    return res.status(404).json({ message: 'Post not found' });
  }

  await writeData(newPosts);
  res.json({ message: 'Post deleted successfully' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
