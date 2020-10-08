import { NextApiRequest, NextApiResponse } from 'next'
import Models from '../../../db/models'
const IntlStudentsDocs = Models.international_students_docs

export default async function intlStudentsDocsByIdAPI (req, res) {
  const {
    query: { id },
  } = req
  if (req.method === 'GET') {
    const international_students_docs = await IntlStudentsDocs.findByPk(id)
    res.status(200).json({ international_students_docs })
  } else if (req.method === 'PUT') {
    try {
      await IntlStudentsDocs.update(req.body, { where: { id }})
      res.status(200).json({ message: `international student doc with ${id} updated successfully` })
    } catch (error) {
      res.status(500).json({ message: error })
    }
  } else if (req.method === 'DELETE') {
    try {
      await IntlStudentsDocs.destroy({ where: { id }})
      res.status(200).json({ message: `international student doc with ${id} deleted successfully` })
    } catch (error) {
      res.status(500).json({ message: error })
    }
  } else {
    res.status(500).json({ message: 'method not supported '})
  }
}