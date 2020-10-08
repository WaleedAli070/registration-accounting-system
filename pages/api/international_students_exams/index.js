import { NextApiRequest, NextApiResponse } from 'next'
import Models from '../../../db/models'
const IntlStudentsExams = Models.international_students_exams

export default async function intlStudentsExamsAPI (req, res) {
  if (req.method === 'GET') {
    const intl_students_exams = await IntlStudentsExams.findAll()
    res.status(200).json({ intl_students_exams })
  } else if (req.method === 'POST') {
    try {
      await IntlStudentsExams.create(req.body)
      res.status(200).json({ message: 'new international student Exam created successfully' })
    } catch (error) {
      res.status(500).json({ message: error })
    }
  } else {
    res.status(500).json({ message: 'method not supported '})
  }
}