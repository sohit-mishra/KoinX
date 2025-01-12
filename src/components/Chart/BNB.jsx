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
        "height": "100%",
        "locale": "en",
        "colorTheme": "light",
        "isTransparent": false,
        "autosize": true,
        "marginbottom": 10
      }
    `;
    containerRef.current.appendChild(script);
  }, []);

  return (
    <Box>
      <Box
        ref={containerRef}
        w="100%"
        h="100%"
        bg="white"
        borderRadius="md"
        shadow="md"
        mb={4} // Margin to create space between charts
      />
    </Box>
  );
};

export default BNB;
