const productContainer = document.querySelector("[data-productFeatures]");
let cards = new Array();

class Product{
   markerTab = ["Addidas", "Nike", "Star", "Cropp"];
   cardStars = undefined;
   constructor(temp){
      this.temp = temp;
      this.card = document.getElementById(this.temp).content.cloneNode(true);
   }

   setDescripion(){
      this.card.querySelector('[data-maker]').innerHTML = this.markerTab[Math.round(this.mathRand(this.markerTab.length - 1))];
      this.card.querySelector('[data-title]').textContent = "Cotton Astronaut T-Shirts";
      this.cardStars = this.card.querySelectorAll('[data-star]');

      for(let x = 0; x < this.mathRand(5); x++)
         this.cardStars[x].classList.add("yellow");
      
      this.card.querySelector('[data-userVote]').innerHTML = "(" + Math.round(this.mathRand(1000)) + ")";
      this.card.querySelector('[data-price]').innerHTML = this.mathRand(100).toFixed(2) + "$";
      return this.card;
   }

   mathRand = (a) => {
      return Math.random() * a;
   }

   
}

for(let x = 0; x < 20; x++)
   cards.push(new Product("productCard"));

cards.forEach(element => {
   productContainer.appendChild(element.setDescripion());
});