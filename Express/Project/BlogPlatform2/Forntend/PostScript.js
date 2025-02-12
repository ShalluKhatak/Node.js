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

  async function ShowPost(post) {
    let post_data = document.getElementById('post-detail');
    const post_details = `<h2 id="post-title">${post?.title}</h2>
        <p id="post-author">by <span>${post?.author}</span></p>
        <p id="post-date">Posted on: <span>Date: ${post?.date}</span></p>
        <div id="post-content">${post?.content}</div>
        <div class="post-actions">
          <button id="edit-post">Edit</button>
          <button id="delete-post">Delete</button>
        </div>`;

    if (!!post_data) {
      post_data.innerHTML = post_details;
    }
    const edit_btn = document.getElementById('edit-post');
    if (edit_btn) {
      edit_btn.addEventListener('click', () => {
        window.location.href = `./edit.html?id=${post?.id}`;
      });
    }
  }

  async function PostById() {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const id = urlParams.get('id');
      if (!id) return;
      const post_by_id = await fetch(
        `http://localhost:3000/getpost/post/${id}`,
      );
      if (!post_by_id.ok) {
        throw new Error(`HTTP error! Status: ${post_by_id.status}`);
      }

      const post_data = await post_by_id.json(); // Properly parse JSON
      ShowPost(post_data[0]);
    } catch (error) {
      console.log('error :', error);
    }
  }

  PostById();
});
