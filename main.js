let messagesObject ={
    _messages: ['A', 'B', 'C'],
    set messages(inputMessages){
        this._messages = inputMessages;
    },
    getRandomMessage(){
        //todo: use at least 3 sources for a stupid story and build a string of it, which will be returned (like goat, castle and boat)
        let randomIndex = Math.floor(Math.random()*this._messages.length);
        return this._messages[randomIndex];
    }
};

messagesObject.messages = ['A', 'B', 'C', 'D', 'E', 'F'];
console.log(messagesObject.getRandomMessage());