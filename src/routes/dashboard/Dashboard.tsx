/* eslint-disable dot-notation */
import { useEffect } from 'react';
import { Navbar } from 'src/components';

import useAuth from 'src/hooks/useAuth';

const Dashboard = () => {
  useAuth('/');

  useEffect(() => {
    document.title = 'Instagram';
  }, []);

  return (
    <div className="dashboard-container">
      <Navbar />
    </div>
  );
};

export default Dashboard;
