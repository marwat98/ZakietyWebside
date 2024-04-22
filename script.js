document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('click').checked = true;
});

let counter = 1;
setInterval(function(){
    document.getElementById('dot' + counter).checked = true;
    counter++;
    if(counter > 3){
        counter = 1;
    }
}, 5000);

