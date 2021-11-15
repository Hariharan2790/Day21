var board = document.createElement('div');
board.style.width = "500px";
board.style.height = "300px";
board.style.margin = "auto";
board.style.textAlign = "center";
board.style.fontSize = "100px";
board.style.marginTop = "150px "
// board.style.backgroundColor ="violet";
board.style.marginTop = "120px";
board.style.color = "blue";



setTimeout(function () {
    board.innerText = "10"
    setTimeout(function () {
        board.innerText = "9"
        setTimeout(function () {
            board.innerText = "8"
            setTimeout(function () {
                board.innerText = "7"
                setTimeout(function () {
                    board.innerText = "6"
                    setTimeout(function () {
                        board.innerText = "5"
                        setTimeout(function () {
                            board.innerText = "4"
                            setTimeout(function () {
                                board.innerText = "3"
                                setTimeout(function () {
                                    board.innerText = "2"
                                    setTimeout(function () {
                                        board.innerText = "1"
                                        setTimeout(function () {
                                            board.innerText = "Happy Independence Day"
                                        }, 1000)
                                    }, 1000)
                                }, 1000)
                            }, 1000)
                        }, 1000)
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000)
}, 1000)


document.body.appendChild(board);
