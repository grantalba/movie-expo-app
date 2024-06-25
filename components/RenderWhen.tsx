import * as React from 'react';
import {View} from 'react-native';

function RenderWhen({condition = false, children = <View />}) {
  // Used to render react elements when the condition is true.
  return condition ? children : null;
}

export default RenderWhen;
