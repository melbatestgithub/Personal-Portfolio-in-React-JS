import React, { useState } from 'react';
import { motion } from 'framer-motion'; // For animations

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

    if (name === 'name') {
      if (!/^[A-Za-z\s]*$/.test(value)) {
        newErrors.name = 'Name can only contain letters and spaces';
      } else if (!value) {
        newErrors.name = 'Name is required';
      } else {
        newErrors.name = '';
      }
    }

    if (name === 'email') {
      if (!value) {
        newErrors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(value)) {
        newErrors.email = 'Email is invalid';
      } else {
        newErrors.email = '';
      }
    }

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
    <div id='contact' name="contact" className="w-full min-h-screen bg-[#0a192f] flex justify-center items-center p-8">
      <motion.form
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        onSubmit={handleSubmit}
        className="flex flex-col max-w-[600px] w-full bg-[#112240] p-10 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
      >
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="pb-6"
        >
          <h1 className="text-4xl font-bold text-gray-300 text-center">Contact Me!</h1>
        </motion.div>
        
        <motion.input 
          whileFocus={{ scale: 1.05, borderColor: 'rgba(255, 255, 255, 0.6)' }}
          type="text"
          className={`bg-[#ccd6f6] p-3 rounded-md text-black mb-4 transition-all duration-300 focus:outline-none ${errors.name ? 'border-2 border-red-500' : 'border-none'}`}
          placeholder="Client Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <p className="text-red-500 text-sm mb-4">{errors.name}</p>}
        
        <motion.input 
          whileFocus={{ scale: 1.05, borderColor: 'rgba(255, 255, 255, 0.6)' }}
          type="email"
          className={`p-3 bg-[#ccd6f6] rounded-md text-black mb-4 transition-all duration-300 focus:outline-none ${errors.email ? 'border-2 border-red-500' : 'border-none'}`}
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p className="text-red-500 text-sm mb-4">{errors.email}</p>}
        
        <motion.textarea 
          whileFocus={{ scale: 1.05, borderColor: 'rgba(255, 255, 255, 0.6)' }}
          className={`bg-[#ccd6f6] p-3 rounded-md text-black mb-4 transition-all duration-300 focus:outline-none ${errors.message ? 'border-2 border-red-500' : 'border-none'}`}
          placeholder="Message"
          rows={6}
          name="message"
          value={formData.message}
          onChange={handleChange}
        ></motion.textarea>
        {errors.message && <p className="text-red-500 text-sm mb-4">{errors.message}</p>}
        
        <motion.button
          whileHover={{ scale: 1.1, backgroundColor: '#00b4d8' }}
          className="text-gray-300 bg-sky-700 font-bold rounded-md py-3 mt-3 transition duration-300"
          type="submit"
        >
          Submit
        </motion.button>
      </motion.form>
    </div>
  );
};

export default Contact;
