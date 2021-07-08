var container = document.getElementById("container");

var paraad = container.childNodes[1].innerHTML = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, cum eum! Temporibus, expedita dolores. Adipisci quibusdam dolor unde aliquam quos laborum quisquam maxime esse dolore, perferendis ipsam sequi qui animi.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, cum eum! Temporibus, expedita dolores. Adipisci quibusdam dolor unde aliquam quos laborum quisquam maxime esse dolore, perferendis ipsam sequi qui animiLorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, cum eum! Temporibus, expedita dolores. Adipisci quibusdam dolor unde aliquam quos laborum quisquam maxime esse dolore, perferendis ipsam sequi qui animi"


var buttonName = container.childNodes[5].innerHTML = "YELLOW BG" 

var buttonOnclick = container.childNodes[5].setAttribute("onClick" , "myFunction()")

var buttonOnclick = container.childNodes[5].setAttribute("class" , "yellow-bg")

console.log(container.childNodes[5])




function myFunction(){

var container = document.getElementById("container");


if(container.childNodes[5].innerHTML == "YELLOW BG"){

    var buttonName = container.childNodes[5].innerHTML = "DARK BG" 

    var darkButton = container.childNodes[5].setAttribute("class" , "dark-bg");

    var yellowBG = container.style.backgroundColor = "yellow" ; 

    var paraColor = container.style.color = "black"


}

else if(container.childNodes[5].innerHTML == "DARK BG"){


    var buttonName = container.childNodes[5].innerHTML = "YELLOW BG" 

    var returnYellow  = container.childNodes[5].setAttribute("class" , "return-yellow")

    var yellowBG = container.style.backgroundColor = "#1F1B24" ; 

    var paraColor = container.style.color = "white"



}


}