import HeroComponent from "@/components/HeroComponent";
import PaginationComponent from "@/components/PaginationComponent";
import PostsComponent from "@/components/PostsComponent";
// import Image from "next/image";
import { getPosts } from "@/lib/getPosts";
import { getTotalPages } from "@/lib/utils";
import { Suspense } from 'react'

export default async function  Home() {
  const posts= await getPosts()
  const totalPages = getTotalPages(posts)
  return (
    <main className="px-10 py-6">
      
      <HeroComponent/>
      <div className="flex justify-center my-10">
        <Suspense>
          <PaginationComponent totalPages={totalPages}/>
        </Suspense>
      </div>
      <PostsComponent posts={posts}/>
      <div className="flex justify-center my-10">
        <Suspense>
          <PaginationComponent totalPages={totalPages}/>
        </Suspense>
      </div>
    </main>
  );
}
