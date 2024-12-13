"use strict;"

const MAX_CELL = 8;
const PAWN_ROWS = [1, 6];
const EMPTY_ROWS = [2, 3, 4, 5];
const BLACK_ROWS = [0, 1];

let not_pawns = ['rook', 'knight', 'bishop', 'queen', 'king', 'bishop', 'knight', 'rook'];
let unicode_piece = {
  'pawn' :    {'black' :'&#9823;', 'white' : '&#9817;'},
  'rook' :    {'black' :'&#9820;', 'white' : '&#9814;'},
  'queen' :   {'black' :'&#9819;', 'white' : '&#9813;'},
  'knight' :  {'black' :'&#9822;', 'white' : '&#9816;'},
  'bishop' :  {'black' :'&#9821;', 'white' : '&#9815;'},
  'king' :    {'black' :'&#9818;', 'white' : '&#9812;'},
}

let cell, piece;
let board = document.querySelector('#board');

for(let i = 0; i < MAX_CELL; ++i) {
    for(let j = 0; j < MAX_CELL; ++j) {

        //createas an empty cell
        cell = document.createElement('div');
        cell.className = ((i + j) % 2 == 0) ?  'cell black' : 'cell white';

        // is it an empty cell ?
        if(!EMPTY_ROWS.includes(i))
        {
          piece = document.createElement('i');

          if(PAWN_ROWS.includes(i))
          {
            piece.innerHTML =  isBlack(i) ? unicode_piece.pawn.black : unicode_piece.pawn.white;
          }
          else{
             piece_index = j;
             piece_index = isBlack(i) ? ((piece_index == 3) ? 4 : (piece_index == 4)? 3 : piece_index) : piece_index;

             piece.innerHTML = unicode_piece[not_pawns[piece_index]][isBlack(i) ? 'black' : 'white'];
          }
          cell.appendChild(piece);
        }
        board.appendChild(cell);
    }
}

function isBlack(row){
  return BLACK_ROWS.includes(row);
}
