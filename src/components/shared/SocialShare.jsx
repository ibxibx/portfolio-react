import React from 'react';

const SocialShare = ({
  tag = 'a',
  href = '#',
  styled = false,
  color = '#000000',
  children,
  icon,
  onClick: customOnClick,
  ...props
}) => {
  const Component = tag;

  const handleClick = (event) => {
    if (customOnClick) {
      customOnClick(event);
    }
    
    if (href.startsWith('share:')) {
      event.preventDefault();
      const url = href.replace('share:', '');
      window.open(url, 'share', 'width=640,height=480');
    }
  };

  return (
    <Component
      href={href}
      className={`social-share-button ${styled ? 'social-share-button--styled' : ''}`}
      style={{ '--color-brand': color }}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      {...props}
    >
      {icon && (
        <span className="social-share-button__icon">
          {icon}
        </span>
      )}
      {children && (
        <span className="social-share-button__label">
          {children}
        </span>
      )}
    </Component>
  );
};

export default SocialShare;