const html = document.getElementById("home")
const api = "https://api.tvmaze.com/shows";

async function getdata()
{


    let result =  await fetch(api);
    if(!result) return;

    let jsondata = await result.json();

    for(let i of jsondata.slice(0 , 14  )){

        html.innerHTML += addHtml(i.image.medium, i.name, i.schedule)

    }  
     arandomFromArray() ;

} 

function randomFromArray(result) {
  let index = Math.floor(Math.random() * result.length);
  return result[index];
}

function addHtml(img, title, time)
{
    let html = `
    <div class="movie-card ">
        <img class="img" src="${img}">
        <div class="overlay">
            <h1>${title}</h1>
            <h2>${time}</h2>
            <span>⭐ 7.9</span>
        </div>
    </div>
    `
    return html
}

getdata();