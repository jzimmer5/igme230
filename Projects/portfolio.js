    $("#close").click(function () { //when the minus is click this fucntion is called
        $("#mobileMenu").animate({ left: '-100' }, "slow"); //this moves the menu box to the position -100px
        $("#close").toggle(); //changes the minus to be not displayed
        $("#open").toggle(); //changes the plus to be displayed
    });

    $("#open").click(function () { //when the plus is click this fucntion is called
        $("#mobileMenu").animate({ left: '0px' }, "slow"); //moves the menu box to the postion 0px 
        $("#close").toggle(); //changes the minus to be displayed
        $("#open").toggle(); //changes the plus to not be displayed
    });

