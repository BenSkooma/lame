document.addEventListener('click', e => {

  const isMMParent = e.target.matches("[data-mm-parent-link]");

  if (!isMMParent && e.target.closest('[data-mm-parent]') != null) return;

  let currentDropdown;

  if (isMMParent) {
    currentDropdown = e.target.closest('[data-mm-parent]');
    currentDropdown.classList.toggle('--open');
  }

  document.querySelectorAll("[data-mm-parent].--open").forEach(dropdown => {
    if(dropdown === currentDropdown) return;
    dropdown.classList.remove('--open');
  });

});

// Prevent Redirecting on mm-parent links
document.querySelectorAll("[data-mm-parent-link]").forEach(link => {
  link.addEventListener("click", e => { 
    e.preventDefault();
  });
});