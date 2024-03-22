document.getElementById("btn").addEventListener("click",()=>{

    //first input
    let inputarea =document.getElementById("text");
    let frstoutput = inputarea.value
    document.getElementById("Name").innerHTML = frstoutput;
    
    //second input
    let fatherarea = document.getElementById("father");
    let scndoutput = fatherarea.value
    document.getElementById("Father").innerHTML = scndoutput;

    //third input
    let degreearea = document.getElementById("degree");
    let thirdoutput = degreearea.value
    document.getElementById("Degree").innerHTML = thirdoutput;

    //fourth input
    let agearea = document.getElementById("age");
    let fourthoutput = agearea.value
    document.getElementById("Age").innerHTML = fourthoutput;

    //fifth input
    let genderarea = document.getElementById("gender");
    let fifthoutput = genderarea.value
    document.getElementById("Gender").innerHTML = fifthoutput
});
document.getElementById("btn").addEventListener("click",()=>{
    let firstname =document.getElementById("text").value

    document.getElementById("output").style.display="flex"

    document.getElementById("Name").innerHTML =firstname
})
document.getElementById("inputfile").addEventListener('change', function(e){
    var file = e.target.files[0];
    var reader = new FileReader();

    reader.onload = function(e){
        document.getElementById("imagePreview").innerHTML = '<img src="' + e.target.result
        + '" alt="Image" width="180px" height="220px">';
    };
    reader.readAsDataURL(file)
} )


