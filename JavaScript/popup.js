function populate(d1, d2)
{
    var d1 = document.getElementById(d1);
    var d2 = document.getElementById(d2); 
    
    d2.innerHTML = "";
    if(d1.value == "qwer")
    {
        var optioArray = ['qwer|asklj','sdfs'];
    }
    for(var option in optioArray )
    {
        var pair = optioArray[option].split("|");
        var newoption = document.createElement("option");
        newoption.value = pair[0];
        newoption.innerHTML = pair[1];
        d2.option.add(newoption);
    }
}