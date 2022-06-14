import axios from "axios";
export const Api= async()=> {
  try{
    const posts = await axios.get("https://jsonplaceholder.typicode.com/posts")
    return{
      post : posts.data,
    }
  }catch(e){
    throw e
  }
}

