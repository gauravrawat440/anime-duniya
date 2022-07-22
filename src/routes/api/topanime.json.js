import axios from 'axios';
export const GET = async () => {
  const response = await fetch("https://api.jikan.moe/v4/top/anime");
  const data = await response.json();
  return {
    status: 200,
    body: data
  }

}