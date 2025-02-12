document.addEventListener('DOMContentLoaded', () => {
  async function fetch_url(url) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log('error :: ', error);
    }
  }

  async function PostEdit(post) {
    let post_data = document.getElementById('edit-post-form');
    const post_details = `<label for="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value="${post?.title}"
          required
        />

        <label for="author">Author:</label>
        <input
          type="text"
          id="author"
          name="author"
          value="${post?.author}"
          required
        />

        <label for="content">Content:</label>
        <textarea id="content" name="content" rows="10" required>
${post?.content}</textarea
        >

        <button type="submit">Update Post</button>`;

    if (!!post_data) {
      post_data.innerHTML = post_details;
    }
  }

  async function PostById() {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const id = urlParams.get('id');
      if (!id) return;
      const post_by_id = await fetch(`http://localhost:3000/edit/${id}`);
      if (!post_by_id.ok) {
        throw new Error(`HTTP error! Status: ${post_by_id.status}`);
      }

      const post_data = await post_by_id.json(); // Properly parse JSON
      PostEdit(post_data[0]);
    } catch (error) {
      console.log('error :', error);
    }
  }

  PostById();
});
