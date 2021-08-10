const api_url = "https://api.punkapi.com/v2/beers?per_page=10"
async function getBeers(){
    const response = await fetch(api_url);
    const data = await response.json();
    console.log(data);


    var newData = JSON.stringify(data)

    var obj = JSON.parse(newData)

    // console.log(obj[0].name)
    // console.log(obj[0].id)

    const container = document.getElementsByClassName('container')[0];
    const position = document.getElementsByClassName('position')[0];
    
    container.appendChild(position);

    for(var i = 0 ; i < obj.length ; i++){
       

        
        var h1 = document.createElement('h1');
        var p = document.createElement('p');
        var btn = document.createElement('button');
        var img = document.createElement('img');
        var divBeers = document.createElement('div');

        var divText= document.createElement('div')
        var divImg = document.createElement('div')

        h1.classList.add("title")
        p.classList.add("tagline")
        btn.classList.add("btn")
        divBeers.classList.add("divBeers")
        divText.classList.add("divText")
        divImg.classList.add("divImg")
        
        position.appendChild(divBeers);

        if( i%2 == 1){
            divBeers.appendChild(divImg);
            divBeers.appendChild(divText)
            divImg.classList.add("imgLeft")
            divText.classList.add("textLeft")

        }else{
            divBeers.appendChild(divText);
            divBeers.appendChild(divImg);
            divImg.classList.add("imgRight")
            divText.classList.add("textRight")

        }
       

        h1.textContent = obj[i].name
        btn.innerHTML = "see more"
        p.textContent = obj[i].tagline
        img.src= obj[i].image_url

        divText.appendChild(h1);
        divText.appendChild(p);
        divText.appendChild(btn);
        divImg.appendChild(img);

        

    }
    
}

getBeers();
