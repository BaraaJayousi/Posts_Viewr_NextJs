
import { getPost } from '@/lib/getPost'
import Image from 'next/image'

const PostDetailsComponent =  async ({postId}:{postId: string | number}) => {
  const postDetails = await getPost(postId)
  return (
    <div className="text-center content-center flex flex-col align-middle w-1/2 mx-[25%]">
      <h1 className=' text-4xl font-semibold mb-5'>{postDetails.title}</h1>
      <p className=' text-center '>{postDetails.body}</p>
      <Image src={`https://picsum.photos/850?random=${postId}&blur=2`} alt="random image 750 X 750" width={850} height={850}/>
    </div>
  )
}

export default PostDetailsComponent