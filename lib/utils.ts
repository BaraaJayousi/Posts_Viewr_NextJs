const ITEMS_PER_PAGE =  7

export const getTotalPages = (posts:{}[]) =>{
  const totalPages = Math.ceil(posts.length/ITEMS_PER_PAGE)
  return totalPages
}

//slice posts array to fit the determined number of posts
export const paginate = (posts: {}[], pageNumber: number) =>{
  const startIndex = (pageNumber - 1) * ITEMS_PER_PAGE
  return posts.slice(startIndex, startIndex + ITEMS_PER_PAGE)
}