document.addEventListener('DOMContentLoaded', () => {
  try {
    let signUpForm = document.getElementById('signup_form');

    let login = document.getElementById('login_page');
    if (Boolean(login)) {
      login.addEventListener('click', () => {
        window.location.href = '/login';
      });
    }
    if (Boolean(signUpForm)) {
      const OnSubmit = async (data) => {
        console.log('data :>> ', data);
        const sign_up_user = await fetch('http://localhost:3000/signup', {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (!sign_up_user.ok) {
          throw new Error(`Failed to add post: ${sign_up_user.status}`);
        }
        window.location.href = '/login';
      };

      signUpForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let formData = new FormData(e.target);
        let submit_data = {};
        formData.forEach((value, key) => {
          console.log(key, value);
          submit_data[key] = value;
        });
        OnSubmit(submit_data);
      });
    }
  } catch (error) {
    console.log('error : ', error);
  }
});
