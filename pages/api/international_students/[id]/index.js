import { NextApiRequest, NextApiResponse } from 'next'
import Models from '../../../../db/models'
const IntlStudents = Models.international_students

export default async function intlStudentsByIdAPI (req, res) {
  const {
    query: { id },
  } = req
  if (req.method === 'GET') {
    const international_students = await IntlStudents.findByPk(id)
    res.status(200).json({ international_students })
  } else if (req.method === 'PUT') {
    try {
      await IntlStudents.update(req.body, { where: { id }})
      res.status(200).json({ message: `international student with ${id} updated successfully` })
    } catch (error) {
      res.status(500).json({ message: error })
    }
  } else if (req.method === 'DELETE') {
    try {
      await IntlStudents.destroy({ where: { id }})
      res.status(200).json({ message: `international student with ${id} deleted successfully` })
    } catch (error) {
      res.status(500).json({ message: error })
    }
  } else {
    res.status(500).json({ message: 'method not supported '})
  }
}