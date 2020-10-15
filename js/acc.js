$(document).ready(function () {
		$('.leftpanel ul li').click(function(e) {
			$('.leftpanel ul li').removeClass('active1');

			$this = $(this);
			if (!$this.hasClass('active1')) {
				$this.addClass('active1');
			}
			//e.preventDefault();
		});
	});
	
	var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}