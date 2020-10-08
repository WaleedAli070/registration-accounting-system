
import { NextApiRequest, NextApiResponse } from 'next'
import Models from '../../../../db/models'
const LocalCoursesDocs = Models.local_courses_docs

export default async function localCoursesDocsByCourseIdAPI (req, res) {
  const {
    query: { id },
  } = req
  if (req.method === 'GET') {
    const local_courses_docs = await LocalCoursesDocs.findAll({ where: { course_id: id }})
    res.status(200).json({ local_courses_docs })
  } else {
    res.status(500).json({ message: 'method not supported '})
  }
}