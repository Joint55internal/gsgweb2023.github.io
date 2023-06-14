const foldableButton = document.querySelector('.foldable-button');
const foldableContent = document.querySelector('.foldable-content');

foldableButton.addEventListener('click', function() {
  foldableContent.classList.toggle('open');
});
