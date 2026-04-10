/**
 * Utility functions for the portfolio frontend
 */

// API Configuration
export const API_BASE_URL = process.env.VITE_API_URL || 'http://localhost:5000/api';

/**
 * Make API calls with error handling
 * @param {string} endpoint - API endpoint
 * @param {object} options - Fetch options
 * @returns {Promise} - Response data
 */
export const apiFetch = async (endpoint, options = {}) => {
  try {
    const url = `${API_BASE_URL}${endpoint}`;
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'API Error');
    }

    return data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

/**
 * Get all projects
 * @param {object} filters - Query filters
 * @returns {Promise} - Projects data
 */
export const getProjects = async (filters = {}) => {
  const params = new URLSearchParams(filters);
  return apiFetch(`/projects?${params}`);
};

/**
 * Get single project
 * @param {string} id - Project ID
 * @returns {Promise} - Project data
 */
export const getProjectById = async (id) => {
  return apiFetch(`/projects/${id}`);
};

/**
 * Submit contact message
 * @param {object} messageData - Message form data
 * @returns {Promise} - Response
 */
export const submitMessage = async (messageData) => {
  return apiFetch('/messages', {
    method: 'POST',
    body: JSON.stringify(messageData),
  });
};

/**
 * Get testimonials
 * @param {object} filters - Query filters
 * @returns {Promise} - Testimonials data
 */
export const getTestimonials = async (filters = {}) => {
  const params = new URLSearchParams(filters);
  return apiFetch(`/testimonials?${params}`);
};

/**
 * Format date to readable format
 * @param {string|Date} date - Date to format
 * @returns {string} - Formatted date
 */
export const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

/**
 * Calculate years of experience
 * @param {string} startDate - Start date
 * @returns {number} - Years
 */
export const calculateYearsOfExperience = (startDate) => {
  const start = new Date(startDate);
  const now = new Date();
  return Math.floor((now - start) / (365.25 * 24 * 60 * 60 * 1000));
};

/**
 * Scroll to element smoothly
 * @param {string} elementId - Element ID
 */
export const scrollToElement = (elementId) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

/**
 * Copy text to clipboard
 * @param {string} text - Text to copy
 */
export const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (error) {
    console.error('Copy failed:', error);
    return false;
  }
};

/**
 * Debounce function
 * @param {function} fn - Function to debounce
 * @param {number} delay - Delay in ms
 * @returns {function} - Debounced function
 */
export const debounce = (fn, delay = 300) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
};

/**
 * Check if element is in viewport
 * @param {element} element - DOM element
 * @returns {boolean}
 */
export const isInViewport = (element) => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

/**
 * Get initials from name
 * @param {string} name - Full name
 * @returns {string} - Initials
 */
export const getInitials = (name) => {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();
};

/**
 * Validate email
 * @param {string} email - Email to validate
 * @returns {boolean}
 */
export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

/**
 * Download file
 * @param {string} data - File data
 * @param {string} filename - Filename
 * @param {string} type - MIME type
 */
export const downloadFile = (data, filename, type = 'text/plain') => {
  const blob = new Blob([data], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
};

/**
 * Format bytes to readable size
 * @param {number} bytes - Number of bytes
 * @returns {string} - Formatted size
 */
export const formatBytes = (bytes) => {
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  if (bytes === 0) return '0 Bytes';
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  return Math.round((bytes / Math.pow(1024, i)) * 100) / 100 + ' ' + sizes[i];
};

/**
 * Slugify string
 * @param {string} text - Text to slugify
 * @returns {string} - Slugified text
 */
export const slugify = (text) => {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

/**
 * Capitalize string
 * @param {string} str - String to capitalize
 * @returns {string}
 */
export const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
 * Get browser info
 * @returns {object} - Browser information
 */
export const getBrowserInfo = () => {
  const ua = navigator.userAgent;
  return {
    isMobile: /Mobile|Android|iPhone|iPad|iPod/.test(ua),
    isTablet: /Tablet|iPad|Android/.test(ua),
    isDesktop: !/Mobile|Tablet|iPad|Android/.test(ua),
    browser: ua,
  };
};

/**
 * Local storage helpers
 */
export const localStorage_utils = {
  set: (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  },
  get: (key) => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  },
  remove: (key) => {
    localStorage.removeItem(key);
  },
  clear: () => {
    localStorage.clear();
  },
};

export default {
  apiFetch,
  getProjects,
  getProjectById,
  submitMessage,
  getTestimonials,
  formatDate,
  calculateYearsOfExperience,
  scrollToElement,
  copyToClipboard,
  debounce,
  isInViewport,
  getInitials,
  validateEmail,
  downloadFile,
  formatBytes,
  slugify,
  capitalize,
  getBrowserInfo,
  localStorage_utils,
};
