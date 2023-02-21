import Navbar from '../../components/Navbar'
import { useRouter } from 'next/router'
import SearchedNewsSec from '@/components/SearchedNewsSec'

const Post = () => {
  const router = useRouter()
  const { query } = router.query

  const newPid = query?.toString()

  return (
    <>
        {/* <Navbar /> */}
        <SearchedNewsSec topic={newPid} />

    </>
  )
}

export default Post