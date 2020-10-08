import { NextApiRequest, NextApiResponse } from 'next'
import Models from '../../db/models'
const LocalCourses = Models.local_courses

export default async function getAllCourses (req, res) {
  const local_courses = await LocalCourses.findAll({raw: true})
  res.statusCode = 200
  res.json({ local_courses })
}