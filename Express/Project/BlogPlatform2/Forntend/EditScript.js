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
          id="p_title"
          name="title"
          value="${post?.title}"
          required
        />

        <label for="author">Author:</label>
        <input
          type="text"
          id="p_author"
          name="author"
          value="${post?.author}"
          required
        />

        <label for="content">Content:</label>
        <textarea id="p_content" name="content" rows="10" required>
${post?.content}</textarea
        >

        <button type="submit" id="update_post">Update Post</button>`;

    if (!!post_data) {
      post_data.innerHTML = post_details;
    }
    document.getElementById('update_post').addEventListener('click', (e) => {
      e.preventDefault();
      p_title = document.getElementById('p_title').value;
      p_author = document.getElementById('p_author').value;
      p_content = document.getElementById('p_content').value;
      EditPostByID({
        id: post?.id,
        title: p_title,
        author: p_author,
        content: p_content,
      });
    });
  }

  async function EditPostByID(post_new_data) {
    const post_by_id = await fetch(
      `http://localhost:3000/update/${post_new_data?.id}`,
      {
        method: 'POST',
        body: JSON.stringify(post_new_data),
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    if (!post_by_id.ok) {
      throw new Error(`Failed to update post: ${post_by_id.status}`);
    }
    window.location.href = './index.html';
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
