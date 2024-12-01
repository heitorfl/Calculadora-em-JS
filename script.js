function insert(num){
    let numero = document.getElementById('res').innerHTML;
    document.getElementById('res').innerHTML = numero + num;
}

function clean(){
    document.getElementById('res').innerHTML= null;
}

function back(){
    let res = document.getElementById('res').innerHTML;
    document.getElementById('res').innerHTML = res.substring(0, res.length -1);
}

function calc(){
    let res = document.getElementById('res').innerHTML;
    if(res){
        document.getElementById('res').innerHTML = eval(res);
    }
}