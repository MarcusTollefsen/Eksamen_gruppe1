
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function TypeCard({type, className }) {
  const [iconUrl, setIconUrl] = useState(null);

  useEffect(() => {
    const loadIcon = async () => {
      try {
        const iconPath = `../icons/${type.toLowerCase()}.png`;
        const icon = await import(iconPath);
        setIconUrl(icon.default);
      } catch (error) {
        console.error('Failed to load icon:', error);
      }
    };

    loadIcon();
  }, [type]);

  return (
    <div className={`type-card ${className}`}>
      <Link to={`/${type}`}>
        {iconUrl && <img src={iconUrl} alt={type} />}
        <h3>{type}</h3>
      </Link>
    </div>
  );
}

export default TypeCard;
