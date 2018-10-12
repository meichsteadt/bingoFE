$(function() {
  for(var i = 0; i < $('.col').length; i++) {
    $($('.col')[i]).append('<h2 class="marker">O</h2>')
    var index = strip($($('.col')[i]).attr('id'));
    if(index != 22)
    $($('.col')[i]).append('<h1>' + getBoard()[index[0]][index[1]] + '</h2>')
  }

  $('.col').on('click', function() {
    var str = ("#" + $(this).attr("id") + " h2")
    $(str).toggleClass('show')
  })

  $('#col22 .marker').toggleClass('show');

  getBoard();
  makeBEBoard();
})


// Backend Logic

function getBoard() {
  // $().get("http://localhost:3000/board")
  var board = []
  for(var i = 0; i < 5; i ++){
    board.push([]);
    for(var j = 0; j < 5; j ++) {
      var str = "" + parseInt(i) + parseInt(j);
      board[i].push(str)
    }
  }
  return board;
}

function makeBEBoard() {
  var board = getBoard();
  var bEBoard = [];
  for (var i = 0; i < board.length; i++) {
    bEBoard.push([])
    for (var j = 0; j < board[i].length; j++) {
      bEBoard[i].push({});
      bEBoard[i][j][board[i][j]] = false;
    }
  }
  console.log(bEBoard);
}

function checkWin() {

}

function strip(col) {
  var str = "";
  for(var i = 0; i < col.length; i ++) {
    if(i > 2) {
      str += col[i]
    }
  }
  return str;
}
