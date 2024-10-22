import React, { createContext, useState, useContext, useEffect } from 'react';

export type SubscriptionType = 'free' | 'basic' | 'premium';

export interface User {
  id: string;
  name: string;
  email: string;
  subscriptionType: SubscriptionType;
}

interface UserContextType {
  user: User | null;
  isLoggedIn: boolean;
  login: (user: User) => void;
  logout: () => void;
  updateSubscription: (type: SubscriptionType) => void;
  isSubscriber: boolean;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Check localStorage for existing user data on component mount
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (userData: User) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const updateSubscription = (type: SubscriptionType) => {
    if (user) {
      const updatedUser = { ...user, subscriptionType: type };
      setUser(updatedUser);
      localStorage.setItem('user', JSON.stringify(updatedUser));
    }
  };

  const isLoggedIn = !!user;
  const isSubscriber = isLoggedIn && user.subscriptionType !== 'free';

  return (
    <UserContext.Provider value={{ 
      user, 
      isLoggedIn, 
      login, 
      logout, 
      updateSubscription,
      isSubscriber
    }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};