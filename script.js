var a = document.querySelectorAll(".exercise10 .header .menu a");
for (var i = 0, length = a.length; i < length; i++) {
  a[i].onclick = function() {
    var b = document.querySelector(".exercise10 .header .menu li.active");
    if (b) b.classList.remove("active"); 
      this.parentNode.classList.add('active');
  };
};

var a = document.querySelectorAll(".exercise11 .header .menu a");
for (var i = 0, length = a.length; i < length; i++) {
  a[i].onclick = function() {
    var b = document.querySelector(".exercise11 .header .menu li.active");
    if (b) b.classList.remove("active"); 
      this.parentNode.classList.add('active');
  };
};
