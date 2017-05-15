
/* The bio object */

var bio = {
  "name": "Ronak Tanna",
  "role": "Fullstack Developer",
  "contactInfo": {
    "mobile": "+919677114930",
    "email": "ronak.rktanna@gmail.com",
    "github": "ronaktanna",
    "facebook": "@ronaktannaLP",
    "location": "Chennai"
  },
  "welcomeMessage": "You are the consequence of your own actions.",
  "skills": ["C", "C++", "Java", "Python", "ReactJS", "NodeJS", "SpringToolSuite", "SQL", "NoSQL"],
  "bioPic": "images/bw.jpg"
};

bio.display = function() {
  var formattedName = HTMLheaderName.replace("%data%", "Ronak Tanna");
  var formattedRole = HTMLheaderRole.replace("%data%", "Fullstack Developer");

  $("#header").prepend(formattedRole);
  $("#header").prepend(formattedName);

  var formattedMobile = HTMLmobile.replace("%data%",bio.contactInfo.mobile);
  var formattedEmail = HTMLemail.replace("%data%",bio.contactInfo.email);
  var formattedGithub = HTMLgithub.replace("%data%",bio.contactInfo.github);
  var formattedFacebook = HTMLfacebook.replace("%data%",bio.contactInfo.facebook);
  var formattedLocation = HTMLlocation.replace("%data%",bio.contactInfo.location);

  var formattedContactInfo = formattedMobile + formattedEmail + formattedGithub + formattedFacebook + formattedLocation;
  $("#topContacts").append(formattedContactInfo);
  $("#footerContacts").append(formattedContactInfo);

  var formattedBioPic = HTMLbioPic.replace("%data%",bio.bioPic);
  var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
  $("#header").append(formattedBioPic);
  $("#header").append(formattedWelcomeMessage);

  $("#header").append(HTMLskillsStart);

  bio.skills.forEach(function(skill){
    var formattedSkill = HTMLskills.replace("%data%", skill)
    $("#skills").append(formattedSkill);
  });
};

/* The education object */

var education = {
  "schools" : [
    {
      "name": "SSN College of Engineering",
      "degree": "B.Tech, Information Technology",
      "dates": "June 2013 - May 2017",
      "location": "Chennai",
      "majors": ["CS"]
    },
    {
      "name": "St. Thomas Matriculation Higher Secondary School",
      "degree": "Schooling",
      "dates": "June 1999 - March 2013",
      "location": "Chennai",
      "majors": ["CS"]
    }
  ],
  "onlineCourses": [
    {
      "title": "JavaScript Basics",
      "school": "Udacity",
      "dates": "2017",
      "url": "https://www.udacity.com/course/ud804"
    }
  ]
};

education.display = function() {
  $("#education").append(HTMLschoolStart);

  education.schools.forEach(function(school){
    var formattedSchoolName = HTMLschoolName.replace("%data%", school.name);
    var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
    var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);
    var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);

    var majorsArray = [];
    school.majors.forEach(function(major){
      var formattedMajor = HTMLschoolMajor.replace("%data%", major);
      majorsArray.push(formattedMajor);
    });

    var formattedSchool = formattedSchoolName + formattedSchoolDegree + formattedSchoolDates + formattedSchoolLocation + majorsArray;

    $(".education-entry:last").append(formattedSchool);
  });

  $("#education").append(HTMLonlineClasses);

  education.onlineCourses.forEach(function(course){
    $("#education").append(HTMLschoolStart);
    var formattedTitle = HTMLonlineTitle.replace("%data%", course.title);
    var formattedSchool = HTMLonlineSchool.replace("%data%", course.school);
    var formattedDates = HTMLonlineDates.replace("%data%", course.dates);
    var formattedUrl = HTMLonlineURL.replace("%data%", course.url);

    var formattedCourse = formattedTitle + formattedSchool + formattedDates + formattedUrl;
    $(".education-entry:last").append(formattedCourse);
  });
};

/* The work object */

var work = {
  "jobs":[
    {
      "employer": "Mr. Cooper",
      "title": "Graduate Intern",
      "location": "Chennai",
      "dates": "December 2016 - June 2017",
      "description": "Worked on a fullstack architecture with ReactJS, HTML, CSS as the front end tool. NodeJS as the server side library, Springboot microservices at the backend coupled with PostgreSQL for the database."
    },
    {
      "employer": "Mr. Cooper",
      "title": "Fullstack Developer",
      "location": "Chennai",
      "dates": "July 2017 - Future",
      "description": "Worked on a fullstack architecture with ReactJS, HTML, CSS as the front end tool. NodeJS as the server side library, Springboot microservices at the backend coupled with PostgreSQL for the database."
    }
  ]
};

work.display = function() {
  work.jobs.forEach(function(job){
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
    var formattedDates = HTMLworkDates.replace("%data%", job.dates);
    var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
    var formattedDescription = HTMLworkDescription.replace("%data%", job.description);

    var formattedJob = formattedEmployer + formattedTitle + formattedDates + formattedLocation + formattedDescription;

    $(".work-entry:last").append(formattedJob);
  });
};

/* The projects object */

var projects = {
  "projects":[
    {
      "title":"AppDemo",
      "dates":"June 2013 - July 2014",
      "description": "A basic android app demonstrating the standard features available over the Android SDK.",
      "images": [

      ]
    },
    {
      "title":"NoSQL oriented Notepad",
      "dates":"March 2016 - June 2016",
      "description":"A sample notepad app focusing on usage of cloud services and noSQL databases like dynamoDB over the AWS cloud.",
      "images": [

      ]
    },
    {
      "title":"Analytics as a Service",
      "dates":"December 2016 - March 2017",
      "description":"Final year project that integrates analytics with web services. Uses AngularJS, NodeJS, Python, Pandas, Pickle, MongoDB and Django Server.",
      "images": [

      ]
    }
  ]
};

projects.display = function() {
  projects.projects.forEach(function(project){
    $("#projects").append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
    var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
    var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);

    var formattedProject = formattedTitle + formattedDates + formattedDescription;

    $(".project-entry:last").append(formattedProject);
  });
};

/* Display invokation code for the different resume sections */

bio.display();
education.display();
work.display();
projects.display();

$("#mapDiv").append(googleMap);
