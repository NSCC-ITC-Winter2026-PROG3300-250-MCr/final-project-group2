// src/validation.ts

export const validateEmail = (email: string): boolean => {
  // Checks for basic email format: something@something.something
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validateName = (name: string): boolean => {
  // Ensures the name isn't just empty spaces and is at least 2 characters
  return name.trim().length >= 2;
};

export const validateMessage = (message: string): boolean => {
  // Ensures the message isn't just empty spaces and is at least 10 characters
  return message.trim().length >= 10;
};