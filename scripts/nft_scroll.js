const nft_board = document.getElementsByClassName('nft_board')[0]
const nft_arr =nft_board.children

let width = nft_board.clientWidth / 9
let interval = setInterval(move,3540)

nft_board.style.left ='-'+width + 'px'

function move(){
    let width = nft_board.clientWidth / 9
    nft_board.className = 'nft_board'
    nft_board.style.left ='0px'
    nft_board.append(nft_arr[0])

    window.setTimeout(function(){
        nft_board.className ='nft_board nft_board_transition'
        nft_board.style.left ='-'+width + 'px'
    },20)
    
}
