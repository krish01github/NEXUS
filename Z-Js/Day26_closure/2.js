let g = 10;
function gf(){
    let g = 20;
    console.log(g);
    function bf(){
        let g = 80;
        console.log(g);
    }
    bf();
}
gf();