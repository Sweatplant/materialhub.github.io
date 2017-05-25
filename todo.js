  var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00A0\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}
// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}
// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);
// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("todoinput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    window.location = "https://player.vimeo.com/video/45196609?autoplay=1";
  }
  else if (inputValue === '#dodo') {
    window.location = "http://photos1.blogger.com/blogger/4718/1907/400/super_dodo.jpg";
  }
  else if (inputValue === '9001') {
    window.location = "https://68.media.tumblr.com/16d8269489d6c0a1da9575850a07acbb/tumblr_n5hbwzUzJ01soc18mo1_500.gif";
  }
  else if (inputValue === 'who you gonna call') {
    window.location = "https://media.tenor.co/images/27fabbb802d6f33c93d0b212f9ec2754/tenor.gif";
  }
  else if (inputValue === 'LOL') {
    window.location = "https://lh3.googleusercontent.com/-_uxXSAU7EoM/AAAAAAAAAAI/AAAAAAAAA78/sK_PfDopHsU/s640/photo.jpg";
  }
  else if (inputValue === 'i do not think that is right') {
    window.location = "https://www.google.nl/webhp?sourceid=chrome-instant&rlz=1CAACAJ_enNL679NL679&ion=1&espv=2&ie=UTF-8#q=How+late+is+it&*";
  }
  
    
  else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("todoinput").value = "";
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00A0\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}