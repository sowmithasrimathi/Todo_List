var idn = 0;

    function enter(name) {
        name = window.prompt("Enter Your Name");
        date = new Date();
        document.getElementById("time").innerHTML = date;
        document.getElementById("headfile").innerHTML = (name !== "" && name !== " ") ? "Hey, " + name + " " + findtime(date.getHours()) : "Hey, " + "Buddy " + findtime(date.getHours());
    }

    function findtime(value) {
        if ((value >= 5) && (value < 12)) {
            return "Good Morning ...!!!";
        }
        if ((value >= 12) && (value < 16)) {
            return "Good Afternoon...!!!";
        }
        if ((value >= 16) && (value < 20)) {
            return "Good Evening...!!!";
        }
        return "Good Night...!!!";
    }

    function clearvalue() {
        document.getElementById('list').innerHTML = '';
    }

    function addvalue(inputval) {
        inputval = document.getElementById("inputbox").value;
        if (inputval !== "" && inputval !== " ") {
            listitem(inputval);
            document.getElementById("inputbox").value = "";
        }
    }

    function listitem(listvalue) {
        var addlist = document.createElement("li");
        addlist.appendChild(document.createTextNode(listvalue));
        addlist.setAttribute("id", `li${idn}`);
        var btn = document.createElement("BUTTON");
        addlist.appendChild(btn);
        btn.innerHTML = "X";
        btn.setAttribute("class", "removebtn");
        btn.setAttribute("onclick", `document.getElementById('li${idn}').style.display='none'`);
        document.getElementById("list").appendChild(addlist).innerHTML;
        idn++;
    }