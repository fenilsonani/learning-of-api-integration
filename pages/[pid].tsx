import Navbar from '../components/Navbar'
import { useRouter } from 'next/router'
import NewsSec from '@/components/NewsSec'

const Post = () => {
  const router = useRouter()
  const { pid } = router.query

  const newPid = pid?.toString()

  return (
    <>
      {/* <Navbar /> */}
      <NewsSec topic={newPid} />
    </>
  )
}

export default Post