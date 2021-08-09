const api_url = "https://api.punkapi.com/v2/beers"
async function getBeers(){
    const response = await fetch(api_url);
    const data = await response.json();
    console.log(data);


    var newData = JSON.stringify(data)

    var obj = JSON.parse(newData)

    console.log(obj[0].name)
    console.log(obj[0].id)

    
    for(var i = 0 ; i < obj.length ; i++){
        var h1 = document.createElement('h1');
        var p = document.createElement('p');
        var btn = document.createElement('button');
        var img = document.createElement('img');


        h1.classList.add("title")
        btn.classList.add("btn")
        p.classList.add("tagline")



        var divBeers = document.createElement('div');

        h1.textContent = obj[i].name
        btn.innerHTML = "see more"
        p.textContent = obj[i].tagline
        
        divBeers.appendChild(h1);
        divBeers.appendChild(p);
        divBeers.appendChild(btn);
        divBeers.appendChild(img);

        document.body.appendChild(divBeers);

    }
    
}

getBeers();

