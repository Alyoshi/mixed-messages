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

const updateMessages = () => {
const elem = document.getElementById('story-text');
elem.textContent = messagesObject.getRandomMessage();
}

// messagesObject.messages = ['A', 'B', 'C', 'D', 'E', 'F'];
// console.log(messagesObject.getRandomMessage());

/*
1. Now that’s what I call stupid: In my junior year of high school, this guy asked me on a date. He rented a Redbox movie and made a pizza. We were watching the movie and the oven beeped so the pizza was done. He looked me dead in the eye and said, “This is the worst part.” I then watched this boy open the oven and pull the pizza out with his bare hands, rack and all, screaming at the top of his lungs. We never had a second date.
bare hands, cat, 
*/