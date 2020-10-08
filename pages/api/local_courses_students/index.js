import { NextApiRequest, NextApiResponse } from 'next'
import Models from '../../../db/models'
const LocalCoursesStudents = Models.local_courses_students

export default async function localCoursesStudentsAPI (req, res) {
  if (req.method === 'GET') {
    const local_courses_students = await LocalCoursesStudents.findAll({raw: true})
    res.statusCode = 200
    res.json({ local_courses_students })
  } else if (req.method === 'POST') {
    try {
      await LocalCoursesStudents.create(req.body)
      res.status(200).json({ message: 'new model created successfully' })
    } catch (error) {
      res.status(500).json({ message: error })
    }
  } else {
    res.status(500).json({ message: 'method not supported '})
  }
}