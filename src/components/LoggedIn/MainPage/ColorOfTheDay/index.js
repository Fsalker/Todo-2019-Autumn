import React, { useState } from 'react';
import { useGlobal } from 'reactn';

const Element = () => {
  const [auth] = useGlobal('auth');
  const [error, setError] = useState('');
  const [colorInfo, setColorInfo] = useState(null);

  const getColorInfo = async () => {
    const req = await fetch('/colors', {
      headers: { auth },
    });

    if (req.status !== 200) {
      setError(await req.text());
    } else {
      setColorInfo(await req.json());
    }
  };

  if (!colorInfo) {
    getColorInfo();
  }

  return (
    <div style={{ backgroundColor: '#FFF', padding: '4px' }}>
      <p style={{ color: 'red' }}>{ error }</p>
      <h1>Color of the day</h1>
      <div style={{ width: '50px', height: '50px', backgroundColor: colorInfo && `#${colorInfo.value}` }} />
      <h4>
        Color:
        {colorInfo && ` #${colorInfo.value.toUpperCase()}`}
      </h4>
      <h4>
        Amount of likes:
        {colorInfo && ` ${colorInfo.likes}`}
      </h4>
    </div>
  );
};

export default Element;
