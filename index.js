const info = document.querySelectorAll('.info');
const close = document.querySelectorAll('.info-close');
const show = document.querySelectorAll('.show-hidden');
const overlay = document.querySelector('.overlay');
const container = document.querySelector('.projects_container');
const listOfLinks = document.querySelectorAll("[href^='#sectionLink']");

//navigation scrolling feature
document.addEventListener('DOMContentLoaded', () => {
  listOfLinks.forEach((link) => {
    link.addEventListener('click', () => {
      let sectionNumber = link.href.split('#sectionLink')[1];
      let sectionTop = document.querySelector(`.section${sectionNumber}`)
        .offsetTop;
      window.scroll({
        behavior: 'smooth',
        left: 0,
        top: sectionTop,
      });
    });
  });
});

///show and hide info about projects + add overlay on the container
const hideInfo = (e) => {
  const toBeHidden = e.target.parentNode;
  toBeHidden.classList.add('hidden');
  container.classList.remove('overlay');
};
const showInfo = (e) => {
  const targetId = e.target.parentNode.getAttribute('id');
  console.log(targetId);
  info.forEach((el) => el.id === targetId && el.classList.remove('hidden'));
  container.classList.add('overlay');
  window.scroll({
    behavior: 'smooth',
    left: 0,
    top: container.offsetTop,
  });
};

close.forEach((item) =>
  item.addEventListener('click', item.addEventListener('click', hideInfo))
);
show.forEach((item) => item.addEventListener('click', showInfo));
