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

const packages = [
  {
    id: 1,
    name: "Docker",
    description: "A software platform used for building applications based on containers — small and lightweight execution environments."
  },
  {
    id: 2,
    name: "Apache Maven",
    description: "A default package manager used for the Java programming language and the Java runtime environment."
  },
  {
    id: 3,
    name: "NuGet",
    description: "A free and open source package manager used for the Microsoft development platforms including .NET."
  },
  {
    id: 4,
    name: "RubyGems",
    description: "A standard format for distributing Ruby programs and libraries used for the Ruby programming language."
  },
  {
    id: 5,
    name: "npm",
    description: "A package manager for JavaScript, included with Node.js. npm makes it easy for developers to share and reuse code."
  },
  {
    id: 6,
    name: "Containers",
    description: "A single place for your team to manage Docker images and decide who can see and access your images."
  }
]

const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
};

const currentPage = window.location.pathname;

// OVERVIEW //////////////////////////////////////

if (currentPage === "/index.html") {

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
  
  const reposForm = document.querySelector("form");
  
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
    reposForm.reset();
  }
  
  reposForm.addEventListener("submit", createRepo);
}

// OVERVIEW //////////////////////////////////////
// PACKAGES //////////////////////////////////////

if (currentPage === "/packages.html") {

  const packagesOnDom = (packages) => {
    let domstring = ``;
    packages.forEach(package => {
      domstring +=
      `<div class="card package-cards">
        <div class="card-body">
          <h5 class="card-title">${package.name}</h5>
          <p class="card-text">${package.description}</p>
          <a href="#" class="btn btn-primary">Learn More</a>
        </div>
      </div>`;
      renderToDom("#packages", domstring);
    })
  };
  
  packagesOnDom(packages);
  
  const packagesForm = document.querySelector("form");
  
  const createPackage = (e) => {
    e.preventDefault();
  
    const newPackage = {
      id: packages.length + 1,
      name: document.querySelector("#name").value,
      description: document.querySelector("#description").value,
    }
  
    packages.push(newPackage);
    packagesOnDom(packages);
    packagesForm.reset();
  }
  
  packagesForm.addEventListener("submit", createPackage);
}

// PACKAGES //////////////////////////////////////
