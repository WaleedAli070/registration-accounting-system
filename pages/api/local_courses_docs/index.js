import { NextApiRequest, NextApiResponse } from 'next'
import Models from '../../../db/models'
const LocalCoursesDocs = Models.local_courses_docs

export default async function localCoursesDocsAPI (req, res) {
  if (req.method === 'GET') {
    const local_courses_docs = await LocalCoursesDocs.findAll()
    res.status(200).json({ local_courses_docs })
  } else if (req.method === 'POST') {
    try {
      await LocalCoursesDocs.create(req.body)
      res.status(200).json({ message: 'new local course doc created successfully' })
    } catch (error) {
      res.status(500).json({ message: error })
    }
  } else {
    res.status(500).json({ message: 'method not supported '})
  }
}