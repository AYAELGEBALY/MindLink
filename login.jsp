<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Login Page</title>
	<link rel="stylesheet" href="../css/combined_styles.css">
</head>
<body>
<header>
	<div class="logo">
		<img src="../img/Mental_Health_Support_Logo.png" alt="Mental Health Support Logo">
	</div>
	<nav>
		<ul>
			<li><a href="../index.html">Home</a></li>
			<li><a href="./about_page.html">About Us</a></li>
			<li><a href="./psyc_list.html">Therapists List</a></li>
			<li><a href="./tests_page.html">Psychometer</a></li>
			<li><a href="./matching.html">Find A Therapist</a></li>
			<li><a href="./resources_page.html">Blog</a></li>
		</ul>
	</nav>
	<div class="auth-buttons">
		<button class="auth-button"><a href="./html_files/log_in.jsp">Login</a></button>
		<button id="signupButton" class="auth-button"><a href="./html_files/sign_up.jsp">Sign Up</a></button>
	</div>
	<div class="search-bar">
		<input type="text" placeholder="Search...">
		<button type="button">Search</button>
	</div>
</header>
<main>
	<div class="login-container">
		<h2>Login</h2>
		<form id="loginForm" action="loginAction" method="post">
			<div class="input-group">
				<label for="username">Username</label>
				<input type="text" id="username" name="username" required>
			</div>
			<div class="input-group">
				<label for="password">Password</label>
				<input type="password" id="password" name="password" required>
			</div>
			<button type="submit">Log In</button>
		</form>
		<p id="message">${actionErrors}</p>
	</div>
</main>
<footer class="footer">
	<p><a href="#" class="footer-link">Privacy Policy</a> | <a href="#" class="footer-link">Terms of Service</a></p>
	<p>Contact: info@mindlink.com | Follow us on social media</p>
</footer>
<script src="../Js_files/login_js.js"></script>
</body>
</html>
