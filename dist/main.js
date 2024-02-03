

  const menuBtn = document.querySelector('.menu-icon');
  const menuDropdown = document.querySelector('.menu-dropdown');

  menuBtn.addEventListener('click', function () {
    menuDropdown.classList.toggle('hidden');
  });

  // Close menu dropdown on click outside
  document.addEventListener('click', function(event) {
    const target = event.target;
    if (!target.closest('.menu-dropdown') && !target.closest('.menu-icon')) {
      menuDropdown.classList.add('hidden');
    }
  });

  // Hide menu dropdown on desktop
  window.addEventListener('resize', function () {
    if (window.innerWidth > 768) {
      menuDropdown.classList.add('hidden');
    }
