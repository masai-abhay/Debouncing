let timeout = null;

document.getElementById("search").addEventListener("input", function(){

 let timeout = setTimeout(function(){

    serchrecipe(document.getElementById("search").value)

 },2000)
});


async function serchrecipe (query){

  try {

   let res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);

   let data = await res.json();

   showrecipes(data.meals);
   
   } catch(error){
    console.log(error);
   }

}

function showrecipes(recipes){

    let recipelist = document.getElementById("cont");

    console.log(recipes)

    recipelist.innerHTML = "";

    if(recipes){

        recipes.forEach(recipes => {


            recipelist.innerHTML += `
            
            <div>
            <h3>${recipes.strMeal}</h3>
            <img src=${recipes.strMealThumb}>

            </div>
            
            `
            
        });

    }

}
