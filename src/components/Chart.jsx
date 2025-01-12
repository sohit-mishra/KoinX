// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from 'react';
import { Box, Link, Text } from '@chakra-ui/react';
import { ArrowRightIcon } from '@chakra-ui/icons';

function TradingViewWidget() {
  const containerRef = useRef();

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js';
    script.type = 'text/javascript';
    script.async = true;
    script.innerHTML = `
      {
        "symbols": [
          [
            "CRYPTO:BTCUSD|1D"
          ]
        ],
        "chartOnly": false,
        "width": "100%",
        "height": "100%",
        "locale": "en",
        "colorTheme": "light",
        "autosize": true,
        "showVolume": false,
        "showMA": false,
        "hideDateRanges": false,
        "hideMarketStatus": false,
        "hideSymbolLogo": false,
        "scalePosition": "right",
        "scaleMode": "Normal",
        "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
        "fontSize": "12",
        "noTimeScale": false,
        "valuesTracking": "2",
        "changeMode": "price-and-percent",
        "chartType": "area",
        "headerFontSize": "large",
        "lineWidth": 2,
        "lineType": 0,
        "dateRanges": [
          "1d|1",
          "1m|30",
          "3m|60",
          "12m|1D",
          "60m|1W",
          "all|1M"
        ]
      }
    `;
    containerRef.current.appendChild(script);
  }, []);

  return (
    <Box
      bg="white"
      borderRadius="md"
      shadow="md"
      p={4}
      w="100%"
      h="80vh"
      overflow="hidden"
    >
      <Text fontSize="xl" fontWeight="bold" textAlign="left" mb={4}>
        Cryptocurrencies <ArrowRightIcon boxSize={3} color='grey' /> Bitcoin
      </Text>
      <Box ref={containerRef} w="100%" h="100%">
        <Box className="tradingview-widget-container__widget" />
      </Box>
    </Box>
  );
}

export default memo(TradingViewWidget);
