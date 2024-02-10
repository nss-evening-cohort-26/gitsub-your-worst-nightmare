const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
};


const rForm =() => {
  domstring = `
  <form>
    <div class="mb-3">
      <label for="repoNameInput" class="form-label">Repository Name</label>
      <input type="Name" class="form-control" id="repoNameInput" aria-describedby="">
      <div id="repoNameHelp" class="form-text">Great repository names are short and memorable!</div>
    </div>
    <div class="mb-3">
      <label for="repoDiscription" class="form-label">Description (optional)</label>
      <input type="text" class="form-control" id="repoDiscription">
    </div>
    <button type="button" class="btn btn-success">Create repository</button>
  </form>`;
renderToDom('#repoForm', domstring)
};
rForm();
