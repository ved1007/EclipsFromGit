$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/vedant.jagani/Desktop/AutomationTest/RunWithJenins1/src/main/java/Features/Test.feature");
formatter.feature({
  "line": 1,
  "name": "Google Page Test",
  "description": "",
  "id": "google-page-test",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Google page Search",
  "description": "",
  "id": "google-page-test;google-page-search",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "Open Web Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Populate the UserName field",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Populate the Password field",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Click on the Login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Close the Web Page",
  "keyword": "Then "
});
formatter.match({
  "location": "GooglePageTest.open_Web_Page()"
});
formatter.result({
  "duration": 3766561249,
  "status": "passed"
});
formatter.match({
  "location": "GooglePageTest.populate_the_UserName_field()"
});
formatter.result({
  "duration": 21231003,
  "status": "passed"
});
formatter.match({
  "location": "GooglePageTest.populate_the_Password_field()"
});
formatter.result({
  "duration": 10537644,
  "status": "passed"
});
formatter.match({
  "location": "GooglePageTest.click_on_the_Login_button()"
});
formatter.result({
  "duration": 5209021454,
  "status": "passed"
});
formatter.match({
  "location": "GooglePageTest.close_the_Web_Page()"
});
formatter.result({
  "duration": 96880887,
  "status": "passed"
});
});