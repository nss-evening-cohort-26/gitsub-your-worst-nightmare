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
        <a href="#" class="card-link">🟡 ${repo.language}</a>
        <a href="#" class="card-link"><i class="fa-regular fa-star"></i> ${repo.stars}</a>
        <a href="#" class="card-link"><i class="fa-solid fa-code-fork"></i> ${repo.forks}</a>
      </div>
    </div>`;
    renderToDom("#pinned-repos", domstring);
  })
};

pinnedReposOnDom(pinnedRepos);

const form = document.querySelector("form");

const createRepo = (e) => {
  e.preventDefault();

  const newRepo = {
    id: pinnedRepos.length + 1,
    name: document.querySelector("#name").value,
    description: document.querySelector("#description").value,
    language: document.querySelector("#language").value,
    stars: 4,
    forks: 20
  }

  pinnedRepos.push(newRepo);
  pinnedReposOnDom(pinnedRepos);
  form.reset();
}

form.addEventListener("submit", createRepo);
