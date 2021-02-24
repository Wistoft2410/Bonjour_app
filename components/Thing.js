import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, View, Text, TextInput, Dimensions, Animated } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import EStyleSheet from 'react-native-extended-stylesheet';

export default ( props ) => {
    //const animPadding = useRef(new Animated.Value(12)).current;

    const SIZE = props.thingSize;
    const ref = React.useRef();

    const [newPadding, setNewPadding] = React.useState(12);
    const [newFontSize, setNewFontSize] = React.useState(18);

    const [layoutX, setLayoutX] = React.useState(0);
    const [layoutY, setLayoutY] = React.useState(0);
    const [viewWidth, setWidth] = React.useState(0);
    const [layoutWidth, setLayoutWidth] = React.useState(0);
    const [initialWidth, setInitialWidth] = React.useState(0);
    const [panX, setPanX] = React.useState('');
    const [blobWidth, setBlobWidth] = React.useState("blue");
    const [, updateState] = React.useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);

    useEffect(() => {
        let posX = layoutX + props.panPropX;
        let posY = layoutY + props.panPropY;
        setBlobWidth(false);

        
        /*if ((posX > Dimensions.get('window').width-85 || posX < 35) || (posY < props.viewY || posY > props.viewY+props.viewHeight)) {
            setBlobWidth(true);
            resizeBlob();
        }*/

        if (posX > Dimensions.get('window').width-85) {
            //setBlobWidth(true);
            resizeBlob("right");
        } else if (posX < 35) {
            //setBlobWidth(true);
            resizeBlob("left");
        } else if (posY < props.viewY) {
            //setBlobWidth(true);
            resizeBlob("top");
        } else if (posY > props.viewY+props.viewHeight) {
            //setBlobWidth(true);
            resizeBlob("bot");
        } else {
            setNewPadding(12);
        }
        
    },[layoutX, props])

    const thingPress = () => {
        const pos = props.viewHeight;
        let posX = layoutX + props.panPropX;
        let posY = layoutY + props.panPropY;
        //alert("posX: "+posX+"viewheight: "+pos);
        alert(props.viewY-posY);
    }

    const handleInitialResize = (initialX, w) => {
        setWidth(initialWidth);
        if (initialX > Dimensions.get('window').width-85 || initialX < 35) {
            setBlobWidth(true);
        } else {
            console.log(initialX);
            setBlobWidth(false);
        }
    }

    const resizeBlob = (side) => {
        let posX = layoutX + props.panPropX;
        let posY = layoutY + props.panPropY;
        let myWidth = layoutWidth;
        
        switch(side) {
            case "top":
              const distTop = props.viewY-posY;
              const newPadding = Math.abs(12-(distTop/30));
              const newFontSize = Math.abs(18-(distTop/40));
              /*Animated.timing(animPadding, {
                toValue : newPadding2,
                timing : 50,
              }).start();*/
              setNewPadding(newPadding);
              //setNewFontSize(newFontSize);
              //console.log(newWidth);
              break;
            case "bottom":
              // code block
              break;
            case "left":
            // code block
              break;
            case "right":
                // code block
              break;
            default:
              // code block
        }

        const distLeft = "";
        const distRight = "";
        const distTop = "";
        const distBot = "";
    }

    return(
        <View
            style={[styles.thingItem, {backgroundColor: (blobWidth ? 'green' : 'red')}, {padding: newPadding}]}
            ref={ref}
            onLayout={e => {
              ref.current.measureInWindow((x, y, width) => {
                
                setLayoutX(x);
                setLayoutY(y);
                setLayoutWidth(width);
                setInitialWidth(width);
                setTimeout(function() { handleInitialResize(x, width); }, 10);
              });
            }}
        >
            <TouchableOpacity
                onPress={() => thingPress()}
            >
                <Text numberOfLines={1} style={[styles.thingName]}>
                    {props.thingTitle}
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    box: {
        height: 150,
        width: 150,
        backgroundColor: "blue",
        borderRadius: 5
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center'
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
        fontSize: 12,
    },
    thingsRow: {
        flexDirection: 'row',
    },
    lowWidth: {
        backgroundColor: 'red',
    }
  });
