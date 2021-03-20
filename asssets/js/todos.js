// alert("connected");

//check off specific todos by clicking
//doing it leyman style :  ||
// $('li').click(function () { 
//     //if li is gray we will turn it black else turn it gray
//     if($(this).css("color") === "rgb(128, 128, 128)"){
//               ///change to black
//               $(this).css({
//                 color : "black",
//                 textDecoration: "none"       //when we use objects then we can't use "-"(hiphen) to write css declarations
//             });
//     }
//     //else
//     else{
//         $(this).css({
//             color : "gray",
//             textDecoration: "line-through"   //when we use objects then we can't use "-"(hiphen) to write css declarations
//         });
//     }
// });
                                                                                   
                                                            
// --> Doing it pro's style (using the class "completed" of css)

$("ul").on("click", "li",function () {
    $(this).toggleClass("completed");
})


//click on X to delete todo:         //avoiding event-bubbling - effects of parent elemnts appearing when child are clicked
   $("ul").on("click","span",function(event){
       $(this).parent().fadeOut(500,function()  //.parent willl take us to span's parent class i.e li and it will remove it
       {           
          $(this).remove();
       });   
       event.stopPropagation();        //this is a jquery method which will stop event bubbling
   });

//entering  new todos  (Creating todos) : 

$("input[type= text]").keypress(function (event) {
    if(event.which === 13){           //13 is "which no." for enter key
        //grabbing new todo text from input
      var todotext =  $(this).val();
      $(this).val("");   //acting as a setter rather than a getter
    //create a new li and add to ul  --  we will use append
    $("ul").append("<li><span><i class= 'fa fa-trash'></i></span> " +todotext+ "</li>");
    }
  });

  $(".fa-plus").click(function(){
    $("input[type= text]").fadeToggle();
  })


   
