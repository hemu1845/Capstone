import React, { useState } from 'react';
import './forgot.css';

const ForgotPassword = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your password reset logic here
    if (password === confirmPassword) {
      console.log('Reset password for email:', email);
      console.log('New Password:', password);
      console.log('Confirm Password:', confirmPassword);
      // Clear the email, password, and confirmPassword inputs after submission
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      alert('Password changed successfully!');
      onClose();
    } else {
      alert('Passwords do not match!');
    }
  };

  return (
    <div className="forgot-password-container">
      <h2 style={{ marginBottom: '20px' }}>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            required
          />
        </div>
        <button type="submit" style={{ display: 'block', margin: 'auto', padding: '10px 20px', fontSize: '14px' }}>Reset Password</button>

      </form>
    </div>
  );
};

export default ForgotPassword;
