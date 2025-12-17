let turn = "O";
const o1 = document.getElementById('O');
const x1 = document.getElementById('X');
o1.style.color = "#f0f0f0";   // light color (white-ish)
x1.style.color = "#4a4a4a";   // darker gray

const parent = document.querySelector('.board');
let winner = [
    [0,1,2],//x-axis
    [3,4,5],
    [6,7,8],
    [0,3,6],//y-axis
    [1,4,7],
    [2,5,8],
    [0,4,8],//cross
    [2,4,6]
]
let board_array = new Array(9).fill('E');// E define empty!
let total = 0;

// Check winner
function checkWinner(){
    for (let [i,j,k] of winner) { // [0,1,2] 1D array 
        if(board_array[i]!="E" && board_array[i]==board_array[j]&& board_array[i]==board_array[k]){
            if(j==4){
                // top-left to bottom-right
                if(i==0 && k==8){
                    const line = document.getElementById('line3');
                    line.style.transformOrigin = 'top left';
                    line.style.bottom = '100%';
                    line.style.top = '0px';
                    line.style.transform = 'rotate(45deg)';
                    line.style.display = 'block';
                }
                // top-right to bottom-left
                else if(i==2 && k==6){
                    const line = document.getElementById('line3');
                    line.style.transformOrigin = 'top left';
                    line.style.top = '100%';
                    line.style.bottom = '0px';
                    line.style.transform = 'rotate(-45deg)';
                    line.style.display = 'block';
                }
                // y-mid - up to down
                else if(i==1 && k==7){
                    const line = document.getElementById('line1');
                    line.style.left = '50%';
                    line.style.display = 'block';
                }
                // x-mid - left to right
                else if(i==3 && k==5){
                    const line = document.getElementById('line2');
                    line.style.top = '50%';
                    line.style.display = 'block';
                }
            }
            else if(i==0){
                // left-top to down
                if(j==3 && k==6){
                    const line = document.getElementById('line1');
                    line.style.left = '15%';
                    line.style.display = 'block';
                }
                // left-top to right
                else if(j==1 && k==2){
                    const line = document.getElementById('line2');
                    line.style.top = '15%';
                    line.style.display = 'block';
                }
            }
            else if(k==8){
                // bottom-right to left
                if(i==6 && j==7){
                    const line = document.getElementById('line2');
                    line.style.top = '85%';
                    line.style.display = 'block';
                }
                // bottom-right to top
                else if(i==2 && j==5){
                    const line = document.getElementById('line1');
                    line.style.left = '85%';
                    line.style.display = 'block';
                }
            }
            return 1;
        }
    }
    return 0;
}

// Event Listner on parent of cells
const printer = (e)=>{
    const element = e.target; // Id of that cell

    // Check if already element exist first!
    if(board_array[element.id]==="E")
    {
        total++;
        if(turn=="O"){
            element.textContent = 'O';
            board_array[element.id] = "O";
            if(checkWinner()){
                // Add message + remove eventListner.
                document.getElementById('winningMessage').textContent = `O Won`;
                parent.removeEventListener('click',printer);
                return;
            }
            x1.style.color = "#f0f0f0";   
            o1.style.color = "#4a4a4a";   
            turn = "X";
        }
        else{
            element.textContent = 'X';
            board_array[element.id] = "X";
            if(checkWinner()){
                // Add message + remove eventListner.
                document.getElementById('winningMessage').textContent = `X Won`;
                parent.removeEventListener('click',printer);
                return;
            }
            o1.style.color = "#f0f0f0";   
            x1.style.color = "#4a4a4a";   
            turn = "O";
        }
        // If all 9 move done & no one won - Draw
        if(total === 9){
            document.getElementById('winningMessage').textContent = `Draw`;
            x1.style.color = "#4a4a4a";   
            o11.style.color = "#4a4a4a";   
            parent.removeEventListener('click',printer);
        }
    }
}
parent.addEventListener('click',printer);

// Restart :
const reset = document.getElementById('restart');
reset.addEventListener('click',()=>{
    const cell = document.getElementsByClassName('cell');

    Array.from(cell).forEach((i)=>{ // each cell 0 to 9
        i.textContent = "";
    })

    // Other detail set to start 
    turn = "O";
    total = 0;
    board_array = new Array(9).fill("E");
    document.getElementById('winningMessage').textContent = ``;
    o1.style.color = "#f0f0f0";  
    x1.style.color = "#4a4a4a"; 
    document.getElementById('line1').style.display='none';
    document.getElementById('line2').style.display='none';
    document.getElementById('line3').style.display='none';


    // add back the event listner 
    parent.addEventListener('click',printer);

})