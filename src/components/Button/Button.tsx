import React from 'react';
import { Pressable, Image, Text, ActivityIndicator, ButtonProps } from 'react-native';
import { IButton } from './Button.typeDefs';

export default function Button({
  title,
  titleStyle,
  image,
  style,
  activeOpacity,
  disabled,
  isLoading,
  loaderColor,
  imageStyle,
  ...rest
}: IButton & ButtonProps) {
  const opacityStyle = { opacity: disabled ? 0.6 : 1 };
  return (
    <Pressable
      style={({ pressed }) => [{ opacity: pressed || disabled ? 0.6 : 1 }, style]}
      onPress={!disabled ? rest.onPress : undefined}>
      {({ pressed }) => (
        <>
          {isLoading && <ActivityIndicator size="small" color={loaderColor} />}
          {!isLoading && image && <Image source={image} style={imageStyle} />}
          {!isLoading && title && (
            <Text style={[titleStyle, { opacity: pressed || disabled ? 0.6 : 1 }]}>{title}</Text>
          )}
        </>
      )}
    </Pressable>
  );
}
