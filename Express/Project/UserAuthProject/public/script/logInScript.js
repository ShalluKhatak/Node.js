document.addEventListener('DOMContentLoaded', () => {
  let login_data = document.getElementById('login_form');
  login_data.addEventListener('submit', async (e) => {
    e.preventDefault();
    let form_data = new FormData(e.target);
    let email_user = form_data.get('email').trim();
    let password_user = form_data.get('password').trim();
    const param = {
      email: email_user,
      password: password_user,
    };
    console.log('param :>> ', param);
    console.log('email_user,password_user :>> ', email_user, password_user);
    const login_user = await fetch('http://localhost:3000/login', {
      method: 'POST',
      body: JSON.stringify(param),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log('login_user :>> ', login_user);
    window.location.href = '/';
  });
});
