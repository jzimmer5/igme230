$(document).ready(function() {
    $(".mainmenu").click(function(){
        $(this).next(".submenu").toggle(1000);
    });
})

let article = "article0.txt";
let aString = `${article}`;
        $("article").load(aString);

        $("#choose-content").change(function() {
            article = $(this).val();
            aString = `${article}`;
            $("#article").load(aString); 
        });
        var radioButtons = document.getElementsByName("content");
        if(radioButtons[1].checked)
        {
            article = "article1.txt";
            aString = `${article}`;
            $("article").load(aString)
        }