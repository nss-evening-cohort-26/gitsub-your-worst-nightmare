const projects = [
  {
    id: 1,
    projectName: "Task Manager",
    projectDescription: "This is a web app built using React.js and Node.js.",
  },
  {
    id: 2,
    projectName: "Weather App",
    projectDescription:
      "A Python project utilizing API calls to provide real-time weather information.",
  },
  {
    id: 3,
    projectName: "To Do List",
    projectDescription:
      "A web-based task management application built with React and Node.js.",
  },
  {
    id: 4,
    projectName: "Image Classifier",
    projectDescription:
      "A project using TensorFlow and Python to develop an image classification model.",
  },
  {
    id: 5,
    projectName: "Expense Tracker",
    projectDescription:
      "A mobile app developed with Flutter and Firebase.",
  },
];

const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
};

// for Projects Page //
const switchProjectPage = document.querySelector("#projects-n");

// this is for the project list
const projectsListOnDom = (projects) => {
  let domString = "";
  projects.map((project) => {
    domString += `<div class="container text-center">
    <div class="row row-cols-sm-3 row-cols-sm-3 row-cols-sm-3">
      <div class="col">${project.projectName}</div>
      <div class="col">${project.projectDescription}</div>
      <div class="col">...</div>
    </div>
  </div>`;
  });
  renderToDom("#projectsPage", domString)
};
projectsListOnDom(projects);


const newProjectForm = document.querySelector("#projectFormSubmit");

const createProject = (e) => {
  e.preventDefault();

  const newProject = {
    id: projects.length + 1,
    projectName: document.querySelector("#projectNameForm").value,
    projectDescription: document.querySelector("#formDescription").value,
  };

  projects.push(newProject);
  projectsListOnDom(projects);
  newProjectForm.reset();
};

newProjectForm.addEventListener("submit", createProject);



// switchProjectPage.addEventListener("click", (e) => {
//   console.log("clicked")
//   if (e.target.id === "projects-n") {
//     renderToDom("#projectsPage", domString);
//   }
// });
