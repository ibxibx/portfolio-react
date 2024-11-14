import React from 'react';

const FrameLoader = () => {
  return (
    <div className="frame-loader-bar">
      {/* Loader content */}

      <style jsx>{`
        .frame-loader-bar {
          display: grid;
          grid-template-columns: 2.5rem 1fr 2.5rem;
        }
        .frame-loader-bar > * {
          align-items: center;
          display: flex;
          justify-content: center;
        }
      `}</style>
    </div>
  );
};

export default FrameLoader;