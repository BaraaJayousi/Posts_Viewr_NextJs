"use client";

import { useSearchParams } from 'next/navigation';
import PostComponent from './PostComponent';
import { paginate } from '@/lib/utils';

interface Props{
  posts:{
    id:number,
    title:string
    body:string
  }[]
}

interface Post{
  id:number
  title: string
  body: string
}

const PostsComponent = ({posts}:Props) => {

  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;

  const pagePosts = paginate(posts, currentPage)
  

  return (
    <div className="mt-40 align-middle">
      
      {pagePosts.map((post: any ) =>{
        return(
          <PostComponent key={post.id} id={post.id} title={post.title} body={post.body}/>
        );
      })}
    </div>
  )
}

export default PostsComponent