import { NextApiRequest, NextApiResponse } from 'next'
import Models from '../../../db/models'
const LocalCoursesDocs = Models.local_courses_docs

export default async function localCoursesDocsByIdAPI (req, res) {
  const {
    query: { id },
  } = req
  if (req.method === 'GET') {
    const local_courses_docs = await LocalCoursesDocs.findByPk(id)
    res.status(200).json({ local_courses_docs })
  } else if (req.method === 'PUT') {
    try {
      await LocalCoursesDocs.update(req.body, { where: { id }})
      res.status(200).json({ message: `local course doc with ${id} updated successfully` })
    } catch (error) {
      res.status(500).json({ message: error })
    }
  } else if (req.method === 'DELETE') {
    try {
      await LocalCoursesDocs.destroy({ where: { id }})
      res.status(200).json({ message: `local course doc with ${id} deleted successfully` })
    } catch (error) {
      res.status(500).json({ message: error })
    }
  } else {
    res.status(500).json({ message: 'method not supported '})
  }
}