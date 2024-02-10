const pinnedRepos = [
  {
    id: 1,
    name: "gatsby-workshop",
    description: "This workshop covers the fundamentals of developing fast, accessible sites with Gatsby, a React framework, and dive deep into the building blocks you’ll need to build your own custom Gatsby sites.",
    language: "JavaScript",
    stars: 38,
    forks: 8
  },
  {
    id: 2,
    name: "React-Ladies",
    description: "We're a group of women and non-binary ReactJS enthusiasts in New York City (and beyond).",
    language: "JavaScript",
    stars: 99,
    forks: 26
  },
  {
    id: 3,
    name: "getting-started-with-open-source",
    description: "This is a presentation on Getting Started With Open Source.",
    language: "JavaScript",
    stars: 6,
    forks: 3
  },
  {
    id: 4,
    name: " httriri",
    description: "HTTRiRi - HTTP Status Codes as Portrayed by Rihanna GIFs ✨💄",
    language: "TypeScript",
    stars: 37,
    forks: 22
  },
  {
    id: 5,
    name: "Rebuild-Black-Business/RBB-Website",
    description: "Website to help connect black-owned businesses with consumers and resources.",
    language: "JavaScript",
    stars: 119,
    forks: 75
  },
  {
    id: 6,
    name: "affirmation_generator",
    description: "A random affirmation generator written with ReactJS :-)",
    language: "JavaScript",
    stars: 52,
    forks: 32
  }
]

const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
};

const pinnedReposOnDom = (pinnedRepos) => {
  let domstring = ``;
  pinnedRepos.forEach(repo => {
    domstring +=
    `<div class="card repo-cards">
      <div class="card-body">
        <h5 class="card-title">${repo.name}</h5>
        <p class="card-text">${repo.description}</p>
        <a href="#" class="card-link">${repo.language}</a>
        <a href="#" class="card-link">${repo.stars}</a>
        <a href="#" class="card-link">${repo.forks}</a>
      </div>
    </div>`;
    renderToDom("#pinned-repos", domstring);
  })
};

pinnedReposOnDom(pinnedRepos);

const rForm = () => {
  let domstring =
  `<div class="card form-card">
    <form>
      <div class="mb-3">
        <h5 class="card-title">Pin a new repository</h5>
        <label for="repoNameInput" class="form-label">Repository name *</label>
        <input type="Name" class="form-control" id="repoNameInput" aria-describedby="">
        <p id="repoNameHelp" class="form-text">Great repository names are short and memorable!</p>
      </div>
      <div class="mb-3">
        <label for="repoDiscription" class="form-label">Description (optional)</label>
        <input type="text" class="form-control" id="repoDescriptionInput">
      </div>
      <button type="button" class="btn btn-success">Create repository</button>
    </form>
  </div>`;
  renderToDom('#repoForm', domstring);
};

rForm();
