import { NextApiRequest, NextApiResponse } from 'next'
import Models from '../../../db/models'
const IntlStudentsDocs = Models.international_students_docs

export default async function intlStudentsDocsAPI (req, res) {
  if (req.method === 'GET') {
    const intl_students_docs = await IntlStudentsDocs.findAll()
    res.status(200).json({ intl_students_docs })
  } else if (req.method === 'POST') {
    try {
      await IntlStudentsDocs.create(req.body)
      res.status(200).json({ message: 'new international student doc created successfully' })
    } catch (error) {
      res.status(500).json({ message: error })
    }
  } else {
    res.status(500).json({ message: 'method not supported '})
  }
}