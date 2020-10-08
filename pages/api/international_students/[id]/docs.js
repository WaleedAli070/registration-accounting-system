import { NextApiRequest, NextApiResponse } from 'next'
import Models from '../../../../db/models'
const IntlStudentsDocs = Models.international_students_docs

export default async function IntlStudentsDocsByCourseIdAPI (req, res) {
  const {
    query: { id },
  } = req
  if (req.method === 'GET') {
    const intl_students_docs = await IntlStudentsDocs.findAll({ where: { student_id: id }})
    res.status(200).json({ intl_students_docs })
  } else {
    res.status(500).json({ message: 'method not supported '})
  }
}