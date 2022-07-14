const searchBtn = document.getElementById( 'search-btn');
const mealList = document.getElementById('meal');
const mealDetailsContent = document.querySelector('.meal-details-content');
const recipeCloseBtn = document.getElementById('recipe-close-btn');


// event listeners

searchBtn.addEventListener('click', getMealList);


// get meal list that matches with ingredients
function searcInputList(){
    let searchInputTxt = document.getElementById('search-input').Value.trim();
    fetch(`www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast`)
    .then(response => response.json())
    .then(data => {
        let html = "";
        if(data.meals){
            data.meals.forEach(meal => {
                html += `


                <div class="meal-item" data-id = "${meal.idMeal}">
                <div class="meal-img">
                    <img src="${meal.strMealThumb}" alt = "food">
                </div>
                <div class="meal-name">
                    <h3>${meal.strMeal}</h3>
                    <a href="#" class=" recipe-btn">Get Recipe</a>
             </div>
            </div> `;



            });
        }


mealList.innerHTML = html;

    })

}