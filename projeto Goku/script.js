const ligar = document.getElementById ( 'ligar' );
const desligar = document.getElementById ( 'desligar' );
const goku = document.getElementById ( 'goku' );


function auge(){
    return goku.src.indexOf ( 'gokub2' ) > -1
}


function transforma() {
    if ( !auge () ){
       goku.src = './img/goku b.png';
    }
}

function destranformar() {
    if ( !auge () ){
      goku.src = './img/goku.png';
    }
}

function poder() {
    goku.src = './img/gokub2.png';
    
}

ligar.addEventListener('click' , transforma);
desligar.addEventListener('click' , destranformar );

goku.addEventListener( 'mouseover' , transforma );
goku.addEventListener( 'mouseleave' , destranformar );

goku.addEventListener( 'dblclick' , poder );


