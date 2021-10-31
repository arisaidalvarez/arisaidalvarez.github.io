const main = document.querySelector("#main");
const articles = document.querySelectorAll(".article");

main.style.height = `${screen.availHeight * articles.length}px`;

for(let i=0; i < articles.length; i++) {
    articles[i].style.height = `${screen.availHeight}px`;
}

console.log(`number of articles: ${articles.length}`)
console.log(`main height: ${screen.availHeight * articles.length}`);
