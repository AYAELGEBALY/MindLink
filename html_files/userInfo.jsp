<%@ taglib uri="/struts-tags" prefix="s" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Information</title>
    <link rel="stylesheet" href="../css/combined_styles.css">
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #e0f7fa;
            color: #333;
        }
        header {
            background-color: #4db6ac;
            color: #fff;
            padding: 10px 0;
            position: relative;
        }
        .logo img {
            max-width: 150px;
            margin-left: 20px;
        }
        nav ul {
            list-style: none;
            padding: 0;
            margin: 0;
            display: flex;
            justify-content: center;
        }
        nav ul li {
            margin: 0 15px;
        }
        nav ul li a {
            color: #fff;
            text-decoration: none;
            font-weight: bold;
        }
        .auth-buttons {
            position: absolute;
            right: 20px;
            top: 50%;
            transform: translateY(-50%);
            display: flex;
            align-items: center;
        }
        .auth-button {
            background-color: #0288d1;
            border: none;
            color: #fff;
            padding: 10px 20px;
            margin-left: 10px;
            cursor: pointer;
            border-radius: 5px;
        }
        .auth-button a {
            color: #fff;
            text-decoration: none;
        }
        .search-bar {
            margin-top: 10px;
            text-align: center;
        }
        .search-bar input {
            padding: 10px;
            width: 200px;
            border: 1px solid #ddd;
            border-radius: 5px;
        }
        .search-bar button {
            padding: 10px 15px;
            border: none;
            background-color: #0288d1;
            color: #fff;
            cursor: pointer;
            border-radius: 5px;
        }
        main {
            padding: 20px;
            text-align: center;
        }
        .user-info-container {
            background-color: #fff;
            padding: 20px;
            margin: 20px auto;
            width: 50%;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .user-info-container h2 {
            margin-bottom: 20px;
            color: #0288d1;
        }
        .user-info-container p {
            text-align: left;
            font-size: 18px;
            margin: 10px 0;
        }
        footer {
            background-color: #4db6ac;
            color: #fff;
            text-align: center;
            padding: 10px 0;
            position: fixed;
            width: 100%;
            bottom: 0;
        }
        .footer-link {
            color: #0288d1;
            text-decoration: none;
        }
    </style>
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
        <button id="logout" class="auth-button"><a href="./log_in.jsp">Log out</a></button>
    </div>
    <div class="search-bar">
        <input type="text" placeholder="Search...">
        <button type="button">Search</button>
    </div>
</header>
<main>
    <div class="user-info-container">
        <h2>User Information</h2>
        <s:if test="#session.userInfo != null">
            <p>First Name: <s:property value="#session.userInfo.firstName"/></p>
            <p>Last Name: <s:property value="#session.userInfo.lastName"/></p>
            <p>Age: <s:property value="#session.userInfo.age"/></p>
            <p>Gender: <s:property value="#session.userInfo.gender"/></p>
            <p>Email: <s:property value="#session.userInfo.email"/></p>
            <p>Emergency Contact Name: <s:property value="#session.userInfo.emergencyContactName"/></p>
            <p>Emergency Contact Phone: <s:property value="#session.userInfo.emergencyContactPhone"/></p>
            <p>Relationship with Emergency Contact: <s:property value="#session.userInfo.relationshipWithEmergencyContact"/></p>
        </s:if>
        <s:else>
            <p>No user information available.</p>
        </s:else>
    </div>
</main>
<footer class="footer">
    <p><a href="#" class="footer-link">Privacy Policy</a> | <a href="#" class="footer-link">Terms of Service</a></p>
    <p>Contact: info@mindlink.com | Follow us on social media</p>
</footer>
</body>
</html>
