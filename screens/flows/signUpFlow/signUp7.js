import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, View, TextInput, Text, LogBox, StatusBar, InteractionManager, KeyboardAvoidingView, TouchableOpacity, Keyboard, Animated, PanResponder,  } from 'react-native';
import * as Animatable from 'react-native-animatable';
import MovableView from 'react-native-movable-view';
import { isIphone8 } from '../../../utils/screenHeight';
//import ThingSelector from '../../../components/ThingSelector';
import Thing from '../../../components/Thing';
//import Thing from './Thing';
import react from 'react';
//import NativeMethodsMixin from 'NativeMethodsMixin';
// import GoconInput from '../../../components/GoconInput';

const PAN_AREA_MARGIN = isIphone8() ? '10%' : '35%';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();

export default ({ navigation, route }) => {
    const pan = useRef(new Animated.ValueXY()).current;
    const ref = React.useRef();

    const onMove = React.useCallback((_, gesture) => {
      updatePanPositionX(pan.x.__getValue());
      updatePanPositionY(pan.y.__getValue());
    });

    const onRelease = React.useCallback((borderX, borderY) => {
      updatePanPositionX(borderX);
      updatePanPositionY(borderY);
    });

    const onDrift = React.useCallback((gesture) => {
      updatePanPositionX(gesture.dx);
      updatePanPositionY(gesture.dy);
    });

    const panResponder = useRef(
      PanResponder.create({
        onMoveShouldSetPanResponder: () => true,
        onPanResponderGrant: (gestureState) => {
          pan.setOffset({
            x: pan.x._value,
            y: pan.y._value
          });
          pan.setValue({
            x: 0,
            y: 0
          });
        },
        /*onPanResponderMove: Animated.event(
          [
           null,                // raw event arg ignored
            { dx: pan.x, dy: pan.y },
          ],
          {useNativeDriver: true}
        ),*/
        onPanResponderMove: (evt, gestureState) => {
          updatePanPosition(gestureState.dx);
          console.log("hi");
        },
        onPanResponderMove: Animated.event([null, { 
          dx: pan.x,
          dy: pan.y
        }], { 
            useNativeDriver: false,
            listener: onMove
          },
        ),
        onPanResponderRelease: (e, gestureState) => {
            pan.flattenOffset();
            if (Math.sqrt(Math.pow(pan.x._value, 2)+Math.pow(pan.y._value, 2)) < 100) { 
            //if () {}
              Animated.decay(pan, {
                deceleration: 0.99,
                velocity: { x: gestureState.vx, y: gestureState.vy },
                useNativeDriver: false,
              }).start(onDrift(gestureState));
            } else {
              let dist = Math.sqrt(Math.pow(pan.x._value, 2)+Math.pow(pan.y._value, 2));
              let angle = Math.atan2(pan.x._value, pan.y._value);
              let borderX = Math.cos(angle+(Math.PI/2))*100;
              let borderY = Math.sin(angle+(Math.PI/2))*100;
              //alert("X: "+pan.x._value+"Y: "+pan.y._value+"ANG: "+angle);
              onRelease(-borderX, borderY);
              Animated.spring(pan, {
                toValue: {x: -borderX, y: borderY},
                friction: 4,
                useNativeDriver: false,
              }).start();
            }
        },
        onPanResponderEnd: (e, gestureState) => {
        }
      })
    ).current;

    const AnimationRef = useRef(null);
    const AnimationRef2 = useRef(null);

    const [gender, setGender] = React.useState('');
    const [buttonState, setButtonState] = React.useState(true);
    const [panPositionX, updatePanPositionX] = React.useState();
    const [panPositionY, updatePanPositionY] = React.useState();
    const [layoutX, setLayoutX] = React.useState(0);
    const [layoutY, setLayoutY] = React.useState(0);
    const [layoutWidth, setLayoutWidth] = React.useState(0);
    const [layoutHeight, setLayoutHeight] = React.useState(0);

    useEffect(() => {
       /* if(AnimationRef) {
            AnimationRef.current?.fadeIn();
            setTimeout(() => {
                AnimationRef.current?.fadeOut();
                setTimeout(() => {
                    AnimationRef2.current?.fadeIn();
                }, 500);
            }, 1000);
        }*/
    });


   pan.addListener(({ x, y }) => {
        //setPanProp(pan.x._value);
    });

    const handlePress = () => {
        Keyboard.dismiss();
        alert(gender);
    }

    const handleGenderPress = (genderType) => {
        setGender(genderType);
        navigation.navigate('YourThing', {
            name: route.params.name,
            email: route.params.name,
            password: route.params.password,
            gender: gender,
        });
    }

    const fadeIn = {
      from: {
        opacity: 0,
      },
      to: {
        opacity: 1,
      },
    };

    const buttonStateStyle = buttonState ? styles.lowOpacity : "";

    return(
      <View style={styles.container}>
        <View style={styles.contentsContainer}>
            <View style={styles.heroContainer}>
                <Animatable.Text style={styles.hero} ref={AnimationRef}>
                  LET'S GET TO THE{"\n"}FUN PART...{route.params.gender}
                </Animatable.Text>
                <Animatable.Text style={[styles.hero, styles.secondHeroFadeIn]} ref={AnimationRef2}>
                  WHAT'S YOUR{"\n"}THING...?{route.params.gender}
                </Animatable.Text>
            </View>
            <View 
              style={styles.inputContainer}
              ref={ref}
              onLayout={e => {
                ref.current.measureInWindow((x, y, width, height) => {
                  
                  setLayoutX(x);
                  setLayoutY(y);
                  setLayoutHeight(height);
                  setLayoutWidth(width);
                });
              }}
            >
                <Animated.View
                    hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
                    style={{
                    transform: [{ translateX: pan.x }, { translateY: pan.y }]
                    }}
                    {...panResponder.panHandlers}
                >
                  <View style={styles.thingsContainer}>
                      <View style={styles.thingsRow}>
                          <Thing thingTitle='Running' panPropX={panPositionX} panPropY={panPositionY} viewHeight={layoutHeight} viewWidth={layoutWidth} viewX={layoutX} viewY={layoutY}/>
                          <Thing thingTitle='Skiing' panPropX={panPositionX} panPropY={panPositionY} viewHeight={layoutHeight} viewWidth={layoutWidth} viewX={layoutX} viewY={layoutY}/>
                          <Thing thingTitle='Music' panPropX={panPositionX} panPropY={panPositionY} viewHeight={layoutHeight} viewWidth={layoutWidth}viewX={layoutX} viewY={layoutY} />
                          <Thing thingTitle='Jazz' panPropX={panPositionX} panPropY={panPositionY} viewHeight={layoutHeight} viewWidth={layoutWidth} viewX={layoutX} viewY={layoutY}/>
                          <Thing thingTitle='Golf' panPropX={panPositionX} panPropY={panPositionY} viewHeight={layoutHeight} viewWidth={layoutWidth} viewX={layoutX} viewY={layoutY}/>
                          <Thing thingTitle='Cycling' panPropX={panPositionX} panPropY={panPositionY} viewHeight={layoutHeight} viewWidth={layoutWidth} viewX={layoutX} viewY={layoutY}/>
                      </View>
                      <View style={styles.thingsRow}>
                          <Thing thingTitle='Jazz' panPropX={panPositionX} panPropY={panPositionY} viewHeight={layoutHeight} viewWidth={layoutWidth} viewX={layoutX} viewY={layoutY}/>
                          <Thing thingTitle='Golf' panPropX={panPositionX} panPropY={panPositionY} viewHeight={layoutHeight} viewWidth={layoutWidth} viewX={layoutX} viewY={layoutY}/>
                          <Thing thingTitle='Cycling' panPropX={panPositionX} panPropY={panPositionY} viewHeight={layoutHeight} viewWidth={layoutWidth} viewX={layoutX} viewY={layoutY}/>
                          <Thing thingTitle='Jazz' panPropX={panPositionX} panPropY={panPositionY} viewHeight={layoutHeight} viewWidth={layoutWidth} viewX={layoutX} viewY={layoutY}/>
                          <Thing thingTitle='Golf' panPropX={panPositionX} panPropY={panPositionY} viewHeight={layoutHeight} viewWidth={layoutWidth} viewX={layoutX} viewY={layoutY}/>
                          <Thing thingTitle='Cycling' panPropX={panPositionX} panPropY={panPositionY} viewHeight={layoutHeight} viewWidth={layoutWidth} viewX={layoutX} viewY={layoutY}/>
                      </View>
                  </View>
                </Animated.View>
            </View>
        </View>
        <KeyboardAvoidingView 
          style={styles.actionContainer}
          behavior={ Platform.OS === 'ios'? 'padding': null}
        >
            <TouchableOpacity 
                style={[styles.action]}
                onPress={() => handlePress()}
            >
                <Text style={styles.actionText}>
                    THAT'S ME
                </Text>
            </TouchableOpacity> 
        </KeyboardAvoidingView>
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '100%'
  },
  contentsContainer: {
      alignItems: 'center',
      marginTop: '10%',
      width: '100%',
      paddingHorizontal: 30,
  },
  heroContainer: {
    alignSelf: 'flex-start',
    marginTop: '5%',
  },
  hero: {
      color: '#00E864',
      fontSize: 40,
      fontWeight: "700",
  },
  bodyContainer: {
      marginTop: 35,
      paddingRight: 50,
  },
  body: {
      color: '#fff',
      fontSize: 20,
      fontWeight: "700",
  },
  actionContainer: {
      alignItems: 'center',
      marginBottom: '13%',
      flex: 1,
      justifyContent: 'flex-end',
      paddingBottom: 50,
  },
  maleGender: {
    backgroundColor: '#00D8FF',
    paddingHorizontal: 45,
    paddingVertical: 15,
    marginBottom: 15,
    borderRadius: 100,
  },
  femaleGender: {
    backgroundColor: '#FF009D',
    paddingHorizontal: 40,
    paddingVertical: 15,
    marginBottom: 15,
    borderRadius: 100,
  },
  genderText: {
    color: '#fff',
    fontSize: 27,
    fontWeight: "400",
  },
  action: {
    backgroundColor: '#00E864',
    paddingHorizontal: 25,
    paddingVertical: 10,
    marginBottom: 20,
    borderRadius: 100,
  },
  actionText: {
    color: '#000',
    fontSize: 20,
    fontWeight: "700",
  },
  inputContainer: {
    height: '50%',
    width: '100%',
    marginTop: PAN_AREA_MARGIN,
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'center'
  },
  nameInput: {
    height: 50,
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 100,
    paddingHorizontal: 15,
    fontWeight: '600',
    fontSize: 16,
  },
  inputNametag: {
    marginBottom: 10,
    alignSelf: 'flex-start',
  },
  nametag: {
    color: '#fff',
    fontWeight: '600'
  },
  lowOpacity: {
    opacity: 0.4,
  },
  genderSelected: {
    //borderWidth: 2,
    borderColor: '#FFF'
  },
  secondHeroFadeIn: {
    opacity: 0,
    position: 'absolute',
  },
  box: {
    height: 150,
    width: 150,
    backgroundColor: "blue",
    borderRadius: 5
  },
  thingsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  thingItem: {
    backgroundColor: '#00E48C',
    padding: 12,
    borderRadius: 50,
    margin: 5,
  },
  thingName: {
      color: '#000',
      fontWeight: '600',
      fontSize: 18
  },
  thingsRow: {
      flexDirection: 'row',
  }
});