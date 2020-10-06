import { useRouter } from "next/router"

export default function CourseSpecificPage () {
  const router = useRouter()
  const { courseId } = router.query
  return (
    <h1>Welcome to Course {courseId}</h1>
  )
}