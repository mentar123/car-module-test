var menu = document.querySelector(".menu");
var partMenu = document.getElementById("part");
var dropDown = document.querySelector('.drop-down');
var mini = document.getElementById('mini');
var middle = document.getElementById('middle');
var premium = document.getElementById('premium');
var carArr = document.querySelector(".cars").children;
var carsParts = document.querySelector(".cars-parts");
var partWrapp = document.querySelectorAll(".part-wrapp");
var carPartsArr = document.querySelector(".cars-parts").children;
var classPremium = document.querySelector('.class-premium');
var classMini = document.querySelector('.class-mini');
var classMiddle = document.querySelector('.class-middle');
// Menu drop-down parts
partMenu.addEventListener('click',function(target){    
  let disp = getComputedStyle(dropDown).display;
  if(disp == 'block'){
      dropDown.style.display="none"
      carsParts.style.display ="none";
  }
  else{
    dropDown.style.display ='block';
    carsParts.style.display ="flex";
  }
});

// src replacement when choosing a car
  function newSrcImg (carName){
    for( var i=0;i<carArr.length;i++){
        var carSrc = carArr[i].src.split('/');
        for(a  in carSrc){
            if(carSrc[a] == "mazda"|| carSrc[a] == "citroen"|| carSrc[a] == "mercedes"){
                carSrc[a] = carName;
                carArr[i].src = carSrc.join('/');
            }
        }
    }
}
// selection of icons depending on the package of services
function selectPartsIcon (a,b,c,d,e,f,g,h,i,j,k,l){
let icon1 = a || false;
let icon2 = b || false;
let icon3 = c || false;
let icon4 = d || false;
let icon5 = e || false;
let icon6 = f || false;
let icon7 = g || false;
let icon8 = h || false;
let icon9 = i || false;
let icon10 = j || false;
let icon11 = k || false;
let icon12 = l || false;

carPartsArr[0].getAttribute('data-icon');
for(i = 0; i<carPartsArr.length; i++){
    if(carPartsArr[i].getAttribute("data-icon") == icon1 ||
       carPartsArr[i].getAttribute("data-icon") == icon2 ||
       carPartsArr[i].getAttribute("data-icon") == icon3 ||
       carPartsArr[i].getAttribute("data-icon") == icon4 ||
       carPartsArr[i].getAttribute("data-icon") == icon5 ||
       carPartsArr[i].getAttribute("data-icon") == icon6 ||
       carPartsArr[i].getAttribute("data-icon") == icon7 ||
       carPartsArr[i].getAttribute("data-icon") == icon8 ||
       carPartsArr[i].getAttribute("data-icon") == icon9 ||
       carPartsArr[i].getAttribute("data-icon") == icon10 ||
       carPartsArr[i].getAttribute("data-icon") == icon11 ||
       carPartsArr[i].getAttribute("data-icon") == icon12 
    ){
        carPartsArr[i].style.display = 'flex';
    }
    else{
        carPartsArr[i].style.display = 'none';
    }
}
}
// class selection
mini.addEventListener('click',function(e){
    e.preventDefault();
    newSrcImg('citroen');
    classPremium.classList.remove('arrow-down');
    classMiddle.classList.remove('arrow-down');
    classMini.classList.add('arrow-down');

});
// class selection
middle.addEventListener('click',function(e){
    e.preventDefault();
    newSrcImg('mazda');
    classPremium.classList.remove('arrow-down');
    classMiddle.classList.add('arrow-down');
    classMini.classList.remove('arrow-down');
});
// class selection
premium.addEventListener('click',function(e){
    e.preventDefault();
    newSrcImg('mercedes');
    classPremium.classList.add('arrow-down');
    classMiddle.classList.remove('arrow-down');
    classMini.classList.remove('arrow-down');
});
// tracking package selection
menu.onmouseover = function(event){
    let target = event.target;
    if(target.tagName == "LI" ){
        if(target.id == "part"){
            target.classList.add('arrow-part');
        }
        target.classList.add("arrow");
       
        let name = target.getAttribute('data-name');
        for(i = 0;i<carArr.length;i++){
            if(name == carArr[i].getAttribute('data-name') ){
                //drawing the machine depending on the service package
                carArr[i].style.display ='block'; 

                // selection of icons for service packages
                if(name == 'min'){
                    selectPartsIcon('internal-thresholds','door-ends','rear-bumper-shelf','mirrors','handles','optics');
                }
                if(name == 'standard'){
                    selectPartsIcon("part-hood","part-wings","front-bumper","mirrors","optics","handles","against-fog");
                }
                if(name == 'standard+'){
                    selectPartsIcon("hood","part-wings","front-bumper","mirrors",'optics',"handles","against-fog");
                }
                if(name == 'standard++'){
                    selectPartsIcon("hood","wings-completely","front-bumper","mirrors","optics","handles","against-fog")
                }
                if(name == 'standard+++'){
                    selectPartsIcon("hood","wings-completely","rear-bumper-shelf","mirrors","optics","handles","against-fog","front-bumper")
                }
                if(name == 'all'){
                    selectPartsIcon("hood","wings-completely","rear-bumper-shelf","mirrors","optics","handles","against-fog","front-bumper",'door-ends')
                }
                if(name == 'optics'){
                    selectPartsIcon('optics')
                }
                if(name == 'internal-thresholds'){
                    selectPartsIcon('internal-thresholds')
                }
                if(name == 'external-thresholds'){
                    selectPartsIcon('internal-thresholds')
                }
                if(name == 'doors'){
                    selectPartsIcon('door-ends')
                }
                if(name == 'rear-wing'){
                    selectPartsIcon("wings-completely")
                }
                if(name == 'hood'){
                    selectPartsIcon('hood')
                }
                if(name == 'front-bumper'){
                    selectPartsIcon('front-bumper')
                }
                if(name == 'rear-bumper'){
                    selectPartsIcon('rear-bumper')
                }


            }
            else if (name == 'part'){
                
            }
            else{
                carArr[i].style.display = 'none';
               
            }
        }
    }
};

menu.onmouseout = function(event){
    let target = event.target;
    if(target.tagName == "LI"){
        if(target.id == "part"){
            target.classList.remove('arrow-part');
        }
        target.classList.remove("arrow");

    }
};
