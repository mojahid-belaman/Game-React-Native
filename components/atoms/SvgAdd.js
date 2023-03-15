import Svg, { Path } from "react-native-svg";

const SvgAdd = (props) => (
  <Svg width={55} height={20} viewBox="0 0 32 32" {...props}>
    <Path d="M24 18h-6v6h-4v-6H8v-4h6V8h4v6h6v4z" />
  </Svg>
);

export default SvgAdd;
