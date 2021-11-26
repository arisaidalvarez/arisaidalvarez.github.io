const main = document.querySelector("#main");

main.style.height = `${screen.availHeight}px`;

console.log(`number of articles: ${articles.length}`)
console.log(`main height: ${screen.availHeight * articles.length}`);