

















const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
};

const footerBtns = document.querySelector("#footerBtns");

const footerBtnsGroup = () => {
  let domString = `<a href="#" id="terms" class="btn btn-primary">Terms</a>
  <a href="#" id="privacy" class="btn btn-primary">Privacy</a>
  <a href="#" id="security" class="btn btn-primary">Security</a>
  <a href="#" id="status" class="btn btn-primary">Status</a>
  <a href="#" id="help" class="btn btn-primary">Help</a>
  <a href="#" id="contactGithub" class="btn btn-primary">Contact GitHub</a>
  <a href="#" id="pricing" class="btn btn-primary">Pricing</a>
  <a href="#" id="API" class="btn btn-primary">API</a>
  <a href="#" id="training" class="btn btn-primary">Training</a>
  <a href="#" id="blog" class="btn btn-primary">Blog</a>
  <a href="#" id="about" class="btn btn-primary">About</a>`;
  renderToDom("#footerBtns", domString);
};
footerBtnsGroup()
