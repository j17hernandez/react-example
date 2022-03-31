import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { Form, Button, Container, Alert } from 'react-bootstrap'
import ClienteAxios from '../config/axios'

const WebPage = () => {

  const navigate = useNavigate()

  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const [error, setError] = useState('')

  const onChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()

    const { email, password } = form;

    if (email === '') {
      setError('El correo es obligatorio')
      return;
    }
    if (password === '') {
      setError('La contraseña esta vacia')
      return;
    }

    //ClienteAxios.post("/login", data)

    navigate('/otra', { state: { nombre: "hola" } })

  }

  return (
    <Container>
      {error ?
        <Alert variant="danger">
          <h1>{error}</h1>
        </Alert>
        : null
      }
      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" onChange={onChange} placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" onChange={onChange} placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  )
}

export default WebPage