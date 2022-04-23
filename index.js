
function read(id){
    return document.getElementById(id).value;
}


async function Translate() {


  try{ 


   const input= read("input-text");

   
    
 const res = await fetch("https://libretranslate.de/translate", {


    method:"POST",

    body: JSON.stringify({
      
        q:input,
        source:"en",
        target:"hi",
        format: "text",
    }),


//additional information  about our request that server migth need to know 

    headers: {
        "content-Type": "application/json", 
    },
 });

const data = await res.json();

 document.getElementById("output").innerText=data.translatedText;
//   console.log("data", data);
  }catch(err){
    console.log("err:", err);

   }

}
