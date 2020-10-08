import { NextApiRequest, NextApiResponse } from 'next'
import Models from '../../../../db/models'
const IntlStudentsExamss = Models.international_students_exams

export default async function IntlStudentsExamssByCourseIdAPI (req, res) {
  const {
    query: { id },
  } = req
  if (req.method === 'GET') {
    const intl_students_exams = await IntlStudentsExamss.findAll({ where: { student_id: id }})
    res.status(200).json({ intl_students_exams })
  } else {
    res.status(500).json({ message: 'method not supported '})
  }
}