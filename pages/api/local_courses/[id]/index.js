import { NextApiRequest, NextApiResponse } from 'next'
import Models from '../../../../db/models'
const LocalCourses = Models.local_courses

export default async function localCourseByIdAPI (req, res) {
  const {
    query: { id },
  } = req
  if (req.method === 'GET') {
    const local_courses = await LocalCourses.findByPk(id)
    res.status(200).json({ local_courses })
  } else if (req.method === 'PUT') {
    try {
      await LocalCourses.update(req.body, { where: { id }})
      res.status(200).json({ message: `local course with ${id} updated successfully` })
    } catch (error) {
      res.status(500).json({ message: error })
    }
  } else if (req.method === 'DELETE') {
    try {
      await LocalCourses.destroy({ where: { id }})
      res.status(200).json({ message: `local course with ${id} deleted successfully` })
    } catch (error) {
      res.status(500).json({ message: error })
    }
  } else {
    res.status(500).json({ message: 'method not supported '})
  }
}