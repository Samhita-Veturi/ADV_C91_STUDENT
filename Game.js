var Ply_1 = localStorage.getItem("Player-1");
var Ply_2 = localStorage.getItem("Player-2");

document.getElementById("P1_Name").innerHTML = Ply_1;
document.getElementById("P2_Name").innerHTML = Ply_2;

function Send(){
    Num_1 = document.getElementById("Num_1").value;
    Num_2 = document.getElementById("Num_2").value;
    Actual_Ans = parseInt(Num_1) * parseInt(Num_2);
    Ques_Num = "<h4>" + Num_1 + " X " + Num_2 + "</h4>";
    Input_B = "<br>Answer: <input type='text' id='I_Check'>";
    Button = "<br><br><button class='btn btn-info' onclick='Check()'>Check</button>";
    Row = Ques_Num + Input_B + Button;
    document.getElementById("Output").innerHTML = Row;
    document.getElementById("Num_1").value = "";
    document.getElementById("Num_2").value = "";
}