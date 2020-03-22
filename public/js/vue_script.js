// function menuItem(bT, d1, d2, cal, al, iS) {
//     this.burgerTitle = bT;
//     this.description1 = d1;
//     this.description2 = d2;
//     this.calories = cal;
//     this.allergies = al;
//     this.imageString = iS;
//     this.name = function() {
//       return this.burgerTitle + ' - ' + this.calories;
//     }

//     this.dispAllergies = function() {
//       return this.allergies;
//     }
//   }

//   let burger1 = new menuItem("Fire Breath", "Warning: Fiery hot! Not for weaklings!", "200g hot beef patty", "850kCal", "Contains Gluten and Lactose", "http://www.theangrybiscuit.com/wp-content/uploads/2018/05/Depositphotos_57722787_m-2015-2.jpg");

//   let burger2 = new menuItem("Soothing Supreme", "Smooth and Soothing for your soul", "200g halloumi patty", "675kCal", "Contains Gluten and Lactose", "https://www.max.se/contentassets/00848003f52b4c8d8dcf139ecdb3fc1e/product_gdl-umami-halloumi2.jpg");

//   let burger3 = new menuItem("Echo Friendly", "Echoes the Eco", "200g mushroom & bean patty", "467kCal", "", "https://www.thespruceeats.com/thmb/KAgMssHoQUmx30uuYL_FTahXA0A=/2048x1360/filters:fill(auto,1)/vegan-mushroom-bean-burger-recipe-3378623-13_preview1-5b241897fa6bcc0036d2c9bf.jpeg");

//   let burger4 = new menuItem("The Elly-burger", "Spicy and fresh", "180g halloumi patty", "580kCal", "Contains Gluten and Lactose", "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/halloumi-burger-main-1558005486.png?crop=1.00xw:0.789xh;0,0.113xh&resize=480:*");

//   let burger5 = new menuItem("Regular Cheese", "Just a cheese burger", "150g beef patty with cheddar", "895kCal", "Contains Gluten and Lactose", "https://tasteandsee.com/wp-content/uploads/2017/06/Easy-Pimento-Cheese-and-Bacon-Burger-EL-burger-great.jpg");

//   var menu = [burger1, burger2, burger3, burger4, burger5];
'use strict';
const socket = io();

var vm = new Vue({
    el: 'main',
    data: {
        menu,
        burgervue: [],
        fnamevue: "",
        emailvue: "",
        // streetvue: "",
        // housevue: "",
        paymentvue: "Credit card",
        gendervue: "Undisclosed",
        seen: false,
        orderedOrder: {},
        orders: {},
    },
    created: function() {
        /* When the page is loaded, get the current orders stored on the server.
         * (the server's code is in app.js) */
        socket.on('initialize', function(data) {
          this.orders = data.orders;
        }.bind(this));
    
        /* Whenever an addOrder is emitted by a client (every open map.html is
         * a client), the server responds with a currentQueue message (this is
         * defined in app.js). The message's data payload is the entire updated
         * order object. Here we define what the client should do with it.
         * Spoiler: We replace the current local order object with the new one. */
        socket.on('currentQueue', function(data) {
          this.orders = data.orders;
        }.bind(this));
      },
    methods: {
        getNext: function() {
            /* This function returns the next available key (order number) in
             * the orders object, it works under the assumptions that all keys
             * are integers. */
            let lastOrder = Object.keys(this.orders).reduce(function(last, next) {
              return Math.max(last, next);
            }, 0);
            return lastOrder + 1;
          },
          addOrder: function(event) {
            /* When you click in the map, a click event object is sent as parameter
             * to the function designated in v-on:click (i.e. this one).
             * The click event object contains among other things different
             * coordinates that we need when calculating where in the map the click
             * actually happened. */
            let offset = {
              x: event.currentTarget.getBoundingClientRect().left,
              y: event.currentTarget.getBoundingClientRect().top,
            };
            socket.emit('addOrder', {
              orderId: this.getNext(),
              details: {
                x: event.clientX - 10 - offset.x,
                y: event.clientY - 10 - offset.y,
              },
              orderItems: ['Beans', 'Curry'],
            });
          },
        markDone: function () {
            this.seen = true;
            this.orderedOrder = {
                burgers: "Burgers: " + this.burgervue,
                fname: "Full Name: " + this.fnamevue,
                email: "Email: " + this.emailvue,
                // street: "Street: " + this.streetvue, 
                // house: "House: " + this.housevue, 
                payment: "Payment: " + this.paymentvue,
                gender: "Gender: " + this.gendervue
            }
            // alert(
            //     "-------- ORDER --------" + "\n\n" +
            //     "Burgers: " + this.burgervue + "\n" +
            //     "Full Name: " + this.fnamevue + "\n" +
            //     "Email: " + this.emailvue + "\n" +
            //     "Street: " + this.streetvue + "\n" +
            //     "House: " + this.housevue + "\n" +
            //     "Payment Method: " + this.paymentvue + "\n" +
            //     "Gender: " + this.gendervue)
        }
    }
})
