function hitungLuas() {
    var sisiLuas = document.getElementById("sisi-luas").value;
    var output = document.getElementById("output-luas");

    document.getElementById("rumus-luas").innerHTML = sisiLuas + ' x ' + sisiLuas;
    document.getElementById("result-luas").innerHTML = sisiLuas*sisiLuas
    
    output.style.display = "block";
}
    
function resetLuas(flag) {
    document.getElementById("output-luas").style.display = flag === 1 ? 'block' : 'none';
    document.getElementById("sisi-luas").value = '';
}

function hitungKeliling() {
    var sisiKeliling = document.getElementById("sisi-keliling").value;
    var output = document.getElementById("output-keliling");

    document.getElementById("rumus-keliling").innerHTML = sisiKeliling + ' x 4';
    document.getElementById("result-keliling").innerHTML = sisiKeliling*4
    
    output.style.display = "block";
}

function resetKeliling(flag) {
    document.getElementById("output-keliling").style.display = flag === 1 ? 'block' : 'none';
    document.getElementById("sisi-keliling").value = '';
}