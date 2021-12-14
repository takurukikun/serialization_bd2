import React, { useEffect } from 'react'
import { Card } from 'react-bootstrap'

function Dashboard(): JSX.Element {
  useEffect(() => {
    console.log('sdfdsf')
  }, [])

  return (
    <Card>
      <Card.Body>fdsdfdsfds</Card.Body>
    </Card>
  )
}

export default Dashboard
