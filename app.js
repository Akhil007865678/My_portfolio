function myfunction(){
    // document.getElementById("menu-part").style.display = "contents";
    //document.getElementsByClassName("part").style.display = "contents";

    var element = document.getElementById("menu-part"); // Replace "yourElementId" with the actual ID of your element
    var displayValue = window.getComputedStyle(element).getPropertyValue("display");
    
    if (displayValue === "none"){
        document.getElementById("menu-part").style.display = "contents";
        documnet.getElementById("leftSection").style.marginTop = "0px";
    }else{
        document.getElementById("menu-part").style.display = "none";
    }


}