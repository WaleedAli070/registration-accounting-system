import { NextApiRequest, NextApiResponse } from 'next'
import Models from '../../../db/models'
const IntlStudentsPayments = Models.international_students_payments

export default async function intlStudentsPaymentsAPI (req, res) {
  if (req.method === 'GET') {
    const intl_students_payments = await IntlStudentsPayments.findAll()
    res.status(200).json({ intl_students_payments })
  } else if (req.method === 'POST') {
    try {
      await IntlStudentsPayments.create(req.body)
      res.status(200).json({ message: 'new international student payment created successfully' })
    } catch (error) {
      res.status(500).json({ message: error })
    }
  } else {
    res.status(500).json({ message: 'method not supported '})
  }
}