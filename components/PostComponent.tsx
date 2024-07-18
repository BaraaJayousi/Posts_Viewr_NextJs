import Image from 'next/image'

interface Props{
  title: string
  body: string
  id: number
}
const PostComponent = ({title, body, id}:Props) => {
  return (
    <div className="flex justify-start even:flex-row-reverse mx-52">
      <Image src={`https://picsum.photos/750?random=${id}&blur=2`} alt="random image 750 X 750" width={750} height={750}/>
      <div className='mt-12 py-12 pl-12'>
        <h2 className='text-8xl underline font-normal mb-6 hover:decoration-yellow-500 ease-in duration-300 text-[#444444]'><a href={`/post/${id}`}>{title?(title.slice(0,30)+"..."): ("Title is not available")}</a></h2>
        <p className='mb-6 text-[#999999]'>{body?(body.slice(0,80) + "..."):("No body available")}</p>
        <p className='uppercase text-[#444444] text-sm hover:text-yellow-500 font-semibold tracking-widest ease-in duration-300'><a href={`/post/${id}`}>learn more {"->"}</a></p>
      </div>
    </div>
  )
}

export default PostComponent