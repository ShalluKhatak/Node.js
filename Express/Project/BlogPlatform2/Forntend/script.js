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

  async function HomeUrl() {
    try {
      const url_test = fetch_url('http://localhost:3000/getpost')
        .then((res) => {
          let get_res = res;
          if (Array.isArray(get_res) && get_res.length > 0) {
            get_res.map((item) => {
              ShowCards(item?.title, item?.content, item?.id);
            });
          }
        })
        .catch((err) => {
          console.log('err : ', err);
        });
    } catch (error) {
      console.log('error :: ', error);
    }
  }

  async function ShowCards(title, content, id) {
    let post_list = document.getElementById('post-list');
    if (post_list) {
      const blog_card = `<div class="blog-card">
            <div class="content">
                <h3>${title}</h3>
                <p>${content}</p>
                <a href="post.html?id=${id}" class="read_more">Read More</a>
            </div>
        </div>`;
      post_list.innerHTML += blog_card;
    }
  }

  HomeUrl();
});
