<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="javax.servlet.http.HttpSession" %>
<%
  HttpSession session = request.getSession();
  String username = (String) session.getAttribute("username");
  String email = (String) session.getAttribute("email");
  String firstname = (String) session.getAttribute("firstname");
  String surname = (String) session.getAttribute("surname");
  int age = (Integer) session.getAttribute("age");
  String gender = (String) session.getAttribute("gender");
  String phone = (String) session.getAttribute("phone");
  String emergencyContactName = (String) session.getAttribute("emergencyContactName");
  String emergencyContactPhone = (String) session.getAttribute("emergencyContactPhone");
  String relationshipWithEmergencyContact = (String) session.getAttribute("relationshipWithEmergencyContact");
%>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Patient Profile</title>
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
    <button class="auth-button"><a href="./login.html">Login</a></button>
    <button id="signupButton" class="auth-button"><a href="./sign_up.html">Sign Up</a></button>
  </div>
  <div class="search-bar">
    <input type="text" placeholder="Search...">
    <button type="button">Search</button>
  </div>
</header>
<main>
  <div class="profile-container">
    <h2>Patient Profile</h2>
    <p>Username: <%= username %></p>
    <p>Email: <%= email %></p>
    <p>First Name: <%= firstname %></p>
    <p>Last Name: <%= surname %></p>
    <p>Age: <%= age %></p>
    <p>Gender: <%= gender %></p>
    <p>Phone: <%= phone %></p>
    <p>Emergency Contact Name: <%= emergencyContactName %></p>
    <p>Emergency Contact Phone: <%= emergencyContactPhone %></p>
    <p>Relationship with Emergency Contact: <%= relationshipWithEmergencyContact %></p>
  </div>
</main>
<footer class="footer">
  <p><a href="#" class="footer-link">Privacy Policy</a> | <a href="#" class="footer-link">Terms of Service</a></p>
  <p>Contact: info@mindlink.com | Follow us on social media</p>
</footer>
<script src="../Js_files/login_js.js"></script>
</body>
</html>
