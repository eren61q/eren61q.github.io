const params = new URLSearchParams(window.location.search);
const id = params.get("id");

fetch("data.json")
.then(res => res.json())
.then(data => {

    const user = data[id];

    if(!user){
        document.body.innerHTML =
        "<h2>Kayıt bulunamadı</h2>";
        return;
    }

    document.getElementById("name").innerText = user.name;
    document.getElementById("blood").innerText = user.blood;
    document.getElementById("allergy").innerText = user.allergy;

    const phoneLink = document.getElementById("phone");
    phoneLink.href = "tel:" + user.phone;
});
