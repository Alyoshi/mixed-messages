let randomIndex = -1;
let randomIndexCompare = -1;

let messagesObject ={
    _messages: ['France', 'Italy', 'Bavaria','South Africa'],
    set messages(inputMessage) {
        this._messages = inputMessage;
    },
    getRandomMessage(){
        //todo: use at least 3 sources for a stupid story and build a string of it, which will be returned (like goat, castle and boat)
        randomIndexCompare = randomIndex;
        randomIndex = Math.floor(Math.random()*this._messages.length);
        while(randomIndex === randomIndexCompare){
            randomIndex = Math.floor(Math.random()*this._messages.length);
        }
        return this._messages[randomIndex];
    }
};

const updateMessages = () => {
const elem = document.getElementById('story-text');
elem.textContent = messagesObject.getRandomMessage();
}
