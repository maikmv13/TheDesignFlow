import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

interface User {
  id: number;
  name: string;
  email: string;
}

interface Blog {
  id: number;
  title: string;
  author: string;
  date: string;
}

interface Subscription {
  id: number;
  userId: number;
  plan: string;
  startDate: string;
  endDate: string;
}

const AdminDashboardPage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      navigate('/admin/login');
    } else {
      fetchData();
    }
  }, [navigate]);

  const fetchData = async () => {
    try {
      const [usersRes, blogsRes, subscriptionsRes] = await Promise.all([
        axios.get('http://localhost:3001/users'),
        axios.get('http://localhost:3001/blogs'),
        axios.get('http://localhost:3001/subscriptions')
      ]);
      setUsers(usersRes.data);
      setBlogs(blogsRes.data);
      setSubscriptions(subscriptionsRes.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin/login');
  };

  return (
    <div className="max-w-6xl mx-auto mt-10 p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Logout
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Users</h2>
          <ul>
            {users.map(user => (
              <li key={user.id} className="mb-2">{user.name} - {user.email}</li>
            ))}
          </ul>
          <Link to="/admin/users" className="text-blue-500 hover:underline mt-4 inline-block">Manage Users</Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Blogs</h2>
          <ul>
            {blogs.map(blog => (
              <li key={blog.id} className="mb-2">{blog.title} - {blog.date}</li>
            ))}
          </ul>
          <Link to="/admin/blogs" className="text-blue-500 hover:underline mt-4 inline-block">Manage Blogs</Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Subscriptions</h2>
          <ul>
            {subscriptions.map(sub => (
              <li key={sub.id} className="mb-2">User ID: {sub.userId} - Plan: {sub.plan}</li>
            ))}
          </ul>
          <Link to="/admin/subscriptions" className="text-blue-500 hover:underline mt-4 inline-block">Manage Subscriptions</Link>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardPage;