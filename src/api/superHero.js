import { HERO_URL } from "../utils/constants";
export async function getMeHero(nameHero){
  try {
    const url = `${HERO_URL}/search/${nameHero}`
    const params={
      headers:{
        "Content-Type":"application/json"
      }
    }
    const response = await fetch(url,params);
    const result = await response.json();
    return result
  } catch (error) {
    return null
  }
}