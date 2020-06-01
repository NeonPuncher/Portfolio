console.log("scriptwerktveryepic")

//https://nl.wikipedia.org/w/api.php?action=opensearch&search=Te

const zoekveld = document.getElementById('zoekterm');
const contentBox = document.getElementById('content');
zoekveld.addEventListener('input', e => {
    contentBox.innerHTML = zoekveld.value;
    const apiURL = "https://nl.wikipedia.org/w/api.php?action=opensearch&search=" + zoekveld.value;
    fetch(apiURL, {mode: "no-cors"})
    .then(res => res.json())
    .then(json => {
        console.log(json);
    });
});
