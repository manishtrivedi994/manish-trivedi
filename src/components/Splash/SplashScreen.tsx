import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
  runOnJS,
} from 'react-native-reanimated';
import Svg, {
  Defs,
  LinearGradient,
  Stop,
  Path,
  G,
  Rect,
  Circle,
  Ellipse,
  Text,
} from 'react-native-svg';

interface SplashScreenProps {
  onFinish: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({onFinish}) => {
  const fadeAnim = useSharedValue(0);
  const scaleAnim = useSharedValue(0.8);
  const rotation = useSharedValue(0);

  useEffect(() => {
    fadeAnim.value = withTiming(1, {duration: 1000});
    scaleAnim.value = withTiming(1, {duration: 1000});

    rotation.value = withRepeat(withTiming(360, {duration: 3000}), -1, false);

    const timer = setTimeout(() => {
      fadeAnim.value = withTiming(0, {duration: 500}, () => {
        runOnJS(onFinish)();
      });
    }, 3000);

    return () => clearTimeout(timer);
  }, [fadeAnim, scaleAnim, rotation, onFinish]);

  const backgroundAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: fadeAnim.value,
      transform: [{scale: scaleAnim.value}],
    };
  });

  const animatedReactSymbolStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotate: `${rotation.value}deg`,
        },
      ],
    };
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.backgroundContainer, backgroundAnimatedStyle]}>
        <Svg
          width="100%"
          height="100%"
          viewBox="0 0 360 640"
          preserveAspectRatio="xMidYMid slice">
          <Defs>
            <LinearGradient id="a" x1="0%" x2="100%" y1="0%" y2="100%">
              <Stop offset="0%" stopColor="#1f2937" stopOpacity={1} />
              <Stop offset="100%" stopColor="#111827" stopOpacity={1} />
            </LinearGradient>
          </Defs>
          <Path fill="url(#a)" d="M0 0h360v640H0z" />
          <G opacity={0.1}>
            <Rect width={60} height={40} x={30} y={80} fill="#a855f7" rx={4} />
            <Rect width={50} height={3} x={35} y={85} fill="#fff" rx={1} />
            <Rect width={35} height={3} x={35} y={92} fill="#fff" rx={1} />
            <Rect width={45} height={3} x={35} y={99} fill="#fff" rx={1} />
            <Rect width={25} height={3} x={35} y={106} fill="#fff" rx={1} />
          </G>
          <G opacity={0.08} transform="rotate(15)">
            <Rect
              width={50}
              height={35}
              x={280}
              y={140}
              fill="#a855f7"
              rx={4}
            />
            <Rect width={40} height={2.5} x={285} y={145} fill="#fff" rx={1} />
            <Rect width={30} height={2.5} x={285} y={151} fill="#fff" rx={1} />
            <Rect width={35} height={2.5} x={285} y={157} fill="#fff" rx={1} />
            <Rect width={20} height={2.5} x={285} y={163} fill="#fff" rx={1} />
          </G>
          <Path
            fill="#a855f7"
            d="m50 180 10-20 10 20-10 20z"
            opacity={0.15}></Path>
          <Path
            fill="#a855f7"
            d="m310 420 10-10 10 10-10 10z"
            opacity={0.12}></Path>
          <G opacity={0.2} transform="translate(40 380)">
            <Rect
              width={20}
              height={35}
              fill="none"
              stroke="#a855f7"
              strokeWidth={1.5}
              rx={4}
            />
            <Circle cx={10} cy={30} r={1.5} fill="#a855f7" />
            <Rect
              width={14}
              height={20}
              x={3}
              y={3}
              fill="#a855f7"
              opacity={0.3}
              rx={1}
            />
          </G>
          <G opacity={0.15} transform="translate(300 100)">
            <Rect
              width={30}
              height={18}
              y={10}
              fill="none"
              stroke="#a855f7"
              strokeWidth={1.5}
              rx={1}
            />
            <Rect
              width={26}
              height={12}
              x={2}
              y={12}
              fill="#a855f7"
              opacity={0.3}
              rx={1}
            />
            <Rect width={34} height={3} x={-2} y={28} fill="#a855f7" rx={1} />
          </G>
          <G opacity={0.18} transform="translate(80 520)">
            <Path
              fill="none"
              stroke="#a855f7"
              strokeWidth={2}
              d="M0 5h3V0h5m0 10H3v5H0M20 0h5v5h3m0 10h-3v-5h-5"
            />
          </G>
          <G opacity={0.12} transform="translate(280 500)">
            <Path
              fill="none"
              stroke="#a855f7"
              d="m10 0 10 6v12l-10 6-10-6V6zM30 12l10 6v12l-10 6-10-6V18z"
            />
            <Path stroke="#a855f7" d="M20 18" />
          </G>
          <Circle cx={60} cy={120} r={2} fill="#a855f7" opacity={0.3}></Circle>
          <Circle
            cx={300}
            cy={200}
            r={1.5}
            fill="#a855f7"
            opacity={0.4}></Circle>
          <Circle cx={80} cy={500} r={1} fill="#a855f7" opacity={0.5}></Circle>
          <Circle
            cx={320}
            cy={480}
            r={2.5}
            fill="#a855f7"
            opacity={0.2}></Circle>
          <Path
            stroke="#a855f7"
            strokeWidth={0.5}
            d="m60 120 240 80"
            opacity={0.1}></Path>
          <Path
            stroke="#a855f7"
            strokeWidth={0.5}
            d="m80 500 240-20"
            opacity={0.08}></Path>

          <Text
            x={180}
            y={416}
            fill="#fff"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize={28}
            fontWeight={300}
            letterSpacing={2}
            textAnchor="middle">
            MANISH
          </Text>
          <Text
            x={180}
            y={448}
            fill="#a855f7"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize={28}
            fontWeight={700}
            letterSpacing={2}
            textAnchor="middle">
            TRIVEDI
          </Text>
          <Text
            x={180}
            y={480}
            fill="#9ca3af"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize={14}
            fontWeight={400}
            letterSpacing={1}
            textAnchor="middle">
            React Native Developer
          </Text>
          <Path
            stroke="#a855f7"
            strokeWidth={2}
            d="M 72 557 L 288 557"
            opacity={0.8}></Path>
        </Svg>
      </Animated.View>

      <Animated.View
        style={[styles.reactSymbolContainer, animatedReactSymbolStyle]}>
        <Svg width={150} height={150} viewBox="0 0 100 100">
          <G transform="translate(50 50)">
            <Ellipse
              fill="none"
              stroke="#a855f7"
              strokeWidth={2.5}
              rx={25}
              ry={9}
            />
            <Ellipse
              fill="none"
              stroke="#a855f7"
              strokeWidth={2.5}
              rx={25}
              ry={9}
              transform="rotate(60)"
            />
            <Ellipse
              fill="none"
              stroke="#a855f7"
              strokeWidth={2.5}
              rx={25}
              ry={9}
              transform="rotate(-60)"
            />
            <Circle r={2} fill="#a855f7" />
          </G>
        </Svg>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f2937',
  },
  backgroundContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  },
  reactSymbolContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginLeft: -75,
    marginTop: -75,
    zIndex: 10,
  },
});

export default SplashScreen;
