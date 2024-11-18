import React from 'react';
import gettingstarted from '../Components/images/LOGO.png';
import { useNavigate } from 'react-router-dom';

function GettingStarted() {

    //  navigation Keyword
  const navigate = useNavigate();

  // Function to navigate to the template page
  const goToTemplate = () => {
    navigate('/Templete');
  };

  return (
    <>
      {/* Main content */}
      <div className="min-h-screen flex items-center  justify-center shadow-lg">
        <div className="bg-white rounded-lg shadow-xl text-center p-10 border-2 border-gray-200">
          {/* Introduction */}
          <p style={{ fontSize: '23px', marginBottom: '3vh', fontWeight: 'bold' }}>
            Create a professional resume with
          </p>
          <div style={{  display:"flex", justifyContent:"center",textAlign: 'center', marginBottom: '10vh' }}>
  <img src={gettingstarted} alt="Getting Started" style={{ padding:'4px', marginTop:'10px',width: '16vw' }} />
</div>

          <hr />
          <hr />
          <hr />

          {/* Main Content */}
          <h1 className="text-3xl font-bold mb-5 mt-10 text-center">Welcome to Resume Builder</h1>
          <p className="text-lg mb-5 text-center ">Create a professional resume in minutes.</p>

          {/* Get Started Button */}
          <div class="flex justify-center">
          <button
            className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 mb-10  "
            onClick={goToTemplate}
          >
            Get Started
          </button>
 </div>

         
          <hr />
          <hr />
          <hr />
        </div>
      </div>
    </>
  );
}

export default GettingStarted;
