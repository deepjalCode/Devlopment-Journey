import React from 'react'

const App = () => {
  return (
    <div class='parent'>
      <div className="card">
        <div className="top">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf2mflPCYivsPEB0y-cgMSKSjK094yxNCaoA&s" alt="" />
          <button>Save</button>
        </div>
        <div className="hero">
          <h2>Amazon <span id='time'>5 days ago</span></h2>
          <h1>Senior UI/UX Designer</h1>
          <div className="button">
            <span>Part Time</span>
            <span>Senior Level</span>
          </div>
        </div>
        <div className="buttom">
          <div class="butmDiv">
            <h1>$120/hr</h1>
            <p>Mumbai India</p>
          </div>
          <button>Apply Now</button>
        </div>

      </div>
    </div>
  )
}

export default App