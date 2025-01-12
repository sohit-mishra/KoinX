// BNB.jsx
import React, { useEffect, useRef } from 'react';
import { Box } from '@chakra-ui/react';

const BNB = () => {
  const containerRef = useRef();

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js';
    script.async = true;
    script.innerHTML = `
      {
        "symbol": "CRYPTOCAP:BNB",
        "width": "100%",
        "height": "200",
        "locale": "en",
        "colorTheme": "light",
        "isTransparent": false,
        "autosize": true
      }
    `;
    containerRef.current.appendChild(script);
  }, []);

  return (
    <Box
      ref={containerRef}
      w="300px"
      h="220px"
      bg="white"
      borderRadius="md"
      shadow="md"
      m={2}
      mt={10}
    />
  );
};

export default BNB;
