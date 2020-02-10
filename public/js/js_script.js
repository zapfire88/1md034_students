// function menuItem(bT, d1, d2, cal, al, iS)
// {
//     this.burgerTitle = bT;
//     this.description1 = d1;
//     this.description2 = d2;
//     this.calories = cal;
//     this.allergies = al;
//     this.imageString = iS;
//     this.name = function()
//     {
//         return this.burgerTitle + ' - ' + this.calories;
//     }
    
//     this.dispAllergies = function()
//     {
//     		return this.allergies;
//     }
// }

// let burger1 = new menuItem("Fire Breath", "Warning: Fiery hot! Not for weaklings!", "200g hot beef patty", "850kCal", "Contains Gluten and Lactose", "http://www.theangrybiscuit.com/wp-content/uploads/2018/05/Depositphotos_57722787_m-2015-2.jpg");

// let burger2 = new menuItem("Soothing Supreme", "Smooth and Soothing for your soul", "200g halloumi patty", "675kCal", "Contains Gluten and Lactose", "https://www.max.se/contentassets/00848003f52b4c8d8dcf139ecdb3fc1e/product_gdl-umami-halloumi2.jpg");

// let burger3 = new menuItem("Echo Friendly", "Echoes the Eco", "200g mushroom & bean patty", "467kCal", "", "https://www.thespruceeats.com/thmb/KAgMssHoQUmx30uuYL_FTahXA0A=/2048x1360/filters:fill(auto,1)/vegan-mushroom-bean-burger-recipe-3378623-13_preview1-5b241897fa6bcc0036d2c9bf.jpeg");

// let burger4 = new menuItem("The Elly-burger", "Spicy and fresh", "180g halloumi patty", "580kCal", "Contains Gluten and Lactose", "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/halloumi-burger-main-1558005486.png?crop=1.00xw:0.789xh;0,0.113xh&resize=480:*");

// let burger5 = new menuItem("Regular Cheese", "Just a cheese burger", "150g beef patty with cheddar", "895kCal", "Contains Gluten and Lactose", "https://tasteandsee.com/wp-content/uploads/2017/06/Easy-Pimento-Cheese-and-Bacon-Burger-EL-burger-great.jpg");

// var menu = [burger1, burger2, burger3, burger4, burger5];

// let myMenu = document.getElementById("burgerMenu");
// for(i = 0; i < 5; i++)
// {
// 	let newBurger = document.createElement("div");
// 	if(menu[i].dispAllergies().length > 0)
//   {
// 		//Burger Title
// 		let listItemName = document.createElement("h3");
// 		listItemName.className = "burgerTitle";
//   	let itemName = document.createTextNode(menu[i].burgerTitle);
		
// 		//Burger Image
// 		let listItemImg = document.createElement("img")
// 		listItemImg.className = "burgerImage";
// 		listItemImg.src = menu[i].imageString;
		
// 		//Burger Attributes
// 		let listItemDesc1 = document.createElement("p");
// 		let itemDesc1 = document.createTextNode(menu[i].description1);
// 		let listItemDesc2 = document.createElement("p");
// 		let itemDesc2 = document.createTextNode(menu[i].description2);
// 		let listItemCalories = document.createElement("p");
// 		let itemCalories = document.createTextNode(menu[i].calories);
// 		let listItemAllergies = document.createElement("p");
// 		listItemAllergies.className = "burgerAllergies";
// 		let itemAllergies = document.createTextNode(menu[i].allergies);

		
// 		listItemName.appendChild(itemName);
// 		listItemDesc1.appendChild(itemDesc1);
// 		listItemDesc2.appendChild(itemDesc2);
// 		listItemCalories.appendChild(itemCalories);
// 		listItemAllergies.appendChild(itemAllergies);
		
//   	newBurger.appendChild(listItemName);
// 		newBurger.appendChild(listItemImg);
// 		newBurger.appendChild(listItemDesc1);
// 		newBurger.appendChild(listItemDesc2);
// 		newBurger.appendChild(listItemCalories);
// 		newBurger.appendChild(listItemAllergies);
//   }
	
//   else
//   {
// //Burger Title
// 		let listItemName = document.createElement("h3");
// 		listItemName.className = "burgerTitle";
//   	let itemName = document.createTextNode(menu[i].burgerTitle);
		
// 		//Burger Image
// 		let listItemImg = document.createElement("img");
// 		listItemImg.src = menu[i].imageString;
// 		listItemImg.className = "burgerImage";
		
// 		//Burger Attributes
// 		let listItemDesc1 = document.createElement("p");
// 		let itemDesc1 = document.createTextNode(menu[i].description1);
// 		let listItemDesc2 = document.createElement("p");
// 		let itemDesc2 = document.createTextNode(menu[i].description2);
// 		let listItemCalories = document.createElement("p");
// 		let itemCalories = document.createTextNode(menu[i].calories);

		
// 		listItemName.appendChild(itemName);
// 		listItemDesc1.appendChild(itemDesc1);
// 		listItemDesc2.appendChild(itemDesc2);
// 		listItemCalories.appendChild(itemCalories);
		
	
//   	newBurger.appendChild(listItemName);
// 		newBurger.appendChild(listItemImg);
// 		newBurger.appendChild(listItemDesc1);
// 		newBurger.appendChild(listItemDesc2);
// 		newBurger.appendChild(listItemCalories);
//   }
// 	myMenu.appendChild(newBurger);
// }