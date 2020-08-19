 document.getElementById("result").innerHTML = localStorage.getItem("Name");
        document.getElementById("result2").innerHTML = localStorage.getItem("Address");
        document.getElementById("result3").innerHTML = localStorage.getItem("Email");
        document.getElementById("result4").innerHTML = localStorage.getItem("Phone No.");
        document.getElementById("result5").innerHTML = localStorage.getItem("Hobbies");
        document.getElementById("result6").innerHTML = "Studied :- "+localStorage.getItem("Level")+" In Year "+localStorage.getItem("Year")+" With Grade "+ localStorage.getItem("Grade")+"";
        document.getElementById("result7").innerHTML = "You got :- "+localStorage.getItem("Skills")+" In your skills With Rating "+ localStorage.getItem("Rating")+"";
        document.getElementById("result8").innerHTML = localStorage.getItem("Photo");