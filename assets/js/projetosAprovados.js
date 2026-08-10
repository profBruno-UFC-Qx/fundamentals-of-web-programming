document.addEventListener('readystatechange', event => { 

    // When window loaded ( external resources are loaded too- `css`,`src`, etc...) 
    if (event.target.readyState === "complete") {
        const appUrl = "https://script.google.com/macros/s/AKfycbwQvGEuLzv8uDbY4lJ9rR4ZUWc7OGNpd3slFrb1TF2vbbDlEjzxadLnyvwL7BgkxHVXIQ/exec"
        const sheetUrl = "1Y66APybUKA923N-jK7_Iyhz--NbHmK9aGv2V2T7sveg"

        if(sheetUrl != ""){
            const url = appUrl + "?id=" + sheetUrl ;
            const table = document.getElementById("aprovados");
            fetch(url)
            .then(data => {return data.clone().json();})
            .then(res =>  { 
                const descriptions = res['descriptions'];
                for(let i in descriptions) {

                    if(descriptions[i][0].length == 0 ) continue;

                    const row = table.insertRow(-1);
                    const number = row.insertCell(0);
                    const project = row.insertCell(1);
                    const desc = row.insertCell(2);

                    number.appendChild(document.createTextNode(parseInt(i) + 1));
                    project.appendChild(document.createTextNode(descriptions[i][0]));
                    desc.appendChild(document.createTextNode(descriptions[i][1]));

                }
            })
            .catch(error => { console.log(error); });
        }
    }
});
