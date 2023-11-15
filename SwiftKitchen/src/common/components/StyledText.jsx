import React, { Component } from "react";
import { Text } from "react-native";

export default class StyledText extends Component {
  render() {
    return (
      <Text {...this.props}>
        <Text
          className="font-sk"
          style={{
            fontFamily: "Jost-Medium",
            // fontWeight: 'bold',
            // style: 'normal',
          }}
        >
          {this.props.children}
        </Text>
      </Text>
    );
  }
}

export class StyledTextBold extends Component {
  render() {
    return (
      <Text {...this.props}>
        <Text
          style={{
            fontFamily: "Jost-Bold",
            // fontWeight: 'normal',
            // style: "normal",
          }}
        >
          {this.props.children}
        </Text>
      </Text>
    );
  }
}
