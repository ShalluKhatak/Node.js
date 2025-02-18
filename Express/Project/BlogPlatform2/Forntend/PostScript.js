document.addEventListener('DOMContentLoaded', async () => {
  // alert('post');
  // Fetch data from a URL and return JSON
  async function fetchData(url) {
    try {
      const response = await fetch(url);
      if (!response.ok)
        throw new Error(`HTTP error! Status: ${response.status}`);
      return await response.json();
    } catch (error) {
      console.error('Fetch error:', error);
    }
  }

  // Fetch and display post details
  async function showPost(post) {
    if (!post) return;

    const postContainer = document.getElementById('post-detail');
    if (!postContainer) return;

    postContainer.innerHTML = `
      <h2 id="post-title">${post.title}</h2>
      <p id="post-author">by <span>${post.author}</span></p>
      <p id="post-date">Posted on: <span>${post.date}</span></p>
      <div id="post-content">${post.content}</div>
      <div class="post-actions">
        <button id="edit-post">Edit</button>
        <button id="delete-post">Delete</button>
      </div>`;

    // Attach event listeners to buttons
    document.getElementById('edit-post').addEventListener('click', () => {
      window.location.href = `./edit.html?id=${post.id}`;
    });

    document.getElementById('delete-post').addEventListener('click', (e) => {
      e.preventDefault();
      deletePost(post.id);
    });
  }

  // Fetch a post by ID
  async function fetchPostById(postId) {
    if (!postId) return;
    // alert(1111);
    const postData = await fetchData(
      `http://localhost:3000/getpost/post/${postId}`,
    );
    if (postData && postData.length > 0) showPost(postData[0]);
  }

  // Delete a post by ID
  async function deletePost(postId) {
    if (!postId) return;
    try {
      const response = await fetch(`http://localhost:3000/delete/${postId}`);
      if (!response.ok) {
        throw new Error(`Failed to delete post: ${response.status}`);
      }

      // const url = new URL(window.location);
      // url.search = '';
      // window.history.replaceState({}, document.title, url.toString());
      // alert('Post deleted successfully.');
      window.location.href = './index.html';

      // setTimeout(() => {
      // }, 1000);
    } catch (error) {
      console.error('Delete error:', error);
    }
  }

  // Extract post ID from URL and load post data
  const postId = new URLSearchParams(window.location.search).get('id');
  if (postId) fetchPostById(postId);
});
