import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const FormContainer = styled.div`
  width: 400px;
  padding: 40px;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const InputGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-size: 16px;
  font-weight: bold;
  width: 100px; /* Adjust the width as needed */
`;

const Input = styled.input`
  flex: 1;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 16px;
`;

const Button = styled.button`
  padding: 12px;
  width: 100%;
  background-color: #007bff;
  color: #ffffff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const AcademicForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    description: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/studentdetails', formData);
      console.log(response.data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <Container>
      <FormContainer>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Students Registration Form</h2>
        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <Label htmlFor="name">Name</Label>
            <Input type="text" id="name" name="name" placeholder="Enter name" value={formData.name} onChange={handleChange} />
          </InputGroup>
          
          <InputGroup>
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" name="email" placeholder="Enter email" value={formData.email} onChange={handleChange} />
          </InputGroup>
          
          <InputGroup>
            <Label htmlFor="number">Number</Label>
            <Input type="tel" id="number" name="number" placeholder="Enter phone number" value={formData.number} onChange={handleChange} />
          </InputGroup>
          
          <InputGroup>
            <Label htmlFor="description">City</Label>
            <Input type="text" id="city" name="city" placeholder="Enter city" value={formData.city} onChange={handleChange} />
          </InputGroup>
          
          <Button type="submit">Submit</Button>
        </Form>
      </FormContainer>
    </Container>
  );
};

export default AcademicForm;
