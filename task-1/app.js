const btn = document.querySelector('#btn');
btn.addEventListener('click',function(){
    const col = 'rgb('+random(225) +',' + random(225) + ',' + random(225)+ ')'
    document.body.style.backgroundColor= col;
}
);
function random(num)
{
    return Math.floor(Math.random() * (num+1))
}