const sections = document.querySelectorAll('section');
const bubble = document.querySelector('.bubble');
const gradients = [
  "linear-gradient(to right top, #2193b0, #6dd5ed)",
  "linear-gradient(to right top, #C6FFDD, #FBD786, #f7797d)",
  "linear-gradient(to right top, #12c2e9, #c471ed, #f7797d)"
];

const options = {
  // root: null
  // rootMargin: "0px 0px 0px 0px"
  threshold: 0.7
}

let observer = new IntersectionObserver(navCheck, options);

function navCheck(entries) {
  entries.forEach(entry => {
    // console.log(entry);
    const className = entry.target.className;
    // console.log(className);
    const activeAnchor = document.querySelector(`[data-page=${className}]`);
    const gradientIndex = entry.target.getAttribute('data-index');
    // coords : 座標
    const coords = activeAnchor.getBoundingClientRect();
    // 兼容所有瀏覽器寫法
    const directions = {
      bottom: coords.bottom,
      top: coords.top,
      right: coords.right,
      left: coords.left,
      height: coords.height || bottom - top,
      width: coords.width || right - left
    };
    if(entry.isIntersecting) {
      bubble.style.setProperty('left', `${directions.left}px`);
      bubble.style.setProperty('top', `${directions.top}px`);
      bubble.style.setProperty('width', `${directions.width}px`);
      bubble.style.setProperty('height', `${directions.height}px`);
      bubble.style.background = gradients[gradientIndex];
    }
  })
}

sections.forEach(section => {
  observer.observe(section);
})