let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let grandTotalCookies = [];
function Location(location, minCust, maxCust, averageCookie) {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.averageCookie = averageCookie;
  this.cookiePerDay = 0;
  this.numberOfCustomers = [];
  this.numberOfCookies = [];
  allStores.push(this);
}

Location.prototype.calcRandomCust = function () {
  for (let i = 0; i < hours.length; i++) {
    this.numberOfCustomers.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
  }
};

Location.prototype.averageCookiePerHour = function () {
  this.calcRandomCust();
  for (let i = 0; i < this.numberOfCustomers.length; i++) {
    let hourlyNumber = Math.floor(this.numberOfCustomers[i] * this.averageCookie);
    this.numberOfCookies.push(hourlyNumber);
    this.cookiePerDay += hourlyNumber;
  }
};

Location.prototype.render = function () {
  this.averageCookiePerHour();
  let storeRow = document.createElement('tr');
  table.appendChild(storeRow);
  let nameLocation = document.createElement('td');
  nameLocation.textContent = this.location;
  storeRow.appendChild(nameLocation);
  for (let i = 0; i < this.numberOfCookies.length; i++) {
    let oneHour = this.numberOfCookies[i];
    let candyRow = document.createElement('td');
    candyRow.textContent = oneHour;
    storeRow.appendChild(candyRow);
  }
  let totalCookiesLocation = document.createElement('td');
  totalCookiesLocation.textContent = this.cookiePerDay;
  storeRow.appendChild(totalCookiesLocation);
};

let grandTotal = function(){
  let renderRowTotal = document.createElement('tr');
  table.appendChild(renderRowTotal);
  let rowTitle = document.createElement('td');
  rowTitle.textContent = 'Total';
  renderRowTotal.appendChild(rowTitle);
  let finalTotal = 0;
  for (let i = 0; i < hours.length; i++){
    let hourTotal = 0;
    for (let j = 0; j < allStores.length; j++){
      hourTotal += allStores[j].numberOfCookies[i];
    }
    grandTotalCookies.push(hourTotal);
    finalTotal += hourTotal;
    let rowTotal = document.createElement('td');
    rowTotal.textContent = finalTotal;
    renderRowTotal.appendChild(rowTotal);
  }
  console.log('grandTotalCookies', grandTotalCookies);
  console.log('finalTotal', finalTotal);
};

let allStores = [];
new Location('Seattle', 23, 65, 6.3);
new Location('Tokyo', 3, 24, 1.2);
new Location('Dubai', 11, 38, 3.7);
new Location('Paris', 20, 38, 2.3);
new Location('Lima', 2, 16, 4.6);

console.log(allStores);

let table = document.getElementById('big');



let tablehead1 = document.createElement('thead');
table.appendChild(tablehead1);


function renderRow(){
  let emptyCell = document.createElement('td');
  emptyCell.textContent = '';
  tablehead1.appendChild(emptyCell);
  for(let i = 0; i < hours.length; i++){
    let rowHours = document.createElement('td');
    rowHours.textContent = hours[i];
    tablehead1.appendChild(rowHours);
  }
  let cellTotal = document.createElement('td');
  cellTotal.textContent = 'Daily Location Total';
  tablehead1.appendChild(cellTotal);
}

renderRow();

allStores[0].render();
allStores[1].render();
allStores[2].render();
allStores[3].render();
allStores[4].render();

grandTotal();

