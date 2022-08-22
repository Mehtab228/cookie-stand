let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let seattle = {
  location: 'Seattle',
  min: 23,
  max: 65,
  averageCookie: 6.3,
  numberOfCustomers: [],
  numberOfCookies: [],
  calcRandomCust: function () {
    for (let i = 0; i < hours.length; i++){
      this.numberOfCustomers.push(Math.floor(Math.random() * (this.max - this.min + 1)) + this.min);
    }
  },
  averageCookiePerHour: function () {
    for (let i = 0; i < this.numberOfCustomers.length; i++)
      this.numberOfCookies.push(Math.floor(this.numberOfCustomers[i] * this.averageCookie));
  }
};

seattle.calcRandomCust();
console.log(seattle.numberOfCustomers);
seattle.averageCookiePerHour();
console.log(seattle.numberOfCookies);

