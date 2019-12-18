if(screen.width < 699){
    document.location = "mobile.html";
}
function addField(){
    var heading=document.getElementById("new_header").value;
    var url=document.getElementById("new_url").value;

var h = "";
h=`<div class="grid-element">
                    <h2>`+heading+`</h2>
                    <div class="grid-items">
                        <img class="bgimgg" src=`+url+` alt="">
                    </div>
                    <a href="">See More</a>
                </div>`


var position = document.getElementById('grid-container1');
position.insertAdjacentHTML("afterbegin",h);
document.getElementById('new_header').value = '';
document.getElementById('new_url').value = '';
}