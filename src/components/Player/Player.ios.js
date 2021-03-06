'use strict';

import React, {
  Text,
  View,
  StyleSheet
} from 'react-native';
import Base from './PlayerBase'
import {connect} from 'react-redux';
import {mapStateToProps} from './connectToStore';

const componentStyle = require('./styles').default;
const style = StyleSheet.create(componentStyle);

class PlayerPresentation extends Base {
  render() {
    return (
      <View
        style={
          this.props.you === true ? style.youWrapper : style.playerWrapper
        }
      >
        <Text>
          {this.props.player}
        </Text>
      </View>
    );
  }
}

const Player = connect(mapStateToProps)(PlayerPresentation);
export default Player;
