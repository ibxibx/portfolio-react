import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

// Initialize dayjs plugins
dayjs.extend(utc);
dayjs.extend(timezone);

// This would typically come from your environment or config
const config = {
  location_base: {
    content: {
      city: "Berlin",
      flag_emoji: "🇩🇪",
      timezone: "Europe/Berlin"
    }
  },
  location_current: {
    content: {
      city: "Berlin",
      flag_emoji: "🇩🇪",
      timezone: "Europe/Berlin"
    }
  }
};

const WidgetLocation = () => {
  const [currentTime, setCurrentTime] = useState("00:00");
  const locationBase = config.location_base.content;
  const locationCurrent = config.location_current.content;
  
  const locationsCount = 
    (locationBase !== undefined ? 1 : 0) + 
    (locationCurrent !== undefined ? 1 : 0);
  
  const tz = locationCurrent?.timezone || locationBase?.timezone;

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setCurrentTime(dayjs().tz(tz).format("HH:mm"));
    }, 1000);

    return () => clearInterval(timeInterval);
  }, [tz]);

  return (
    <div className="flex h-full cursor-default items-center justify-center transition">
      {locationBase && (
        <span className="location">
          Based in
          <span className="highlight">{locationBase.city}</span>
          <span className="flag">{locationBase.flag_emoji}</span>
        </span>
      )}
      {locationCurrent && (
        <span className="location">
          Now in
          <span className="highlight">{locationCurrent.city}</span>
          <span className="flag">{locationCurrent.flag_emoji}</span>
        </span>
      )}
      <span className={`location ${locationsCount === 2 ? 'hidden lg:block' : ''}`}>
        Local time
        <span className="highlight">{currentTime}</span>
      </span>

      <style jsx>{`
        .location {
          align-items: center;
          display: flex;
          gap: 0.25rem;
          height: 100%;
          justify-content: center;
          padding-left: 0.5rem;
          padding-right: 0.5rem;
        }

        .location:hover .flag {
          width: 1.25rem;
        }

        .location:hover .highlight {
          --tw-text-opacity: 1;
          color: var(--fallback-n, oklch(var(--n) / var(--tw-text-opacity)));
          opacity: 0.8;
        }

        .flag {
          display: inline-flex;
          opacity: 0.7;
          overflow: hidden;
          text-align: center;
          transition: all 0.5s cubic-bezier(0.615, 0.19, 0.305, 0.91);
          width: 0;
        }

        .highlight {
          transition: all 0.5s cubic-bezier(0.615, 0.19, 0.305, 0.91);
        }
      `}</style>
    </div>
  );
};

export default WidgetLocation;