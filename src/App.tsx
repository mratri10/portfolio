import React from 'react';
import './App.css';
import ProfilePage from './portfolio/profile';
import ExpirancePage from './portfolio/expirance';
import SkillPage from './portfolio/skill';


function App() {

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-gray-800">
      {/* Profile Page (Visible only on small and medium screens at the top) */}
      <div className="block lg:hidden">
        <ProfilePage />
      </div>

      {/* Skill Page */}
      <div>
        <SkillPage />
        <div className="block lg:hidden">
          <ExpirancePage />
        </div>
      </div>

      {/* Profile Page (Visible only on large screens and above in its column) */}
      <div className="hidden lg:block">
        <ProfilePage />
      </div>

      {/* Experience Page */}
      <div className="hidden lg:block">
        <ExpirancePage />
      </div>
    </div>
  );
}

export default App;