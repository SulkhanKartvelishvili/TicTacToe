var board;
var playerO = "O";
var playerX = "X";
var currentPlayer = playerO;
var gameOver = false;

window.onload = function (){
    setGame();
}
function setGame(){
    board = [
        [' ', ' ', ' '],
        [' ', ' ', ' '],
        [' ', ' ', ' ']
    ]
    for(var r = 0; r<3 ;r++){
        for(var c = 0; c<3; c++){
            var tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();
            tile.classList.add("tile");
            if(r==0 || r==1){
                tile.classList.add("horizontal-line");
            }
            if(c==0 || c==1){
                tile.classList.add("vertical-line");
            }
            tile.innerText = "";
            tile.addEventListener("click", setTile);
            document.getElementById("board").appendChild(tile);
        }
    }
}

function setTile(){
    if (gameOver) {
        return;
    }
    var coords = this.id.split("-");
    var r = parseInt(coords[0]);
    var c = parseInt(coords[1]);

if(board[r][c] != ' '){
    return;
}

    board[r][c]=currentPlayer;
    this.innerText = currentPlayer;

    if(currentPlayer == playerO){
        currentPlayer = playerX;
    }
    else{
        currentPlayer = playerO;
    }

    checkWinner();

}

function checkWinner(){
    for(var r = 0; r<3; r++){
        if(board[r][0] == board[r][1] && board[r][1] == board[r][2] && board[r][0] != ' '){
               for(var i =0; i<3; i++){
                var tile = document.getElementById(r.toString() + "-" + i.toString());
                tile.classList.add("winner");
               }
               if(tile.innerText == "O"){
               var f = document.getElementById("first");
               f.classList.remove("hide");
              
             }
             else if(tile.innerText == "X"){
            
                var s = document.getElementById("second");
               s.classList.remove("hide");
             }
               gameOver = true;
               return;
        }
        
    }

    for(var c=0; c<3; c++){
        if(board[0][c] == board[1][c] && board[1][c]==board[2][c] && board[0][c] !=' '){
            for(var i =0; i<3; i++){
                var tile = document.getElementById(i.toString() + "-" + c.toString());
                tile.classList.add("winner");
            }
            if(tile.innerText == "O"){
                var f = document.getElementById("first");
                f.classList.remove("hide");
               
              }
              else if(tile.innerText == "X"){
             
                 var s = document.getElementById("second");
                s.classList.remove("hide");
              }
            gameOver = true;
            return;
        }
    }

   
        if(board[0][0] == board[1][1] && board[1][1]==board[2][2] && board[0][0] != ' '){
            for(var i= 0; i<3; i++){
            var tile = document.getElementById(i.toString() + "-" + i.toString())
            tile.classList.add("winner");
                }
                if(tile.innerText == "O"){
                    var f = document.getElementById("first");
                    f.classList.remove("hide");
                   
                  }
                  else if(tile.innerText == "X"){
                 
                     var s = document.getElementById("second");
                    s.classList.remove("hide");
                  }
                gameOver = true;
                return;
    }

    if(board[0][2] == board[1][1] && board[1][1]==board[2][0] && board[0][2] != ' '){
        
        var tile = document.getElementById("0-2");
        tile.classList.add("winner");
         tile = document.getElementById("1-1");
        tile.classList.add("winner");
         tile = document.getElementById("2-0");
        tile.classList.add("winner");
        if(tile.innerText == "O"){
            var f = document.getElementById("first");
            f.classList.remove("hide");
           
          }
          else if(tile.innerText == "X"){
         
             var s = document.getElementById("second");
            s.classList.remove("hide");
          }
        
            gameOver = true;
            return;
}
}

