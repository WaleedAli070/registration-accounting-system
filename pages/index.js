import { Router, useRouter } from 'next/router'
import { useEffect } from 'react'
export default function Home() {
  const router = useRouter()
  useEffect(() => {
    const { pathname } = router
    if (pathname === '/') {
      router.push('/courses')
    }
  })
  return 'Home'
}
