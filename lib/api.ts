import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Features API
export const fetchFeatures = async () => {
  try {
    const response = await api.get('/features');
    return response.data.data;
  } catch (error) {
    console.error('Error fetching features:', error);
    return [];
  }
};

// Services API
export const fetchServices = async () => {
  try {
    const response = await api.get('/services');
    return response.data.data;
  } catch (error) {
    console.error('Error fetching services:', error);
    return [];
  }
};

// Packages API
export const fetchPackages = async () => {
  try {
    const response = await api.get('/packages');
    return response.data.data;
  } catch (error) {
    console.error('Error fetching packages:', error);
    return [];
  }
};

// Locations API
export const fetchLocations = async () => {
  try {
    const response = await api.get('/locations');
    return response.data.data;
  } catch (error) {
    console.error('Error fetching locations:', error);
    return [];
  }
};

// Testimonials API
export const fetchTestimonials = async () => {
  try {
    const response = await api.get('/testimonials');
    return response.data.data;
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    return [];
  }
};

// FAQs API
export const fetchFAQs = async () => {
  try {
    const response = await api.get('/faqs');
    return response.data.data;
  } catch (error) {
    console.error('Error fetching FAQs:', error);
    return [];
  }
};

// Contact Form API
export const submitContactForm = async (data: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  businessType: string;
  message?: string;
}) => {
  try {
    const response = await api.post('/contact', data);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to submit form');
  }
};

// Newsletter API
export const subscribeNewsletter = async (email: string) => {
  try {
    const response = await api.post('/newsletter/subscribe', { email });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to subscribe');
  }
};

export default api;
