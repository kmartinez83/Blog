
function myFunction(){
    var para = document.createElement("list");
    var input = document.getElementById("p").value;
    var i = document.createTextNode(input);
    para.appendChild(i);
    if (input === '') {
        alert("Please share something with me!");
    } else {
        document.getElementById("user").appendChild(para);
    }
    document.getElementById("p").value = "";

}
//Image

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#food')
                .attr('src', e.target.result)
                .width(150)
                .height(200);
        };

        reader.readAsDataURL(input.files[0]);
    }
}


