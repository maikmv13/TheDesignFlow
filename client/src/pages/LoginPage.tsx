// ... (código anterior)

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  try {
    const response = await axios.post('/api/auth/login', { email, password });
    if (response.data.user) {
      login({
        id: response.data.user._id,
        name: response.data.user.name,
        email: response.data.user.email,
        subscriptionType: response.data.user.subscriptionType
      });
      navigate('/');
    } else {
      alert('Invalid credentials');
    }
  } catch (error) {
    console.error('Login error:', error);
    alert('An error occurred during login. Please try again.');
  }
};

// ... (resto del código)