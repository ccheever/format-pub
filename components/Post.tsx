import { Text, View } from "react-native";
import { type ComponentProps } from "react";

export function Post(props, context) {
  let { content } = props;

  if (typeof content === "string") {
    return (
      <View style={{
        borderColor: '#cccccc',
        borderWidth: 1,
        borderCurve: 'continuous',
        borderRadius: 3,
        padding: 3,
      }}>
        <Text>{content}</Text>
      </View>
    );
  } else {
    return (
      <View>
        <Text>(Not supported content type)</Text>
      </View>
    );
  }
}
