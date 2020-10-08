import { NextApiRequest, NextApiResponse } from 'next'
import Models from '../../../../db/models'
const LocalCoursesPayments = Models.local_courses_payments

export default async function localCoursesPaymentsByCourseIdAPI (req, res) {
  const {
    query: { id },
  } = req
  if (req.method === 'GET') {
    const lc_student_payments = await LocalCoursesPayments.findAll({ where: { student_id: id }})
    res.status(200).json({ lc_student_payments })
  } else {
    res.status(500).json({ message: 'method not supported '})
  }
}