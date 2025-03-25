document.addEventListener('DOMContentLoaded', () => {
  const logout_form = document.getElementById('logout_form');
  if (Boolean(logout_form)) {
    logout_form.addEventListener('click', async (e) => {
      window.location.href = '/logout';
    });
  }
});
