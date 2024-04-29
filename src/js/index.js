// ready state







$(function(){







$('.geer-icon').click(function () {
    let sidewidth = $('.side1').innerWidth();

    if ($('.side-nav').css('left') == '0px') {
        // console.log(sidewidth);
        $('.side-nav').animate({ left: `-${sidewidth}` }, 400,function(){
            $('.nav-link').animate({ translateY: '500px' }, 1000);
        });
        document.querySelector('.geer-icon').classList.replace('fa-x','fa-gear')
       

    } else {
        $('.side-nav').animate({ left: '0px' }, 200)
        document.querySelector('.geer-icon').classList.replace('fa-gear','fa-x')


    }
    $('.groub-link a').click(function () {
        $('.side-nav').animate({ left: `-${sidewidth}` }, 400);
        document.querySelector('.geer-icon').classList.replace('fa-x','fa-gear')
        


    })


})
// show item
var search_anchor = document.querySelector('.groub-link :nth-child(1)');
var search_form = document.querySelector('.search-form')

var contact_anchor = document.querySelector('.groub-link :nth-child(5)');
var contact_form = document.querySelector('.contact-form')

var category_anchor = document.querySelector('.groub-link :nth-child(2)');
var category_form = document.querySelector('.category-form');
var area_anchor = document.querySelector('.groub-link :nth-child(3)');
var area_form = document.querySelector('.area-form');
var home_content = document.querySelector('.home-content')
var ingrediant_form = document.querySelector('.ingrediant-form')
var ingrediant_anchor = document.querySelector('.groub-link :nth-child(4)')
var sub_btn = document.querySelector('.sub-btn');
var content_item = document.getElementsByClassName('content-item')



// for(var i=0; i<content_item.length; i++){

// }


document.addEventListener('click', function (e) {
    console.log(e.target);

})
// for(var i=0; i<content_item.length; i++){

//     // console.log(content_item[i]);
// }


// var allUserContainer=JSON.parse(localStorage('user'))||[];

var userName = document.getElementById('user_name');
var userEmail = document.getElementById('user_email');
var userAge = document.getElementById('user_age');
var userphNumber = document.getElementById('user_number');
var userPassword = document.getElementById('user_password');
var userPassConf = document.getElementById('user_pass_con');
var serchByName=document.getElementById('searchByName');
var searchByFletter=document.getElementById('searchByFletter');
var main_meal=document.getElementById('main-meal');




// sub_btn.addEventListener('click', function(e){
//     e.preventDefault();

//     var user={
//         user_name:userName.value,
//         user_email:userEmail.value,
//         user_age:userAge.value,
//         user_number:userphNumber.value,
//         user_pass:userPassword.value,
//         user_pass_con:userPassConf.value



//     }
//     allUserContainer.push(user);
//     localStorage.setItem('user',JSON.stringify(allUserContainer));


//     // console.log(user);
//     // console.log("nnnnn");


// })

search_anchor.addEventListener('click', function (e) {
    e.preventDefault();
    search_form.classList.replace('hidden', 'block');
    category_form.classList.replace('block', 'hidden');
    area_form.classList.replace('block', 'hidden');
    home_content.classList.add('hidden');
    ingrediant_form.classList.replace('block', 'hidden');
    contact_form.classList.replace('block', 'hidden');

    






})



contact_anchor.addEventListener('click', function (e) {
    e.preventDefault();
    contact_form.classList.replace('hidden', 'block')
    area_form.classList.replace('block', 'hidden');
    category_form.classList.replace('block', 'hidden');
    home_content.classList.add('hidden');
    ingrediant_form.classList.replace('block', 'hidden');
    search_form.classList.replace('block', 'hidden');
   






})




category_anchor.addEventListener('click', function (e) {
    e.preventDefault();
    category_form.classList.replace('hidden', 'block')
    home_content.classList.add('hidden');
    search_form.classList.replace('block', 'hidden');
    area_form.classList.replace('block', 'hidden')
    ingrediant_form.classList.replace('block', 'hidden');
    contact_form.classList.replace('block', 'hidden');
    




})


area_anchor.addEventListener('click', function (e) {
    e.preventDefault();
    area_form.classList.replace('hidden', 'block')
    home_content.classList.add('hidden')
    category_form.classList.replace('block', 'hidden')
    search_form.classList.replace('block', 'hidden');
    ingrediant_form.classList.replace('block', 'hidden');
    contact_form.classList.replace('block', 'hidden');
   




})


ingrediant_anchor.addEventListener('click', function (e) {
    e.preventDefault();
    ingrediant_form.classList.replace('hidden', 'block');
    search_form.classList.replace('block', 'hidden');

    category_form.classList.replace('block', 'hidden');
    area_form.classList.replace('block', 'hidden');
    home_content.classList.add('hidden');
    contact_form.classList.replace('block', 'hidden');
   





})






// /main meals dispaly

var all_meals = []
async function main_meals() {
    var response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
    var final_meals = await response.json();
    all_meals = final_meals.meals;
    
    // console.log(all_meals.length);
    
    display_meals()

    main_meal.addEventListener('click',function(e){
        var preElementSibling=e.target.previousElementSibling
        var preElementSiblingSrc=preElementSibling.getAttribute('src');
       
        for (var i=0; i < all_meals.length; i++) {
            var cartona=``
            if(preElementSiblingSrc===all_meals[i].strMealThumb){
                
                // console.log(all_meals[i].strMeal);
                document.getElementById('meal-detail').classList.replace('hidden','block');
                if(all_meals[i].strTags!==null){
                    var numtag=all_meals[i].strTags.split(',').map(tag=>`<span class=" text-center mx-2 rounded-xl text-3xl  p-2 h-10 border-red-700 bg-slate-500 text-white">${tag}</span>`).join('');

                    // console.log("not null tages");
                }else{
                    numtag='Not Found'

                }


                var meal_ing_mes=[]
                for (let j = 1; j < 20; j++){
                    var meal_ingradiant=all_meals[i][`strIngredient${j}`]    ;
                    var meal_measure=all_meals[i][`strMeasure${j}`];
                    if(meal_ingradiant&&meal_measure){

                        meal_ing_mes.push(`<span class=" text-center my-5 h-11 mx-3 inline-block rounded-xl text-xl  p-1   bg-slate-500 text-white">${meal_measure} ${meal_ingradiant}</span>`)
                        console.log(meal_ingradiant, meal_measure);            


                    }
                }

                  var ingredientsHtml =meal_ing_mes.length > 0 ? meal_ing_mes.join('') : 'Ingredients not found';

                
                
                

                    // console.log(all_meals[i].idMeal);
                    cartona += `<div  class="detail grid grid-cols-2    container mx-auto bg-slate-600  absolute top-0 bottom-0 left-0 right-0">

       
                    <div class=" p-10 ">
                      <img src="${preElementSiblingSrc}" class="w-auto object-contain block rounded-xl" alt="recipe" />
                      <h3 class="text-white pt-16 ps-12 my-10 text-3xl  ">${all_meals[i].strMeal}</h3>    
                    </div>
                    <div class=" ps-12">
                      <h3 class="text-white pt-16  capitalize text-3xl">intro</h3>    
                      <p class="text-white pt-16  pb-12  text-xl">
                        ${all_meals[i].strInstructions}
                      </p>
                      <p class="text-white py-3 text-3xl">Area : <span class="text-capitalize ">${all_meals[i].strArea}</span> </p>
                      <p class="text-white py-3 text-3xl"> Category : <span>${all_meals[i].strCategory}</span> </p>
                      <p class="text-white py-3 text-3xl">Recipes :</p>
                       <p class=" p13 my-5 text-xl text-white capitalize">${ingredientsHtml}</p> 
                      
                      <p class="text-white pt-16 my-5 text-3xl">tages:</p>
                      <span class="block">${numtag}</span>
                      <div class="my-20">
                      <a href="${all_meals[i].strSource}" class="p-3 bg-blue-500 border-red-500 mx-4 text-white rounded-lg text-decoration-none ">source</a>
                      <a href="${all_meals[i].strYoutube}" class="p-3 bg-blue-500 border-red-500 mx-4 text-white  rounded-lg text-decoration-none">youtube</a>
                    </div>
                      </div>
                  </div>`
            
            
                
                document.getElementById('meal-detail').innerHTML = cartona;
            }
            
        }
        // console.log(preElementSiblingSrc);
        // console.log(preElementSibling);
    
    })  

}


main_meals()


function display_meals() {
    var cartona = ``;
    for (var i = 0; i < 20; i++) {
        cartona += `<div  class="content-item cursor-pointer group bg-blue-400 rounded-xl">
        <img
          src="${all_meals[i].strMealThumb}"
          class="meal-img w-100 block object-contain rounded-xl"
          alt=""
        />
        <div class="over-lay text-left bg-opacity-55  rounded-xl">
          <h3 class="text-white pointer-events-none pt-16 ps-12 text-2xl">${all_meals[i].strMeal}</h3>
        </div>
      </div>`


    }
    document.getElementById('main-meal').innerHTML = cartona;
}






async function searchByName(term) {
    var term=serchByName.value;
    // console.log(typeof term);
    var response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
    var final_meals = await response.json();
    all_meals = final_meals.meals
    // console.log(all_meals.length);

    var cartona=``

    for (var i = 0; i < all_meals.length;i++){
        if(all_meals[i].strMeal.toLowerCase().includes(term.toLowerCase())){

            cartona+=`<div class="content-item onclick="meal_details(e)" mx-auto container cursor-pointer  bg-blue-400 rounded-xl">
            <img
              src="${all_meals[i].strMealThumb}"
              class="meal-img w-100 rounded-xl block object-contain"
              alt=""
            />
            <div class="over-lay text-left bg-opacity-50 rounded-xl">
              <h3 class="text-white pt-16 ps-12 text-2xl">${all_meals[i].strMeal}</h3>
            </div>
          </div>`
        }
    }
    document.getElementById('search-items').innerHTML=cartona


   
    
    

}


async function searchByFirstLetter(term) {
    var term=searchByFletter.value.charAt(0);
    // console.log(typeof term);
    var response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
    var final_meals = await response.json();
    all_meals = final_meals.meals
    // console.log(all_meals.length);
    // var fletter=all_meals[i].strMeal.charAt(0)

    var cartona=``
    for(var i=0; i<all_meals.length; i++){
        var fletter=all_meals[i].strMeal.charAt(0).toLowerCase()
        // console.log(fletter);
        if(fletter==term){

                    cartona+=`<div class="content-item onclick="meal_details(e)" mx-auto container cursor-pointer  bg-blue-400 rounded-xl">
                    <img
                      src="${all_meals[i].strMealThumb}"
                      class="meal-img w-100 rounded-xl block object-contain"
                      alt=""
                    />
                    <div class="over-lay text-left bg-opacity-50 rounded-xl">
                      <h3 class="text-white pt-16 ps-12 text-2xl">${all_meals[i].strMeal}</h3>
                    </div>
                  </div>`
                }

    }

    
    document.getElementById('search-items').innerHTML=cartona




   
    
    

}



// validation input


function validation_input(element) {
    // var pass_regex=/^[A-Z][a-z]{3,9}[0-9]{2,9}$/;
    // var pass_input=password_input.value;
    var all_regex = {
        user_password:/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/,
        user_pass_con:/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/,
        user_name: /^[a-z]{3,9}$/,
        user_email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        user_number:/^(\+201|01|00201)[0-2,5]{1}[0-9]{8}/




    }
    if (all_regex[element.id].test(element.value) == true) {
        console.log("matching password");
        element.classList.add("focus:border-grey-800");
        element.classList.remove("focus:border-red-800");
        document.getElementById('alert').classList.replace('block', 'hidden')


    }
    else {
        console.log("nomatching password");
        element.classList.add("focus:border-red-800");
        element.classList.remove("focus:border-grey-800");
        document.getElementById('alert').classList.replace('hidden', 'block')




    }

    if (userName.classList.contains("focus:border-grey-800") &&
    userEmail.classList.contains("focus:border-grey-800") &&
    userphNumber.classList.contains("focus:border-grey-800") &&
    userPassword.classList.contains("focus:border-grey-800") &&
    userPassConf.classList.contains("focus:border-grey-800")){

        document.getElementById('sub_bttn').removeAttribute('disabled')


    }

//     var userName = document.getElementById('user_name');
// var userEmail = document.getElementById('user_email');
// var userAge = document.getElementById('user_age');
// var userphNumber = document.getElementById('user_number');
// var userPassword = document.getElementById('user_password');
// var userPassConf = document.getElementById('user_pass-con');
// var serchByName=document.getElementById('searchByName');
// var searchByFletter=document.getElementById('searchByFletter');

}

var category_items=document.getElementById('category_items')
var all_category=[];
// var category_content=document.getElementById('category_content');
async function category_content(){


    var response = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
    var final_data = await response.json();
    all_category = final_data.categories;
    
    
    // console.log(all_category);
     var cartona=``
     for (var i=0; i<all_category.length; i++){

        first20word=all_category[i].strCategoryDescription.split(' ').slice(0,19).join(' ');
        // console.log(first20word);

        cartona+=`<div class="content-item cursor-pointer group bg-blue-400 rounded-xl">
        <img
          src="${all_category[i].strCategoryThumb}"
          class="meal-img w-100 block object-contain rounded-xl"
          alt=""
        />
        <div class="over-lay text-left bg-opacity-50 rounded-xl">
          <h3 class="text-white pointer-events-none   text-center text-2xl">${all_category[i].strCategory}</h3>
          <p class="text-white pointer-events-none text-center text-sm">
            ${first20word}
          </p>
        </div>
      </div>`
     }
     document.getElementById('category_items').innerHTML=cartona;


     category_items.addEventListener('click',async function(e){
        var postElementchild=e.target.firstElementChild;
        var postchildcontent=postElementchild.textContent.trim();
        console.log(postElementchild);
        console.log(postchildcontent);
       
        for (var i=0; i < all_category.length; i++) {
            
            if(postchildcontent===all_category[i].strCategory){
             

                  var response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${all_category[i].strCategory}`)
                  var final_data = await response.json();
                  all_semeller_meals = final_data.meals;
                  console.log(all_semeller_meals);
                  var container=``
                  for (var j=0; j<all_semeller_meals.length; j++){
                    container+=` <div class="content-item cursor-pointer h-100 bg-blue-400 rounded-xl">
                    <img
                      src="${all_semeller_meals[j].strMealThumb}"
                      class="meal-img w-100 block object-contain"
                      alt=""
                    />
                    <div class="over-lay text-left bg-opacity-50 rounded-xl">
                      <h3 class="text-white pb-10 pt-16 ps-12 text-2xl">${all_semeller_meals[j].strMeal}</h3>
                      
                    </div>
                  </div> `;
            
                
                 }
                 document.getElementById('category_content').classList.replace('block','hidden');
                 
                 document.getElementById('category-semeller-content').innerHTML=container;
                 document.getElementById('sem_con_container').classList.replace('hidden','block')
                 
                
                
            }
            
        }
        
    }) 



}



category_content();


// /////////////area/////////////


var all_areas=[];
var area_items=document.getElementById('area_items');
async function area_content(){


    var response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
    var final_data = await response.json();
    all_areas = final_data.meals;

    // console.log(all_areas);


    var cartona=``
     for (var i=0; i<all_areas.length; i++){

        

        cartona+=`<div class="country-icon cursor-pointer capitalize text-center">
        <img
          src="images/home-circle-blue-512.webp"
          class="w-100 block pointer-events-none"
          alt=""
        />
        <span class="block text-white text-center pointer-events-none">${all_areas[i].strArea}</span>
      </div>`
     }


     document.getElementById('area_items').innerHTML=cartona;
     



    //  var current_element=document.querySelector('.country-icon')
    area_items.addEventListener('click',async function(e){

    var clickedElement = e.target;
    var secondChildContent = clickedElement.children[1].textContent.trim();
    // console.log(secondChildContent);
        
       
        for (var i=0; i < all_areas.length; i++) {
            
            if(secondChildContent===all_areas[i].strArea){
             

                  var response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${all_areas[i].strArea}`)
                  var final_data = await response.json();
                  all_countiesmeal = final_data.meals;
                  console.log(all_countiesmeal);
                  var container2=``
                  for (var j=0; j<all_countiesmeal.length; j++){
                    container2+=` <div class="content-item cursor-pointer h-100 bg-blue-400 rounded-xl">
                    <img
                      src="${all_countiesmeal[j].strMealThumb}"
                      class="meal-img w-100 block object-contain"
                      alt=""
                    />
                    <div class="over-lay text-left bg-opacity-50 rounded-xl">
                      <h3 class="text-white pb-10 pt-16 ps-12 text-2xl">${all_countiesmeal[j].strMeal}</h3>
                      
                    </div>
                  </div> `;
            
                
                 }
                 document.getElementById('category_content').classList.replace('block','hidden');

                 
                 document.getElementById('area_content').classList.replace('block','hidden');
                 document.getElementById('category-semeller-content').innerHTML=container2;
                 document.getElementById('sem_con_container').classList.replace('hidden','block');
                 
                
                
            }
            
        }
        
    })

}


area_content()









































// ingrediant
var all_ingradiant=[];
var ingradiant_content=document.getElementById('ingradiant_content');
var ingrediant_item=document.getElementById('ingrediant_item');
async function ingrediant_content(){


    var response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
    var final_data = await response.json();
    all_ingradiant = final_data.meals;

    // console.log(all_ingradiant);


    var cartona=``
     for (var i=0; i<25; i++){

        if(all_ingradiant[i].strDescription!==null){
         var   first20word=all_ingradiant[i].strDescription.split(' ').slice(0,19).join(' ');



        }
        else{
            first20word="not found"
        }
        cartona+=`<div class="eat-icon mx-2 cursor-pointer capitalize text-center">
        <img
            src="images/home-circle-blue-512.webp"
            class="w-20 block pointer-events-none mx-auto"
            alt=""
          />
          <span class="block text-white pointer-events-none text-3xl text-center">${all_ingradiant[i].strIngredient}</span>

        <p class="block text-white text-center text-xl pointer-events-none">${first20word}</p>
      </div>`
     }
     document.getElementById('ingrediant_item').innerHTML=cartona;



    //  var all_meal_ingrediant=[]

    //  var current_element=document.querySelector('.country-icon')
    ingrediant_item.addEventListener('click',async function(e){

    var clickedElement = e.target;
    var secondChildContent = clickedElement.children[1].textContent.trim();
    console.log(secondChildContent);
        
       
        for (var i=0; i < all_ingradiant.length; i++) {
            // console.log("oooooooooooooooooooooooo");
            
            if(secondChildContent===all_ingradiant[i].strIngredient){
                

                  var response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast`)
                  var final_data = await response.json();
                 var all_meal_ingrediant = final_data.meals;
                  console.log(all_meal_ingrediant);



                  var container2=``
                  for (var j=0; j<all_meal_ingrediant.length; j++){
                    container2+=` <div class="content-item cursor-pointer h-100 bg-blue-400 rounded-xl">
                    <img
                      src="${all_meal_ingrediant[j].strMealThumb}"
                      class="meal-img w-100 block object-contain rounded-xl"
                      alt=""
                    />
                    <div class="over-lay text-left bg-opacity-50 rounded-xl">
                      <h3 class="text-white pb-10 pt-16 ps-12 text-2xl">${all_meal_ingrediant[j].strMeal}</h3>
                      
                    </div>
                  </div> `;
            
                
                 }
                 document.getElementById('category_content').classList.replace('block','hidden');

                 
                 document.getElementById('ingradiant_content').classList.replace('block','hidden');
                 document.getElementById('category-semeller-content').innerHTML=container2;
                 document.getElementById('sem_con_container').classList.replace('hidden','block');
                 
                
                
            }
            
        }
        
    })

}


ingrediant_content()





$('#loading').slideUp(700);
// $('body').classList.remove('overflow-hidden')



});




