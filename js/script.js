// Get reference to the link elements
const tabSquare = document.getElementById("square-link");
const tabRectangle = document.getElementById("rectangle-link");

// Get reference to the page elements
const pageSquare = document.getElementById("page-square");
const pageRectangle = document.getElementById("page-rectangle");

// Event listeners to handle click events
tabSquare.addEventListener("click", setActivePage);
tabRectangle.addEventListener("click", setActivePage);

// Function to set the active page
function setActivePage(event) {
    // Change active link
    tabSquare.classList.remove('active');
    tabRectangle.classList.remove('active');

    //Add active class to the clicked link
    const clickedLink = event.target;
    clickedLink.classList.add("active");

    // Hide inactive page
    pageSquare.classList.remove("active");
    pageRectangle.classList.remove("active");

    // Get ID of the clicked link
    const clickedLinkId = event.target.id;

    // Show the Page
    if (clickedLinkId === "square-link") {
        pageSquare.classList.add("active");
    } else if (clickedLinkId === "rectangle-link") {
        pageRectangle.classList.add("active");
            }
}

// Persegi

// Make button function to get output for Luas Persegi from the input value
function hitungLuas() {
    // Get the value from the input
    var sisiLuas = document.getElementById("sisi-luas").value;
    var output = document.getElementById("output-luas");

    // Print text and result for the output
    document.getElementById("rumus-luas").innerHTML = sisiLuas + ' x ' + sisiLuas;
    document.getElementById("result-luas").innerHTML = sisiLuas*sisiLuas
    
    // Display the output paragraph 
    output.style.display = "block";
}

// Make the reset function to hide the output Luas Persegi
function resetLuas(flag) {
    document.getElementById("output-luas").style.display = flag === 1 ? 'block' : 'none';
    document.getElementById("sisi-luas").value = '';
}

// Make button function to get output for Keliling Persegi from the input value
function hitungKeliling() {
    var sisiKeliling = document.getElementById("sisi-keliling").value;
    var output = document.getElementById("output-keliling");

    document.getElementById("rumus-keliling").innerHTML = sisiKeliling + ' x 4';
    document.getElementById("result-keliling").innerHTML = sisiKeliling*4
    
    output.style.display = "block";
}

// Make the reset function to hide the output Keliling Persegi 
function resetKeliling(flag) {
    document.getElementById("output-keliling").style.display = flag === 1 ? 'block' : 'none';
    document.getElementById("sisi-keliling").value = '';
}

// Persegi Panjang

// Make button function to get output for Luas Persegi Panjang from the input value
function hitungLuasRectangle() {
    var panjangLuas = document.getElementById("panjang-luas").value;
    var lebarLuas = document.getElementById("lebar-luas").value;
    var output = document.getElementById("output-luas-r");

    document.getElementById("rumus-luas-r").innerHTML = panjangLuas + ' x ' + lebarLuas;
    document.getElementById("result-luas-r").innerHTML = panjangLuas*lebarLuas
    
    output.style.display = "block";
}
   
// Make the reset function to hide the output Luas Persegi Panjang
function resetLuasRectangle(flag) {
    document.getElementById("output-luas-r").style.display = flag === 1 ? 'block' : 'none';
    document.getElementById("panjang-luas").value = '';
    document.getElementById("lebar-luas").value = '';
}

// Make button function to get output for Keliling Persegi Panjang from the input value
function hitungKelilingRectangle() {
    const panjangKeliling = document.getElementById("panjang-keliling").value;
    const lebarKeliling = document.getElementById("lebar-keliling").value;
    var output = document.getElementById("output-keliling-r");
    const totalKeliling = parseInt(panjangKeliling, 10) + parseInt(lebarKeliling, 10)

    document.getElementById("rumus-keliling-r").innerHTML = '2 x (' + panjangKeliling + ' + ' + lebarKeliling + ')';
    document.getElementById("result-keliling-r").innerHTML = 2*totalKeliling
    
    output.style.display = "block";
}

// Make the reset function to hide the output Keliling Persegi Panjang
function resetKelilingRectangle(flag) {
    document.getElementById("output-keliling-r").style.display = flag === 1 ? 'block' : 'none';
    document.getElementById("panjang-keliling").value = '';
    document.getElementById("lebar-keliling").value = '';
}