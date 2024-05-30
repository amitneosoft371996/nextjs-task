"use client"
import { useState } from 'react';
// import { Col, Container, Form, FormGroup, Row, Button } from 'react-bootstrap';
import '../login/login.css';
import { validateEmail, validateName, validatePassword, validateUsername, validateContactNumber, validFile } from '../component/Validate';
// import { useDispatch } from 'react-redux';
// import { register } from '../../../app/features/userSlice';
// import { useRouter } from 'next/router';
interface Errors {
  name?: string;
  username?: string;
  email?: string;
  contactNumber?: string;
  password?: string;
  file?: string;
}
const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    contactNumber: '',
    password: '',
  });
  // const dispatch = useDispatch();
  // const router = useRouter();
  const [errors, setErrors] = useState({});

  const handleChange = (e: { target: { name: any; value: any; type: any; files: any; }; }) => {
    const { name, value, type, files } = e.target;

    if (type === 'file') {
      const file = files[0];
      const fileType = file.type;
      const fileSize = file.size;

      const fileError = validFile(fileType, fileSize);
      if (fileError) {
        setErrors({
          ...errors,
          [name]: fileError
        });
      } else {
        setFormData({
          ...formData,
          [name]: file
        });
        setErrors({
          ...errors,
          [name]: ''
        });
      }
    } else {
      setFormData({
        ...formData,
        [name]: value
      });

      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const errors: Errors = {};
    errors.name = validateName(formData.name);
    errors.username = validateUsername(formData.username);
    errors.email = validateEmail(formData.email);
    errors.contactNumber = validateContactNumber(formData.contactNumber);
    errors.password = validatePassword(formData.password);
    setErrors(errors);

    if (
      !errors.name &&
      !errors.username &&
      !errors.email &&
      !errors.contactNumber &&
      !errors.password
    ) {
      try {
        const res = await fetch("http://localhost:8000/user");
        const data = await res.json();
        const existingUser = data.find((user: { email: string; username: string; }) => user.email === formData.email || user.username === formData.username);
        if (existingUser) {
          throw new Error('User already exists');
        } else {
          await fetch("http://localhost:8000/user", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
          });
          alert('Signup successful');
          // dispatch(register(formData));
          // router.push('/');
        }
      } catch (err: any) {
        alert('Error: ' + err.message);
      }
    }
  };

  return (
    <div>
      <section className='signup_section'>
        <div className='container'>
          <div className='grid grid-rows-1 grid-flow-col gap-4 justify-center'>
            <div className='col'>
              <div className='signup-bx'>
                <form className='form' onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="block text-sm font-medium leading-6 text-gray-900">Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} className="block form-control w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    {/* {errors.name && <span className="text-danger">{errors.name}</span>} */}
                  </div>
                  <div className="mb-3">
                    <label className="block text-sm font-medium leading-6 text-gray-900">User Name</label>
                    <input type="text" name="username" placeholder="Enter User name" value={formData.username} onChange={handleChange} className="block form-control w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    {/* {errors.username && <span className="text-danger">{errors.username}</span>} */}
                  </div>
                  <div className="mb-3">
                    <label className="block text-sm font-medium leading-6 text-gray-900">Email</label>
                    <input type="email" name="email" placeholder="Enter email" value={formData.email} onChange={handleChange} className="block form-control w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    {/* {errors.email && <span className="text-danger">{errors.email}</span>} */}
                  </div>
                  <div className="mb-3">
                    <label className="block text-sm font-medium leading-6 text-gray-900">Contact Number</label>
                    <input type="text" name="contactNumber" placeholder="Enter contact number" value={formData.contactNumber} onChange={handleChange} className="block form-control w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    {/* {errors.contactNumber && <span className="text-danger">{errors.contactNumber}</span>} */}
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                    <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} className="block form-control w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    {/* {errors.password && <span className="text-danger">{errors.password}</span>} */}
                  </div>
                  <div className='mb-4'>
                    <label className="block text-sm font-medium leading-6 text-gray-900">Profile Picture</label>
                    <input type='file' name='file' accept='.jpg, .jpeg' onChange={handleChange} className="block form-control w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    {/* {errors.file && <span className="text-danger">{errors.file}</span>} */}
                  </div>
                  <div className='btnbx'>
                    <button className='submit-btn' type="submit">
                      Sign Up
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signup;
