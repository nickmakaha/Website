


let start = true

var hey = new Typed(".auto-type", 
{

    strings: ["Hi, ^600I'm Nick"],
    typeSpeed: 60,
    backSpeed: 100,
    startDelay: 300,
   
    showCursor: true,
    cursorChar: '_', 

})

var quicklinks = new Typed(".auto-type2", 
{

    strings: ["It's dangerous to go alone, take these: "],
    typeSpeed: 15,
    backSpeed: 100,
    startDelay: 2000,
   
    showCursor: true,
    cursorChar: '_', 
    onComplete: function(self) { self.cursor.remove() }


})



setTimeout(function(){
    $('.button1').css({'opacity':'1'})
    $('.button2').css({'opacity':'1'})
    $('.button3').css({'opacity':'1'})
}, 3300);






var coll = document.getElementsByClassName("collapsible1");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}


function changeText  () {
  var change = document.getElementById("changingbreak");
  var btn = document.getElementById("btnfacts");
  var cnt = +btn.getAttribute("datacnt")
  strings = ["I once broke into my university's grading system (whoops)", "I consider myself a hot chocolate connoisseur.", "My introduction to programming was through importing mod menus onto my PS3 around the age of 9.", "The first language I ever learned was GSC. It's a branch of C built for developing maps and mods in Activision games.", "After GSC,  I learned C++. I did this so I could start editing memory to develop hacks for video games."]
  var pos = 0;
  
  change.innerText = strings[cnt];
  var t = cnt+1;
  if(t > 4)
  {
    btn.setAttribute('datacnt', 0);
  }
  else
  {
    btn.setAttribute('datacnt', t);
  }
 
  

    
}


