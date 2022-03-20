window.onload = () => {
    fetchData();
}

let url = "http://localhost/api/twitter";

const fetchData = () => {

    document.getElementById("main").innerHTML = url;
}