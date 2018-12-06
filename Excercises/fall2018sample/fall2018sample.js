/* Don't use <script> tags in a linked js file! */
$(document).ready(function() {
    $(".menuitem").click(function(){
        $(".submenu").toggle(1000);
    });
})