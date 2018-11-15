var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        //TODO If response received (success).
        object = JSON.parse(this.responseText);
        //console.log(this.responseText);
        var challengesList = document.getElementById("challenges")
        for (var i = 0; i < object.treasureHunts.length; i++) {
            var newTreasureHunt = document.createElement("li");
            var linkElement = document.createElement("a");
            linkElement.innerHTML = object.treasureHunts[i].name;
            linkElement.href = "https://codecyprus.org/th/api/start?player=Homer&app=simpsons-app&treasure-hunt-id=" + object.treasureHunts[i].uuid;
            challengesList.appendChild(newTreasureHunt);
            newTreasureHunt.appendChild(linkElement);
        }
    }
    else {
        //TODO If response not received (error).
    }
};
xhttp.open("GET", "https://codecyprus.org/th/api/list", true);
xhttp.send();
document.cookie = "firstname = john;lastname = smith";

console.log(document.cookie);