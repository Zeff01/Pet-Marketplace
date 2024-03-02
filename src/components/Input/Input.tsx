import { TextStyle, StyleSheet, ColorValue, TextInputProps, TextInput } from 'react-native';
import { COLORS } from '@theme';

type InputProps = {
  loading?: boolean; // makes input uneditable and adjust opacity
  style?: TextStyle;
  placeHolderTextColor?: ColorValue;
} & TextInputProps;

export default function Input({
  loading = false,
  style = {},
  placeHolderTextColor = COLORS['Dark Mode']['muted-foreground'],
  ...props
}: InputProps) {
  const styles = StyleSheet.compose(style, {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 2,
    borderColor: COLORS['Dark Mode'].accent,
    width: 250,
    borderRadius: 8,
    color: COLORS['Dark Mode'].foreground,
    opacity: loading ? 0.5 : 1,
  });

  return (
    <TextInput
      editable={!loading}
      style={styles}
      placeholderTextColor={placeHolderTextColor}
      {...props}
    />
  );
}
