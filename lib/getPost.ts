export const getPost = async (postId:number | string) =>{
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  const data = await res.json();
  return data
}