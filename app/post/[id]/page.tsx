import PostDetailsComponent from '@/components/PostDetailsComponent';

const PostPage =  ({params:{id}}: { params: { id: string }}) => {
  return (
    <main className=''>
      <section className='bg-[#f1f1f1] w-100 h-[500px]  content-center'>
        <h1 className='text-7xl text-center font-[600] text-[#444444]'>Post Details</h1>
      </section>
      <section className="px-10 py-10">
        <PostDetailsComponent postId={id}/>
      </section>
    </main>
  )
}

export default PostPage;