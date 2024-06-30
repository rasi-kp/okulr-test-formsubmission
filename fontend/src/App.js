import React, { useState } from 'react';
import axios from 'axios';
import './form.css';

const FormComponent = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [pdf, setPdf] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('otp', otp);
    formData.append('pdf', pdf);

    try {
      const response = await axios.post('http://localhost:3001/formsubmit', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data);
      alert('Form submitted successfully');
    } catch (error) {
      console.error('There was an error submitting the form!', error);
      alert('Error submitting form');
    }
  };

  return (
    <div className="mainform">
      <form onSubmit={handleSubmit} className="form">
        <div className="input">
          <label>
            Name:
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
          </label>
        </div>
        <div className="input">
          <label>
            Email:
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </label>
        </div>
        <div className="input">
          <label>
            OTP:
            <input type="text" value={otp} onChange={(e) => setOtp(e.target.value)} required />
          </label>
        </div>
        <div className="input">
          <label>
            Upload PDF:
            <input type="file" accept="application/pdf" onChange={(e) => setPdf(e.target.files[0])} required />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormComponent;
