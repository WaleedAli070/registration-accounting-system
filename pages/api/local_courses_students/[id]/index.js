import { NextApiRequest, NextApiResponse } from 'next'
import Models from '../../../../db/models'
const LocalCoursesStudents = Models.local_courses_students

export default async function LocalCoursesStudentsByIdAPI (req, res) {
  const {
    query: { id },
  } = req
  if (req.method === 'GET') {
    const local_courses_students = await LocalCoursesStudents.findByPk(id)
    res.statusCode = 200
    res.json({ local_courses_students })
  } else if (req.method === 'PUT') {
    try {
      await LocalCoursesStudents.update(req.body, { where: { id }})
      res.status(200).json({ message: `local course student with ${id} updated successfully` })
    } catch (error) {
      res.status(500).json({ message: error })
    }
  } else if (req.method === 'DELETE') {
    try {
      await LocalCoursesStudents.destroy({ where: { id }})
      res.status(200).json({ message: `local course student with ${id} deleted successfully` })
    } catch (error) {
      res.status(500).json({ message: error })
    }
  } else {
    res.status(500).json({ message: 'method not supported '})
  }
}