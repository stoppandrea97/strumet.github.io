//console.log ("Hello World");

document.addEventListener('DOMContentLoaded', () => {

  function getAll(selector) {
    return Array.prototype.slice.call(document.querySelectorAll(selector), 0);
  }

  // Get all "navbar-burger" elements
  const $navbarBurgers = getAll('.navbar-burger');

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
      });
    });
  }

  // Get all "navbar-item" items
  const $navItems = getAll('.navbar-item');
  // Check if there are any of them
  if ($navItems.length > 0) {

    // Add a click event on each of them
    $navItems.forEach( el => {
      el.addEventListener('click', () => {
        // Find "is-active" elements
        var activeEl = getAll('.is-active');
        activeEl.forEach( act => {
          // Toggle the "is-active"
          act.classList.toggle('is-active');
        });
      });
    });
  }


  // Image modal
  
  const $projectImgs = getAll('.project-img');
  if ($projectImgs.length > 0) {
    $projectImgs.forEach( el => {
      el.addEventListener('click', () => {
        const imageSrc = el.src;
        var $modalRoot = document.getElementById('m-root');
        var $modalImg = document.getElementById('m-img');
        
        openModal($modalRoot, $modalImg, imageSrc);
      });
    });
  }

  const $closeModal = getAll('.modal-close');
  if ($closeModal.length > 0) {
    $closeModal.forEach( el => {
      el.addEventListener('click', () => {
        var $modalRoot = document.getElementById('m-root');
        
        closeModal($modalRoot)
      });
    });
  }

  function openModal (root, img, imageSrc) {
    img.src = imageSrc;
    root.classList.toggle('is-active');
  }

  function closeModal (root) {
    root.classList.toggle('is-active');
  }



});
