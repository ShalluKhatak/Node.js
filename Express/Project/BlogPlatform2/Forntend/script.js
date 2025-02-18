document.addEventListener('DOMContentLoaded', async () => {
  // Fetch data from a given URL
  // alert('Home page');
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

  // Fetch and display all posts
  async function loadPosts() {
    const posts = await fetchData('http://localhost:3000/getpost');

    if (Array.isArray(posts) && posts.length > 0) {
      renderPostCards(posts);
    } else {
      console.warn('No posts available.');
    }
  }

  // Generate and display blog cards
  function renderPostCards(posts) {
    const postList = document.getElementById('post-list');
    if (!postList) return;

    postList.innerHTML = posts
      .map(
        (post) => `
        <div class="blog-card">
          <div class="content">
            <h3>${post.title}</h3>
            <p>${post.content}</p>
            <a href="post.html?id=${post.id}" class="read_more">Read More</a>
          </div>
        </div>`,
      )
      .join('');
  }

  // Initialize
  loadPosts();
});
