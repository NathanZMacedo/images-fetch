const form = document.getElementById("my-form");
form.addEventListener("submit",handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData();
    data.append("post[title]", event.target.title.value);
    submitToAPI(data);
}
async function submitToAPI(data){
    var responde = await fetch("http://localhost:3000/posts", {
        method: "POST",
        body: data,
    })
    var json = await responde.json()
    console.log(json)
}