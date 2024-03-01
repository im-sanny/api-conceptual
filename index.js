const loadCategory = async () => {
  const response = await fetch("https://openapi.programming-hero.com/api/news/categories");
  const data = await response.json();
  const categoryContainer = document.getElementById("category-bar-container");
  data.data.news_category.forEach((item) => {
    const div = document.createElement("div");
    div.innerHTML = `
        <button class="btn btn-sm">${item.category_name}</button>
        `;
    categoryContainer.appendChild(div)
  });
};


const loadNews = async () => {
    const response = await fetch('https://openapi.programming-hero.com/api/news/category/01');
    const data = await response.json();
    data.data.forEach(item => {
        console.log(item)
    });

}
loadNews()
loadCategory();
