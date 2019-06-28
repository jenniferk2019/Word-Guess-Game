var $ = function (id) {
    return document.getElementById(id);
}

var words = ["moon", "star", "mars", "venus", "jupiter", "mercury", "artemis", "tuxedo", "luna", "crystal", "power", "love", "sailor"];
var choice = Math.floor(Math.random() * words.length)
var answer = words[choice];
var myLength = answer.length;
var display=[myLength];
var win = myLength;
var letters = answer.split('');
var attemptsLeft= 10;
var output="";
var userLetter="";

var setup = function()
{
    for (var i=0; i< answer.length; i++)
    {
        display[i] = "- ";
        output = output + display[i];
    }
    document.getElementById("words").innerHTML = output;
    output ="";
}

var submit = function()
{
    output = "";
    userLetter=$("letter").value;
    $("letter").value = "";

    for (var x=0; x<answer.length; c++)
    {
        alert(letters[x]);
        if (userLetter.toLowerCase() == letters[x])
        {
            display[x] = userLetter.toLowerCase();
            win--;
        }
        output = output + display[x] + " ";
    }
    
}
