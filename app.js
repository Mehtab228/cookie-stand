let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let seattle = {
  location: 'Seattle',
  hourAndCookies: [],
  min: 23,
  max: 65,
  averageCookie: 6.3,
  numberOfCustomers: [],
  numberOfCookies: [],
  cookiePerDay: 0,
  calcRandomCust: function () {
    for (let i = 0; i < hours.length; i++) {
      this.numberOfCustomers.push(Math.floor(Math.random() * (this.max - this.min + 1)) + this.min);
    }
  },
  averageCookiePerHour: function () {
    for (let i = 0; i < this.numberOfCustomers.length; i++)
      this.numberOfCookies.push(Math.floor(this.numberOfCustomers[i] * this.averageCookie));
  },
  totalCookiePerDay: function () {
    for (let i = 0; i < this.numberOfCookies.length; i++) {
      this.cookiePerDay += this.numberOfCookies[i];
    }
  },
  displayHours: function () {
    for (let i = 0; i < hours.length; i++) {
      this.hourAndCookies[i] = `${hours[i]}: ${this.numberOfCookies[i]} salmon cookies`;
    }

  },
};

seattle.calcRandomCust();
console.log(seattle.numberOfCustomers);

seattle.averageCookiePerHour();
console.log(seattle.numberOfCookies);

seattle.totalCookiePerDay();
console.log(seattle.cookiePerDay);

seattle.displayHours();
console.log(seattle.hourAndCookies);

let listEl = document.getElementById('firstSet');

for (let i = 0; i < seattle.hourAndCookies.length; i++) {
  let newListEl = document.createElement('li');
  newListEl.textContent = seattle.hourAndCookies[i];
  listEl.appendChild(newListEl);
}

let newListEl = document.createElement('li');
newListEl.textContent = `Total: ${seattle.cookiePerDay} salmon candy`;
listEl.appendChild(newListEl);
console.log(newListEl);


let tokyo = {
  location: 'Tokyo',
  hourAndCookies: [],
  min: 3,
  max: 24,
  averageCookie: 1.2,
  numberOfCustomers: [],
  numberOfCookies: [],
  cookiePerDay: 0,
  calcRandomCust: function () {
    for (let i = 0; i < hours.length; i++) {
      this.numberOfCustomers.push(Math.floor(Math.random() * (this.max - this.min + 1)) + this.min);
    }
  },
  averageCookiePerHour: function () {
    for (let i = 0; i < this.numberOfCustomers.length; i++)
      this.numberOfCookies.push(Math.floor(this.numberOfCustomers[i] * this.averageCookie));
  },
  totalCookiePerDay: function () {
    for (let i = 0; i < this.numberOfCookies.length; i++) {
      this.cookiePerDay += this.numberOfCookies[i];
    }
  },
  displayHours: function () {
    for (let i = 0; i < hours.length; i++) {
      this.hourAndCookies[i] = `${hours[i]}: ${this.numberOfCookies[i]} salmon cookies`;
    }

  },
};

tokyo.calcRandomCust();
console.log(tokyo.numberOfCustomers);

tokyo.averageCookiePerHour();
console.log(tokyo.numberOfCookies);

tokyo.totalCookiePerDay();
console.log(tokyo.cookiePerDay);

tokyo.displayHours();
console.log(tokyo.hourAndCookies);

let listEl2 = document.getElementById('secondSet');

for (let i = 0; i < tokyo.hourAndCookies.length; i++) {
  let newListEl = document.createElement('li');
  newListEl.textContent = tokyo.hourAndCookies[i];
  listEl2.appendChild(newListEl);
}

let newListEl2 = document.createElement('li');
newListEl2.textContent = `Total: ${tokyo.cookiePerDay} salmon candy`;
listEl2.appendChild(newListEl2);


let dubai = {
  location: 'Dubai',
  hourAndCookies: [],
  min: 11,
  max: 38,
  averageCookie: 3.7,
  numberOfCustomers: [],
  numberOfCookies: [],
  cookiePerDay: 0,
  calcRandomCust: function () {
    for (let i = 0; i < hours.length; i++) {
      this.numberOfCustomers.push(Math.floor(Math.random() * (this.max - this.min + 1)) + this.min);
    }
  },
  averageCookiePerHour: function () {
    for (let i = 0; i < this.numberOfCustomers.length; i++)
      this.numberOfCookies.push(Math.floor(this.numberOfCustomers[i] * this.averageCookie));
  },
  totalCookiePerDay: function () {
    for (let i = 0; i < this.numberOfCookies.length; i++) {
      this.cookiePerDay += this.numberOfCookies[i];
    }
  },
  displayHours: function () {
    for (let i = 0; i < hours.length; i++) {
      this.hourAndCookies[i] = `${hours[i]}: ${this.numberOfCookies[i]} salmon cookies`;
    }

  },
};

