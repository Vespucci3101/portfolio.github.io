function SelectTab(event)
{
    var tablinks;
    tablinks = document.getElementsByClassName("tablinks");
    for (var i = 0; i < tablinks.length; i++)
    {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    event.currentTarget.className += " active";
}