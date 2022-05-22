let messagesObject ={
    _messages: ['A', 'B', 'C'],
    set messages(inputMessages){
        this._messages = inputMessages;
    },
    getRandomMessage(){
        let randomIndex = Math.floor(Math.random()*this._messages.length);
        return this._messages[randomIndex];
    }
};

messagesObject.messages = ['A', 'B', 'C', 'D', 'E', 'F'];
console.log(messagesObject.getRandomMessage());