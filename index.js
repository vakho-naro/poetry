function dropFunction() {
    document.getElementById("navDrop").classList.toggle("show");
}

        window.onclick = function(event) {
            if (!event.target.matches('.target')) {
                var dropdowns = document.getElementsByClassName("nav__dropdown--content");
                var i;
                 for (i = 0; i < dropdowns.length; i++) {
                 var openDropdown = dropdowns[i];
                    if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
            }
    }
    }
}

// show poem

var toggler = document.getElementsByClassName("caret");
var i;

for (i = 0; i < toggler.length; i++) {
  toggler[i].addEventListener("click", function() {
    this.parentElement.querySelector(".nested").classList.toggle("active");
    this.classList.toggle("caret-down");
  });
}