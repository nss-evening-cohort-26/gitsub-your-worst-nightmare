const projects = [
  {
    id: 1,
    projectName: "Task Manager",
    projectDescription: "This is a web app built using React.js and Node.js.",
  },
  {
    id: 2,
    projectName: "Weather App",
    projectDescription: "A Python project utilizing API calls to provide real-time weather information, featuring a user-friendly command-line interface for easy access to current weather conditions and forecasts.",
  },
  {
    id: 3,
    projectName: "To Do List",
    projectDescription: "A web-based task management application built with React and Node.js, allowing users to create, update, and delete tasks while providing a clean and responsive user interface.",
  },
  {
    id: 4,
    projectName: "Image Classifier",
    projectDescription: "A machine learning project using TensorFlow and Python to develop an image classification model, capable of accurately identifying objects within images based on a pre-trained neural network.",
  },
  {
    id: 5,
    projectName: "Expense Tracker",
    projectDescription: "A mobile app developed with Flutter and Firebase, designed to help users track their expenses, set budgets, and visualize spending patterns through interactive charts and graphs.",
  },
];

const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
};
// TODO: ts queryselector projects-n
// TODO: ts eventlistener that listens for projects-n
// TODO: ts renderToDom to inject projectPage
// for Projects Page //

const switchProjectPage = document.querySelector("#projects-n")
// switchProjectPage.addEventListener("click", projectsListOnDom)

const projectsListOnDom = (projects) => {
  let domString = "";
  projects.map((project) => {
    domString += `<div class="container text-center">
    <div class="row row-cols-xs-1 row-cols-md-2 row-cols-md-3">
      <div class="col">${project.projectName}</div>
      <div class="col">${project.projectDescription}</div>
      <div class="col">...</div>
    </div>
  </div>`;
  });
};
projectsListOnDom(projects);

switchProjectPage.addEventListener("click", (e) => {
  if (e.target.id === "projects-n") {
    renderToDom("#projectsPage", domString)
  }
});
