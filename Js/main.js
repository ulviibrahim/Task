
    $(document).ready(function(){
      $('.slider').bxSlider()
    });
 
    $( ".rate ul li").find(".end-star").css({ color:"gray" })


    var coll = document.getElementsByClassName("collapsible");
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

    $(".Filter-hidden").click(function(){
      $(".filter-devices #filters ").toggleClass("d-none")
    })
// $(".navbar-toggler").click(function(){
 
      
//        if( $(".navbar-toggler").hasClass("collapsed")){
//         $("header").css("background-color","white")

//     }
//    })