dubai.calcRandomCust();
console.log(dubai.numberOfCustomers);

dubai.averageCookiePerHour();
console.log(dubai.numberOfCookies);

dubai.totalCookiePerDay();
console.log(dubai.cookiePerDay);

dubai.displayHours();
console.log(dubai.hourAndCookies);

let listEl3 = document.getElementById('thirdSet');

for (let i = 0; i < dubai.hourAndCookies.length; i++) {
  let newListEl = document.createElement('li');
  newListEl.textContent = dubai.hourAndCookies[i];
  listEl3.appendChild(newListEl);
}

let newListEl3 = document.createElement('li');
newListEl3.textContent = `Total: ${dubai.cookiePerDay} salmon candy`;
listEl3.appendChild(newListEl3);

let paris = {
  location: 'Paris',
  hourAndCookies: [],
  min: 20,
  max: 38,
  averageCookie: 2.3,
  numberOfCustomers: [],
  numberOfCookies: [],
  cookiePerDay: 0,
  calcRandomCust: function () {
    for (let i = 0; i < hours.length; i++) {
      this.numberOfCustomers.push(Math.floor(Math.random() * (this.max - this.min + 1)) + this.min);
    }
  },
  averageCookiePerHour: function () {
    for (let i = 0; i < this.numberOfCustomers.length; i++)
      this.numberOfCookies.push(Math.floor(this.numberOfCustomers[i] * this.averageCookie));
  },
  totalCookiePerDay: function () {
    for (let i = 0; i < this.numberOfCookies.length; i++) {
      this.cookiePerDay += this.numberOfCookies[i];
    }
  },
  displayHours: function () {
    for (let i = 0; i < hours.length; i++) {
      this.hourAndCookies[i] = `${hours[i]}: ${this.numberOfCookies[i]} salmon cookies`;
    }

  },
};

paris.calcRandomCust();
console.log(paris.numberOfCustomers);

paris.averageCookiePerHour();
console.log(paris.numberOfCookies);

paris.totalCookiePerDay();
console.log(paris.cookiePerDay);

paris.displayHours();
console.log(paris.hourAndCookies);

let listEl4 = document.getElementById('fourthSet');

for (let i = 0; i < paris.hourAndCookies.length; i++) {
  let newListEl = document.createElement('li');
  newListEl.textContent = paris.hourAndCookies[i];
  listEl4.appendChild(newListEl);
}

let newListEl4 = document.createElement('li');
newListEl4.textContent = `Total: ${paris.cookiePerDay} salmon candy`;
listEl4.appendChild(newListEl4);

let lima = {
  location: 'Lima',
  hourAndCookies: [],
  min: 2,
  max: 16,
  averageCookie: 4.6,
  numberOfCustomers: [],
  numberOfCookies: [],
  cookiePerDay: 0,
  calcRandomCust: function () {
    for (let i = 0; i < hours.length; i++) {
      this.numberOfCustomers.push(Math.floor(Math.random() * (this.max - this.min + 1)) + this.min);
    }
  },
  averageCookiePerHour: function () {
    for (let i = 0; i < this.numberOfCustomers.length; i++)
      this.numberOfCookies.push(Math.floor(this.numberOfCustomers[i] * this.averageCookie));
  },
  totalCookiePerDay: function () {
    for (let i = 0; i < this.numberOfCookies.length; i++) {
      this.cookiePerDay += this.numberOfCookies[i];
    }
  },
  displayHours: function () {
    for (let i = 0; i < hours.length; i++) {
      this.hourAndCookies[i] = `${hours[i]}: ${this.numberOfCookies[i]} salmon cookies`;
    }

  },
};

lima.calcRandomCust();
console.log(lima.numberOfCustomers);

lima.averageCookiePerHour();
console.log(lima.numberOfCookies);

lima.totalCookiePerDay();
console.log(lima.cookiePerDay);

lima.displayHours();
console.log(lima.hourAndCookies);

let listEl5 = document.getElementById('fifthSet');

for (let i = 0; i < lima.hourAndCookies.length; i++) {
  let newListEl = document.createElement('li');
  newListEl.textContent = lima.hourAndCookies[i];
  listEl5.appendChild(newListEl);
}

let newListEl5 = document.createElement('li');
newListEl5.textContent = `Total: ${lima.cookiePerDay} salmon candy`;
listEl5.appendChild(newListEl5);

