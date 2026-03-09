async function postData(obj,endpoint) {
   try {
     const peticion = await fetch(`http://localhost:3000/${endpoint}`,{
         method: "POST",
         headers: {
             "Content-Type": "application/json"
         }, 
         body: JSON.stringify(obj)
     })
     const respuesta = await peticion.json()
     return respuesta
   } catch (error) {
     console.error("Error al enviar los datos:", error)
   }
};
export {postData}

async function getData(endpoint) {
  try {
    const peticion = await fetch(`http://localhost:3000/${endpoint}`)
    const data = await peticion.json()
    return data
  } catch (error) {
    console.log(error);
  }
}
export {getData}
 