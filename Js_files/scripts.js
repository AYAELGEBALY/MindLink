// Add this to your existing JavaScript file
document.addEventListener('DOMContentLoaded', () => {
  const psychometerButton = document.querySelector('#psychometerButton');
  const therapistButton = document.querySelector('#therapistButton');
  const signupButton = document.querySelector('#signupButton');
  const LoginButton = document.querySelector('#LoginButton');

  psychometerButton.addEventListener('click', () => {
    window.location.href = './html_files/tests_page.html'; // Update with the actual path to your psychometer page
  });

  therapistButton.addEventListener('click', () => {
    window.location.href = './html_files/matching.html'; // Update with the actual path to your therapists list page
  });


  LoginButton.addEventListener('click', () => {
    window.location.href = './html_files/log_in.jsp'; // Update with the actual path to your sign-up page
  });

  signupButton.addEventListener('click', () => {
    window.location.href = './html_files/sign_up.jsp'; // Update with the actual path to your sign-up page
  });
});
function redirectToTest(testType) {
  window.location.href = `./html_files/test_interaction.html?type=${testType}`;
}