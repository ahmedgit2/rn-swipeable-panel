import * as React from 'react';
import { StyleSheet, View } from 'react-native';

type BarProps = {
  barStyle?: object;
  barContainerStyle?: object;
  header?:React.ReactElement<any,any>;
};

export const Bar = ({ barStyle, barContainerStyle ,header}: BarProps) => {
  return (
    <View style={[BarStyles.barContainer, barContainerStyle]}>
      <View style={[BarStyles.bar, barStyle]} />
       {header && header}
    </View>
  );
};

const BarStyles = StyleSheet.create({
  barContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bar: {
    width: '10%',
    height: 5,
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#e2e2e2',
  },
});
