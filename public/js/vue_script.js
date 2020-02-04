const vm = new Vue({
    el: '#burger1',
    data: {
     burger1Variable: burger1.name()
    }
  })
  
  const vm2 = new Vue({
    el: '#burger2',
    data: {
     burger2Variable: burger2.name()
    }
  })
  
  const vm3 = new Vue({
    el: '#burger3',
    data: {
     burger3Variable: burger3.name()
    }
  })
  
  const vm4 = new Vue({
    el: '#burger4',
    data: {
     burger4Variable: burger4.name()
    }
  })
  
  const vm5 = new Vue({
    el: '#burger5',
    data: {
     burger5Variable: burger5.name()
    }
  })


  

var burgerMenu = [
    {na: "Fire Breath", d1: "Warning: Fiery hot! Not for weaklings!", d2: "200g hot beef patty", ca: "850kCal", al: "Contains Gluten and Lactose", iS: "http://www.theangrybiscuit.com/wp-content/uploads/2018/05/Depositphotos_57722787_m-2015-2.jpg"},
    {na: "Soothing Supreme", d1: "Smooth and Soothing for your soul", d2: "200g halloumi patty", ca: "675kCal", al: "Contains Gluten and Lactose", iS: "https://www.max.se/contentassets/00848003f52b4c8d8dcf139ecdb3fc1e/product_gdl-umami-halloumi2.jpg"},
    {na: "Echo Friendly", d1: "Echoes the Eco", d2: "200g mushroom & bean patty", ca: "467kCal", al: "Contains Gluten", iS: "https://www.thespruceeats.com/thmb/KAgMssHoQUmx30uuYL_FTahXA0A=/2048x1360/filters:fill(auto,1)/vegan-mushroom-bean-burger-recipe-3378623-13_preview1-5b241897fa6bcc0036d2c9bf.jpeg"},
    {na: "The Elly-burger", d1: "Spicy and fresh", d2: "180g halloumi patty", ca: "580kCal", al: null, iS: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/halloumi-burger-main-1558005486.png?crop=1.00xw:0.789xh;0,0.113xh&resize=480:*"},
    {na: "Regular Cheese", d1: "Just a cheese burger", d2: "150g beef patty with cheddar", ca: "895kCal", al: "Contains Gluten and Lactose", iS: "https://tasteandsee.com/wp-content/uploads/2017/06/Easy-Pimento-Cheese-and-Bacon-Burger-EL-burger-great.jpg"}
    ];
    
    var vm = new Vue({
      el: '#test',
      data: {
        burgers: burgerMenu
      }
    })
    
    
    
    
    