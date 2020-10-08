import { NextApiRequest, NextApiResponse } from 'next'
import Models from '../../../../db/models'
const IntlStudentsPayments = Models.international_students_payments

export default async function IntlStudentsPaymentsByCourseIdAPI (req, res) {
  const {
    query: { id },
  } = req
  if (req.method === 'GET') {
    const intl_students_payments = await IntlStudentsPayments.findAll({ where: { student_id: id }})
    res.status(200).json({ intl_students_payments })
  } else {
    res.status(500).json({ message: 'method not supported '})
  }
}