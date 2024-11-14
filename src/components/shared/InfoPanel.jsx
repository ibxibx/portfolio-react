import React from 'react';

const InfoPanel = () => {
  const cssVariables = {
    '--2473cfba': 'auto',
    '--243b8802': 'auto',
    '--6288b5b8': 'auto',
    '--2072c65d': 'auto',
    '--1b5d8302': 'auto'
  };

  return (
    <div className="info-panel">
      <div style={cssVariables} data-content-type>
        {/* Info panel content */}
      </div>

      <style jsx>{`
        [content-type] {
          bottom: var(--2473cfba);
          left: var(--243b8802);
          right: var(--6288b5b8);
          top: var(--2072c65d);
          --d-width: var(--1b5d8302);
        }
      `}</style>
    </div>
  );
};

export default InfoPanel;