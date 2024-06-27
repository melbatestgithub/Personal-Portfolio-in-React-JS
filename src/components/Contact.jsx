import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    let newErrors = { ...errors };

    // Validate name (only letters and spaces)
    if (name === 'name') {
      if (!/^[A-Za-z\s]*$/.test(value)) {
        newErrors.name = 'Name can only contain letters and spaces';
      } else if (!value) {
        newErrors.name = 'Name is required';
      } else {
        newErrors.name = '';
      }
    }

    // Validate email
    if (name === 'email') {
      if (!value) {
        newErrors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(value)) {
        newErrors.email = 'Email is invalid';
      } else {
        newErrors.email = '';
      }
    }

    // Validate message (only letters, numbers, spaces, and punctuation)
    if (name === 'message') {
      if (!/^[A-Za-z0-9\s.,!?]*$/.test(value)) {
        newErrors.message = 'Message can only contain letters, numbers, spaces, and punctuation';
      } else if (!value) {
        newErrors.message = 'Message is required';
      } else {
        newErrors.message = '';
      }
    }

    setFormData({
      ...formData,
      [name]: value
    });

    setErrors(newErrors);
  };

  const validateForm = () => {
    let newErrors = { ...errors };

    if (!formData.name) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.message) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);

    return !Object.values(newErrors).some(error => error !== '');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      try {
        const response = await fetch('https://getform.io/f/a2b6c28f-cd76-4d45-8fe6-63df429ebae7', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });

        if (response.ok) {
          alert('Message sent successfully!');
          setFormData({
            name: '',
            email: '',
            message: ''
          });
        } else {
          alert('Failed to send message. Please try again later.');
        }
      } catch (error) {
        console.error('Error sending message:', error);
        alert('Failed to send message. Please try again later.');
      }
    }
  };

  return (
    <div
      name="contact"
      className="w-full h-full bg-[#0a192f] flex justify-center items-center py-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/a2b6c28f-cd76-4d45-8fe6-63df429ebae7"
        className="flex flex-col max-w-[600px] w-full bg-[#112240] p-8 rounded-lg shadow-lg"
        onSubmit={handleSubmit}
      >
        <div className="pb-6">
          <h1 className="font-bold text-4xl text-gray-300 text-center">
            Contact Me!
          </h1>
        </div>
        <input
          type="text"
          className={`bg-[#ccd6f6] p-3 border-none rounded-md text-black mb-4 ${errors.name ? 'border-2 border-red-500' : ''}`}
          placeholder="Client Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <p className="text-red-500 text-sm mb-4">{errors.name}</p>}
        <input
          type="email"
          className={`p-3 bg-[#ccd6f6] border-none rounded-md text-black mb-4 ${errors.email ? 'border-2 border-red-500' : ''}`}
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p className="text-red-500 text-sm mb-4">{errors.email}</p>}
        <textarea
          className={`bg-[#ccd6f6] border-none p-3 rounded-md text-black mb-4 ${errors.message ? 'border-2 border-red-500' : ''}`}
          placeholder="Message"
          rows={10}
          name="message"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        {errors.message && <p className="text-red-500 text-sm mb-4">{errors.message}</p>}
        <button
          type="submit"
          className="text-gray-300 px-8 rounded-md hover:bg-cyan-700 border-none py-3 mt-3 bg-sky-700 font-bold mx-auto transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
