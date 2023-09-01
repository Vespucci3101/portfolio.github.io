function SelectTab(event, gameName)
{
    var tablinks;
    tablinks = document.getElementsByClassName("tablinks");
    for (var i = 0; i < tablinks.length; i++)
    {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    document.getElementById(gameName).style.display = "block";
    event.currentTarget.className += " active";
}