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
        var modalImg = document.createElement('img')
        var modalTitle = document.createElement('h1');
        var modalTagline = document.createElement('h3')
        var modalDescription = document.createElement('p')
        var modalAbv = document.createElement('h5')
        var modalIbu = document.createElement('h5') 
        var modalEbcSrm = document.createElement('h5') 
        var modalMalt = document.createElement('h5') 
        var modalYeast = document.createElement('h5') 

        modalTitle.textContent = obj[i].name
        modalTagline.textContent = obj[i].tagline
        modalDescription.textContent = obj[i].description
        modalAbv.innerHTML = "ABV" + obj[i].abv
        modalIbu.innerHTML = "Ibu" + obj[i].ibu
        modalEbcSrm.textContent ="Ebc/Srm" +  obj[i].ebc + "/" + obj[i].srm

        var text = "";
        for(var j = 0; j < obj[i].ingredients.malt.length; j++){
          text += obj[i].ingredients.malt[j].name + "<br>"
        }
        modalMalt.innerHTML = text
        modalYeast.textContent= obj[i].ingredients.yeast

        
        var modal = document.createElement("modal");
        modal.classList.add("modal");
        var contain = document.createElement('contain');
        var contenuLeft = document.createElement('contenuLeft')
        var contenuRight = document.createElement('contenuRight')
        var closeBtn = document.createElement('span');
        closeBtn.innerHTML = "X"
        closeBtn.classList.add('close-btn')
        contain.classList.add('contain')

        modal.appendChild(contain);
        contain.appendChild(contenuLeft)
        contain.appendChild(contenuRight);
        contenuLeft.appendChild(modalImg);
        contenuRight.appendChild(modalTagline);
        contenuRight.appendChild(modalDescription);
        contenuRight.appendChild(modalAbv);
        contenuRight.appendChild(modalIbu);
        contenuRight.appendChild(modalEbcSrm);
        contenuRight.appendChild(modalMalt);
        contenuRight.appendChild(modalYeast);

        contenuLeft.appendChild(closeBtn);

        contenuLeft.classList.add("leftImage")
        contenuRight.classList.add("rightText")

        btn.onclick = function(){
          document.getElementById("modal" + this.id).style.display = "block"
        }
        closeBtn.onclick = function(){
          document.getElementById("modal" + this.id).style.display = "none"
        }
    
        var divText= document.createElement('div')
        var divImg = document.createElement('div')

        h1.classList.add("title")
        p.classList.add("tagline")
        btn.classList.add("btn")
        btn.setAttribute("id", i);
        modal.setAttribute("id", "modal" + i)
        closeBtn.setAttribute("id", i)
        divBeers.classList.add("divBeers")
        divText.classList.add("divText")
        divImg.classList.add("divImg")
        modalImg.classList.add('modalImg')
        
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

        divBeers.appendChild(modal);

    }
}


getBeers();

