const postContainer=document.querySelector('#albums');

window.addEventListener("DOMContentLoaded", usemyapi);

async function usemyapi(){

    const unvan = "album.json";

    try{
        const istekatmaq = await fetch(unvan);
        if(!istekatmaq.ok){
        throw new Error;
       }

        const mainData = await istekatmaq.json();
        

        for(let i=0;i<mainData.length;i++){
            postContainer.innerHTML += `
            
            <div class="box">
            <h1>${mainData[i].Album}</h1>
            <p class="singer">${mainData[i].Singer}</p>
            <p class="year">${mainData[i].Year}</p>
            <p class="desc">${mainData[i].desc}</p>
           </div>
            
            `
        }
    }


    catch(error){
        console.log(error);
    }

}