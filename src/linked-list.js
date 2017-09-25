class TicTacToe { 
constructor() { 

this.number = 1; 
this.grid = [[null,null,null], 
[null,null,null], 
[null,null,null]]; 

} 


getCurrentPlayerSymbol() { 
if((this.number % 2) != 0){ 
return 'x'; 
} else { 
return 'o'; 
} 
} 


nextTurn(rowIndex, columnIndex) { 
if(this.getFieldValue(rowIndex,columnIndex)==null){ 
this.grid[rowIndex][columnIndex] = this.getCurrentPlayerSymbol(); 
this.number++; 
} 
} 

isFinished() { 
if (this.noMoreTurns() || this.getWinner()) { 
return true; 
} 

return false; 
} 

getWinner() { 
if( this.grid[0][0]=='x' && this.grid[1][0]=='x' && this.grid[2][0]=='x' || 
this.grid[0][1]=='x' && this.grid[1][1]=='x' && this.grid[2][1]=='x' || 
this.grid[0][2]=='x' && this.grid[1][2]=='x' && this.grid[2][2]=='x' || 

this.grid[0][0]=='x' && this.grid[0][1]=='x' && this.grid[0][2]=='x' || 
this.grid[1][0]=='x' && this.grid[1][1]=='x' && this.grid[1][2]=='x' || 
this.grid[2][0]=='x' && this.grid[2][1]=='x' && this.grid[2][2]=='x' || 

this.grid[0][0]=='x' && this.grid[1][1]=='x' && this.grid[2][2]=='x' || 
this.grid[2][0]=='x' && this.grid[1][1]=='x' && this.grid[0][2]=='x') 
{ 
return 'x'; 
} 
else if( 

this.grid[0][0]=='o' && this.grid[0][1]=='o' && this.grid[0][2]=='o' || 
this.grid[1][0]=='o' && this.grid[1][1]=='o' && this.grid[1][2]=='o' || 
this.grid[2][0]=='o' && this.grid[2][1]=='o' && this.grid[2][2]=='o' || 

this.grid[0][0]=='o' && this.grid[1][0]=='o' && this.grid[2][0]=='o' || 
this.grid[0][1]=='o' && this.grid[1][1]=='o' && this.grid[2][1]=='o' || 
this.grid[0][2]=='o'&& this.grid[1][2]=='o' && this.grid[2][2]=='o' || 

this.grid[0][0]=='o' && this.grid[1][1]=='o' && this.grid[2][2]=='o'|| 
this.grid[2][0]=='o' && this.grid[1][1]=='o' && this.grid[0][2]=='o' ) 
{ 
return 'o'; 
} else 
return null; 
} 

noMoreTurns() { 
if( this.grid[0][0]!=null && this.grid[1][0]!=null && this.grid[2][0]!=null 
&& this.grid[0][1]!=null && this.grid[1][1]!=null && this.grid[2][1]!=null
&& this.grid[0][2]!=null && this.grid[1][2]!=null && this.grid[2][2]!=null) 
{ 
return true; 
} else { 
return false; 
} 
} 
isDraw() { 
if((this.noMoreTurns()== false)|| (this.getWinner()!=null)){ 
return false; 
} else 
return true; 
} 
getFieldValue(rowIndex, colIndex) { 
return this.grid[rowIndex][colIndex]; 
} 
} 
module.exports = TicTacToe;
