<%@ taglib uri="http://struts.apache.org/tags-html" prefix="html" %>
<html>
<head>
    <title>Insert Result</title>
</head>
<body>
<html:form action="insertResult">
    <table>
        <tr>
            <td>User ID:</td>
            <td><html:text property="userId"/></td>
        </tr>
        <tr>
            <td>Test ID:</td>
            <td><html:text property="testId"/></td>
        </tr>
        <tr>
            <td>Result:</td>
            <td><html:text property="result"/></td>
        </tr>
        <tr>
            <td colspan="2"><html:submit value="Insert Result"/></td>
        </tr>
    </table>
</html:form>
</body>
</html>
