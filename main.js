// This is a global component
// It can be used on any Vue instance
// To instantiate a component call Vue.component()
// Pass in a name as the first argument
// Pass in an object as the second argument
// ***********************************************IMPORTANT***********************************************
// The component must be defined before the Vue instance
// If you try to define it after new Vue() below it will fail silently
// The component must render only one root element in the template (you can have multiple children though)
// So, if you use v-for you must wrap that in a parent element
// <template></template> will not work as a parent element (I think)
// ***********************************************/IMPORTANT***********************************************
Vue.component('color-box', {
  // data is now a function that returns an object
  data: function () {
    return {
      colors: [
        {'#feca57': 'casandora yellow'},
        {'#5f27cd': 'nasu purple'},
        {'#0abde3': 'cyanite'},
        {'#10ac84': 'dark mountain meadow'},
        {'#2e86de': 'blue de france'},
        {'#ee5253': 'armour'},
      ],
    }
  },
  template: '<div class="component"><div v-for="color of colors"><p>{{ Object.values(color)[0] }}</p></div></div>'
});

new Vue({
  el: '#app', // the element Vue JS will control, called the "template"
  data: { // data is a reserved word in Vue values are generally called using {{}} syntax or a Vue directive
    title: 'hello world!',
    cssClass: '',
    clicks: 0,
    counter: 0,
    clicksTwo: 0,
    counterTwo: 0,
    clicksThree: 0,
    // because this is a computed property, it does not update the data object
    // if a data property and computed property with the same name exist
    // the data property has priority (I think) and the computed value will be ignored
    // counterThree: 0,
    vIf: true,
    show: true,
    fruit: '',
    templateCondition: false,
    fruitArr: ["🍒", "🍌", "🍏", "🥝", "🍓", "🍋", "🍑", "🍈", "🍍", "🍇", "🍎"],
    users: [
      {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
          "street": "Kulas Light",
          "suite": "Apt. 556",
          "city": "Gwenborough",
          "zipcode": "92998-3874",
          "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
          }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
          "name": "Romaguera-Crona",
          "catchPhrase": "Multi-layered client-server neural-net",
          "bs": "harness real-time e-markets"
        }
      },
      {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
          "street": "Victor Plains",
          "suite": "Suite 879",
          "city": "Wisokyburgh",
          "zipcode": "90566-7771",
          "geo": {
            "lat": "-43.9509",
            "lng": "-34.4618"
          }
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "company": {
          "name": "Deckow-Crist",
          "catchPhrase": "Proactive didactic contingency",
          "bs": "synergize scalable supply-chains"
        }
      },
      {
        "id": 3,
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "Nathan@yesenia.net",
        "address": {
          "street": "Douglas Extension",
          "suite": "Suite 847",
          "city": "McKenziehaven",
          "zipcode": "59590-4157",
          "geo": {
            "lat": "-68.6102",
            "lng": "-47.0653"
          }
        },
        "phone": "1-463-123-4447",
        "website": "ramiro.info",
        "company": {
          "name": "Romaguera-Jacobson",
          "catchPhrase": "Face to face bifurcated interface",
          "bs": "e-enable strategic applications"
        }
      },
    ],
    filterMe: '',
    filterMeToo: '',
  },
  // methods is a reserved word, stores all methods we want to trigger in the template
  methods: {
    changeTitle() {
      // the keyword 'this' refers to the Vue instance not the methods object
      this.title = 'Change Title Via Method';
    },
    // here we can see an example of two data properties being updated independantly
    increment() {
      this.counter += 2;
      this.clicks++;
    },
    // in this example the counterTwo data property is updated based on the value of clicksTwo
    incrementTwo() {
      this.clicksTwo++;
      this.counterTwo = this.clicksTwo * 2;
    },
    // in this example we only update the data property of clicksThree
    // counterThree does not get updated in data
    // rather we use computed properties below to output conditionally
    incrementThree() {
      this.clicksThree++;
    }
  },
  // computed is a reserved word in Vue
  // computed properties are used when some value is dependant on another
  // each of these is defined as a method of the computed object
  // the value of each method is accessed in HTML the same way a data property is accessed
  // {{ nameOfMethod }}
  // so in thise case {{ counterThree }}
  computed: {
    counterThree() {
      return this.clicksThree * 2;
    },
  },
  // These filters are local to this particular instance
  // See below for global filters
  filters: {
    upperCase: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.toUpperCase();
    }
  },
  // These are local components
  components: {
    'test-component': {
      data: function () {
        return {
          message: 'This is an example of a simple local component'
        }
      },
      template: '<div class="component"><p>{{ message }}</p></div>'
    }
  }
});

// This is a global filter
// It can be used on any Vue instance
Vue.filter('funkyCapitalize', function (value) {
  if (!value) return ''
  value = value.toString().split('');
  return value.map((char, index) => {
    if (index % 2 === 0) return char.toUpperCase();
	return char;
  }).join('');
})