<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
         pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="s" uri="/struts-tags" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
    <title>Add New Event</title>
    <link rel="stylesheet" href="css/combined_styles.css">
</head>
<body>
<header>
    <div class="logo">
        <img src="img/Mental_Health_Support_Logo.png" alt="Mental Health Support Logo">
    </div>
    <nav>
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="html_files/about_page.html">About Us</a></li>
            <li><a href="html_files/psyc_list.html">Therapists List</a></li>
            <li><a href="html_files/tests_page.html">Psychometer</a></li>
            <li><a href="html_files/matching.html">Find A Therapist</a></li>
            <li><a href="html_files/resources_page.html">Blog</a></li>
        </ul>
    </nav>
    <div class="auth-buttons">
        <button class="auth-button"><a href="html_files/login.html">Login</a></button>
        <button id="signupButton" class="auth-button"><a href="html_files/sign_up.html">Sign Up</a></button>
    </div>
    <div class="search-bar">
        <input type="text" placeholder="Search...">
        <button type="button">Search</button>
    </div>
</header>
<div>
    <h2>Depression Test</h2>
    <s:form action="testDepression" class="formTable">
        <s:textfield name="username" label="Please write your Username" class="formTextField"/>
        <s:select name="answer1" label="How often do you feel little interest or pleasure in doing things?" class="formSelect" list="{'Not at all', 'Several days', 'More than half the days','Nearly every day' }"/>
        <s:select name="answer2" label="How often do you feel down, depressed, or hopeless?" class="formSelect" list="{'Not at all', 'Several days', 'More than half the days','Nearly every day' }"/>
        <s:select name="answer3" label="How often do you have trouble falling or staying asleep, or sleeping too much?" class="formSelect" list="{'Not at all', 'Several days', 'More than half the days','Nearly every day' }"/>
        <s:select name="answer4" label="How often do you feel tired or have little energy?" class="formSelect" list="{'Not at all', 'Several days', 'More than half the days','Nearly every day' }"/>
        <s:select name="answer5" label="How often do you have poor appetite or overeating?" class="formSelect" list="{'Not at all', 'Several days', 'More than half the days','Nearly every day' }"/>
        <s:select name="answer6" label="How often do you feel bad about yourself — or that you are a failure or have let yourself or your family down?" class="formSelect" list="{'Not at all', 'Several days', 'More than half the days','Nearly every day' }"/>
        <s:select name="answer7" label="How often do you have trouble concentrating on things, such as reading the newspaper or watching television?" class="formSelect" list="{'Not at all', 'Several days', 'More than half the days','Nearly every day' }"/>
        <s:select name="answer8" label="How often do you move or speak so slowly that other people could have noticed? Or the opposite — being so fidgety or restless that you have been moving a lot more than usual?" class="formSelect" list="{'Not at all', 'Several days', 'More than half the days','Nearly every day' }"/>
        <s:select name="answer9" label="How often do you have thoughts that you would be better off dead, or thoughts of hurting yourself in some way?" class="formSelect" list="{'Not at all', 'Several days', 'More than half the days','Nearly every day' }"/>
        <s:select name="answer10" label="If you’ve had any days with issues above, how difficult have these problems made it for you at work, home, school, or with other people?" class="formSelect" list="{'Not at all', 'Several days', 'More than half the days','Nearly every day' }"/>
        <s:submit value="Submit Form" class="actionBtn"/>
    </s:form>
</div>

</body>
</html>