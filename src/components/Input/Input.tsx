import { TextStyle, StyleSheet, ColorValue, TextInputProps, TextInput } from 'react-native';
import { useGlobalTheme } from '@hooks/useGlobalTheme';

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

  const styles = StyleSheet.compose(
    {
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderWidth: 2,
      borderColor: colors.accent,
      width: 250,
      borderRadius: 8,
      color: colors.foreground,
      opacity: loading ? 0.5 : 1,
    },
    style,
  ); // style provided will be overrided

  return (
    <TextInput
      editable={!loading}
      style={styles}
      placeholderTextColor={placeHolderTextColor ?? colors['muted-foreground']}
      {...props}
    />
  );
}
