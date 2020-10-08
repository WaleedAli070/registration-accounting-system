import { NextApiRequest, NextApiResponse } from 'next'
import Models from '../../../db/models'
const LocalCourses = Models.local_courses

export default async function localCoursesAPI (req, res) {
  if (req.method === 'GET') {
    const local_courses = await LocalCourses.findAll({raw: true})
    res.status(200).json({ local_courses })
  } else if (req.method === 'POST') {
    try {
      await LocalCourses.create(req.body)
      res.status(200).json({ message: 'new model created successfully' })
    } catch (error) {
      res.status(500).json({ message: error })
    }
  } else {
    res.status(500).json({ message: 'method not supported '})
  }
}