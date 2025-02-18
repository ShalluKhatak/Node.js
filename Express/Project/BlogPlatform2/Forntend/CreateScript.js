document.addEventListener('DOMContentLoaded', () => {
  const AddPost = async (post) => {
    try {
      const post_by_id = await fetch(`http://localhost:3000/addpost`, {
        method: 'POST',
        body: JSON.stringify(post),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!post_by_id.ok) {
        throw new Error(`Failed to add post: ${post_by_id.status}`);
      }
      window.location.href = './index.html';
    } catch (error) {
      console.log('error : ', error);
    }
  };

  let new_post_element = document.getElementById('create-post-form');
  if (!!new_post_element) {
    new_post_element.addEventListener('submit', (e) => {
      e.preventDefault();
      let formData = new FormData(e.target);
      let final_data = { id: Date.now() };
      for (let [key, value] of formData.entries()) {
        final_data[key] = value;
      }
      AddPost(final_data);
    });
  }
});
