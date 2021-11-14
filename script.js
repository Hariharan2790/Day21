var board = document.createElement('div');
    board.style.width = "500px";
    board.style.height = "100px";
    board.style.margin = "auto";
    board.style.textAlign = "center";
    board.style.fontSize = "100px";
    board.style.marginTop = "150px "
   // board.style.backgroundColor ="violet";
    board.style.marginTop = "120px";
    board.style.color = "blue";
    

        
       
        setTimeout(function(){
            board.innerText = "10"
        },1000)
        setTimeout(function(){
            board.innerText = "9"
        },2000)
        setTimeout(function(){
            board.innerText = "8"
        },3000)
        setTimeout(function(){
            board.innerText = "7"
        },4000)
        setTimeout(function(){
            board.innerText = "6"
        },5000)
        setTimeout(function(){
            board.innerText = "5"
        },6000)
        setTimeout(function(){
            board.innerText = "4"
        },7000)
        setTimeout(function(){
            board.innerText = "3"
        },8000)
        setTimeout(function(){
            board.innerText = "2"
        },9000)
        setTimeout(function(){
            board.innerText = "1"
        },10000)
        setTimeout(function(){
            board.innerText = "Happy Independence Day"
        },11000)

        
        document.body.appendChild(board);
