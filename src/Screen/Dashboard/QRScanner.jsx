import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

const QRScanner = () => {
 

  return (
    <View style={{ flex: 1 }}>
      {/* <Camera style={{ flex: 1 }} /> */}
      <Text style={{ color: 'white', fontSize: 16, textAlign: 'center' }}>
        Place the QR code within the frame
      </Text>
    </View>
  );
};

export default QRScanner;
