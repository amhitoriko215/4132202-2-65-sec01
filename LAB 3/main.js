
    var num = 10;
    let name = "M";
    //let Array = [10,15,"M"]
    const obj = {name:"M",age: 22}
    const objMix = {
        data:[
            {name:"Ma",gpa:2.2},
            {name:"Meaw",gpa:3.0},
        ],
    };
 
    console.log(num);
    console.log(Array);
    console.log(objMix);
 
    let string = num + name;
    console.log(string);
 
    string = objMix.data[1].name + Array[0];
    console.log(string);
 
    string = "<p>" + Array[2] + "</p>"
    string = `<p> ${Array} </p>`;
 
    console.log(string);
 
    function Add(a, b) {
        return a + b;
    }
 
    console.log(Add (3, 5));
 
    document.getElementById("div1").innerHTML = name;
 
    $(function () {
        //alert("Hello");
        $("#div1").html("Kokiad")
 
        $("#bt1").click(function name () {
            $("#div1").html("น้ำจิ้มแจ่ว!!");
        });
 
        $("#bt1").click(function name () {
            $("#div1").html("น้ำจิ้มแจ่ว!!");
        });
 
            $("#bt3").click(() => {    
            $(".in1").val("BRU");
        });
       
        $("#bt4").click(() => {    
            $(".in1:odd").addClass("red");
        });
 
        $("#div_about").load("./pages/about.html");
 
    }); //jQuery Handle
 
 