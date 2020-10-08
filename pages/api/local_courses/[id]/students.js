import { NextApiRequest, NextApiResponse } from 'next'
import Models from '../../../../db/models'
const LocalCoursesStudents = Models.local_courses_students

export default async function localCoursesStudentsByCourseIdAPI (req, res) {
  const {
    query: { id },
  } = req
  if (req.method === 'GET') {
    const local_courses_students = await LocalCoursesStudents.findAll({ where: { course_id: id }})
    res.status(200).json({ local_courses_students })
  } else {
    res.status(500).json({ message: 'method not supported '})
  }
}