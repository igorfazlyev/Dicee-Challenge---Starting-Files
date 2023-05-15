if (performance.navigation.type===1){
    //alert("I run");
    const getRandomInt = function(max) {
        return Math.floor(Math.random() * max);
    };

    const images = [
        "./images/dice1.png",
        "./images/dice2.png",
        "./images/dice3.png",
        "./images/dice4.png",
        "./images/dice5.png",
        "./images/dice6.png",
    ]

    const playerOneImageIndex = getRandomInt(images.length);
    const playerTwoImageIndex = getRandomInt(images.length);

    document.querySelector(".player1 img").setAttribute("src", images[playerOneImageIndex]);
    document.querySelector(".player2 img").setAttribute("src", images[playerTwoImageIndex]);

    if (playerOneImageIndex > playerTwoImageIndex) {
        document.querySelector("h1").innerText = "Player One Won";
    }else if (playerOneImageIndex < playerTwoImageIndex) {
        document.querySelector("h1").innerText = "Player Two Won";
    }else{
        document.querySelector("h1").innerText = "It's a Tie";
    }
}