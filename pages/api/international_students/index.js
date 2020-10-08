import { NextApiRequest, NextApiResponse } from 'next'
import Models from '../../../db/models'
const IntlStudents = Models.international_students

export default async function intlStudentsAPI (req, res) {
  if (req.method === 'GET') {
    const international_students = await IntlStudents.findAll({raw: true})
    res.status(200).json({ international_students })
  } else if (req.method === 'POST') {
    try {
      await IntlStudents.create(req.body)
      res.status(200).json({ message: 'new internation student added successfully' })
    } catch (error) {
      res.status(500).json({ message: error })
    }
  } else {
    res.status(500).json({ message: 'method not supported '})
  }
}