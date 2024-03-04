import { TextStyle, StyleSheet, ColorValue, TextInputProps, TextInput } from 'react-native';
import { useGlobalTheme } from '../../providers/ThemeProvider';

type InputProps = {
  loading?: boolean; // makes input uneditable and adjust opacity
  style?: TextStyle;
  placeHolderTextColor?: ColorValue;
} & TextInputProps;

export default function Input({
  loading = false,
  style = {},
  placeHolderTextColor,
  ...props
}: InputProps) {
  const { colors } = useGlobalTheme();

  const styles = StyleSheet.compose(style, {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 2,
    borderColor: colors.accent,
    width: 250,
    borderRadius: 8,
    color: colors.foreground,
    opacity: loading ? 0.5 : 1,
  });

  return (
    <TextInput
      editable={!loading}
      style={styles}
      placeholderTextColor={placeHolderTextColor ?? colors['muted-foreground']}
      {...props}
    />
  );
}
