import axios from "axios"
const username = "DaniDeveloper11";


export async function fetchGithubProjects() {
    try{
        const username = "DaniDeveloper11";
        const {data} = await axios.get( `https://api.github.com/users/${username}/repos`);
        console.log(data)
        
        return data.map(repo => ({
            name: repo.name,
            url: repo.html_url,
            description: repo.description || "Sin descripción",
            language: repo.language || "Desconocido",
            stars: repo.stargazers_count,
          }));
    }catch(error){
        console.error("Error al obtener proyectos:",error)
        return [];
    }
}