import { NextApiRequest, NextApiResponse } from 'next'
import Models from '../../../db/models'
const IntlStudentsPayments = Models.international_students_payments

export default async function intlStudentsPaymentsByIdAPI (req, res) {
  const {
    query: { id },
  } = req
  if (req.method === 'GET') {
    const international_students_payments = await IntlStudentsPayments.findByPk(id)
    res.status(200).json({ international_students_payments })
  } else if (req.method === 'PUT') {
    try {
      await IntlStudentsPayments.update(req.body, { where: { id }})
      res.status(200).json({ message: `international student payment with ${id} updated successfully` })
    } catch (error) {
      res.status(500).json({ message: error })
    }
  } else if (req.method === 'DELETE') {
    try {
      await IntlStudentsPayments.destroy({ where: { id }})
      res.status(200).json({ message: `international student payment with ${id} deleted successfully` })
    } catch (error) {
      res.status(500).json({ message: error })
    }
  } else {
    res.status(500).json({ message: 'method not supported '})
  }
}