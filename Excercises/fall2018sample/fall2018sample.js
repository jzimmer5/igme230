/* Don't use <script> tags in a linked js file! */
$(document).ready(function() {
    $(".menuitem").click(function(){
        $(this).next(".submenu").toggle(1000);
    });
})

let context = "content1.txt";
let cString = `${context}`;
        $("#choose-content").val(context);
        $("#content").load(cString);

        $("#choose-content").change(function() {
            context = $(this).val();
            cString = `${context}`;
            $("#content").load(cString); 
        });
console.log(cString);