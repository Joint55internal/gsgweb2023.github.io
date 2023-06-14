document.addEventListener('DOMContentLoaded', function() {
  const foldableButtons = document.querySelectorAll('.foldable-button');
  const foldableContents = document.querySelectorAll('.foldable-content');

  for (let i = 0; i < foldableButtons.length; i++) {
    foldableButtons[i].addEventListener('click', function() {
      foldableContents[i].classList.toggle('open');
    });
  }
});
