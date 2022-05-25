let previousMenu = '';
let menu = '';
let backgroundFood = '';

const createRandomIndex = array => Math.floor(Math.random() * array.length);

let messagesObject = {
    _carbon: ['rice', 'pasta', 'potatoes', 'bread'],
    _vegetables: ['zucchini', 'paprika', 'eggplant'],
    _protein: ['tofu', 'grilled chicken', 'cheese'],

    getRandomMeal() {
        let randomIndexCarbon = createRandomIndex(this._carbon);
        let randomIndexVegetables = createRandomIndex(this._vegetables);
        let randomIndexProtein = createRandomIndex(this._protein);
        previousMenu = menu;
        menu = `Today's menu is ${this._protein[randomIndexProtein]} with ${this._vegetables[randomIndexVegetables]} and ${this._carbon[randomIndexCarbon]}.`;
        while (menu === previousMenu) {
            randomIndexCarbon = createRandomIndex(this._carbon);
            randomIndexVegetables = createRandomIndex(this._vegetables);
            randomIndexProtein = createRandomIndex(this._protein);
        }
        backgroundFood = this._carbon[randomIndexCarbon];
        return menu;
    }
};

const updateMessages = () => {
    document.getElementById('story-text').textContent = messagesObject.getRandomMeal();

    switch (backgroundFood) {
        case 'rice': document.getElementById("jumbo").style.backgroundImage = "url(./sources/rice.jpg)"; break;
        case 'pasta': document.getElementById("jumbo").style.backgroundImage = "url(./sources/pasta.jpg)"; break;
        case 'potatoes': document.getElementById("jumbo").style.backgroundImage = "url(./sources/potatoes.jpg)"; break;
        case 'bread': document.getElementById("jumbo").style.backgroundImage = "url(./sources/bread.jpg)"; break;
    }
}