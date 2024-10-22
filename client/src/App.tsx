import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import SubscriptionPage from './pages/SubscriptionPage';
import BlogPostPage from './pages/BlogPostPage';
import LoginPage from './pages/LoginPage';
import ToolsPage from './pages/ToolsPage';
import ToolDetailPage from './pages/ToolDetailPage';
import DesignersPage from './pages/DesignersPage';
import DesignerDetailPage from './pages/DesignerDetailPage';
import CommunityPage from './pages/CommunityPage';
import AdminLoginPage from './pages/AdminLoginPage';
import AdminDashboardPage from './pages/AdminDashboardPage';
import FloatingSubscribeButton from './components/FloatingSubscribeButton';
import DiscussionPage from './pages/DiscussionPage';
import { UserProvider } from './contexts/UserContext';

function App() {
  return (
    <UserProvider>
      <Router>
        <div className="flex flex-col min-h-screen bg-gray-50">
          <Routes>
            <Route path="/subscribe" element={<SubscriptionPage />} />
            <Route path="/admin/login" element={<AdminLoginPage />} />
            <Route path="/admin/dashboard" element={<AdminDashboardPage />} />
            <Route
              path="*"
              element={
                <>
                  <Header />
                  <main className="flex-grow">
                    <Routes>
                      <Route path="/" element={<LandingPage />} />
                      <Route path="/blog/:id" element={<BlogPostPage />} />
                      <Route path="/login" element={<LoginPage />} />
                      <Route path="/tools" element={<ToolsPage />} />
                      <Route path="/tools/:id" element={<ToolDetailPage />} />
                      <Route path="/designers" element={<DesignersPage />} />
                      <Route path="/designers/:id" element={<DesignerDetailPage />} />
                      <Route path="/community" element={<CommunityPage />} />
                      <Route path="/community/discussion/:id" element={<DiscussionPage />} />
                    </Routes>
                  </main>
                  <Footer />
                  <FloatingSubscribeButton />
                </>
              }
            />
          </Routes>
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;