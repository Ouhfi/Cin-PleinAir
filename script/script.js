
const api = "https://api.tvmaze.com/shows";

async function getdata(){


    let result =  await fetch(api);
    if(!result) return;

    let jsondata = await result.json();

    for(let i of jsondata.slice(0 , 6)){


    }
        
    


    
} 