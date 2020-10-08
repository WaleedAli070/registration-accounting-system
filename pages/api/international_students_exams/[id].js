import { NextApiRequest, NextApiResponse } from 'next'
import Models from '../../../db/models'
const IntlStudentsExams = Models.international_students_exams

export default async function intlStudentsExamsByIdAPI (req, res) {
  const {
    query: { id },
  } = req
  if (req.method === 'GET') {
    const international_students_exams = await IntlStudentsExams.findByPk(id)
    res.status(200).json({ international_students_exams })
  } else if (req.method === 'PUT') {
    try {
      await IntlStudentsExams.update(req.body, { where: { id }})
      res.status(200).json({ message: `international student exam with ${id} updated successfully` })
    } catch (error) {
      res.status(500).json({ message: error })
    }
  } else if (req.method === 'DELETE') {
    try {
      await IntlStudentsExams.destroy({ where: { id }})
      res.status(200).json({ message: `international student exam with ${id} deleted successfully` })
    } catch (error) {
      res.status(500).json({ message: error })
    }
  } else {
    res.status(500).json({ message: 'method not supported '})
  }
}