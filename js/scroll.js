/// ^ Балакучі події => scroll, input
//^ на кожне натискання може відбуватись запит на сервер

const randomColor = () =>
  '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase();

const paintingSectionsInRandomColor = () => {
  document.querySelectorAll('.section').forEach(section => {
    section.style.backgroundColor = randomColor();
  });
};

paintingSectionsInRandomColor();
