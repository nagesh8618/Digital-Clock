let H = document.getElementById('Hours');
let M = document.getElementById('Minutes');
let S = document.getElementById('Second');


function Time(){
    let time = new Date();
    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();

    m = checktime(m);
    s = checktime(s);


H.innerHTML = h;
M.innerHTML = m;
S.innerHTML = s;

setTimeout(Time,1000);

}

function checktime(i){
    if( i < 10 ) {
        i = "0"+  i;
    }
    return i;
}