import { useState } from 'react';
import {
    View, 
    StyleSheet, 
    TextInput, 
    Image, 
    TouchableOpacity,
    Keyboard,
} from 'react-native';

function AddTodo({onInsert}){
    const [text, setText] = useState('');
    console.log(text);

    const onPress = () => {
        onInsert(text)
        setText('');   //초기화
        Keyboard.dismiss();
    }

    return (
        <View style={styles.block}>
            <TextInput 
                placeholder='할일을 입력하세요.' 
                style={styles.input}
                value={text}
                onChangeText={setText}
                onSubmitEditing={onPress}
                // returnKeyType="done"
            />
            <View style={styles.circleWrapper}>
                <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
                    <View style={styles.buttonStyle}>
                        <Image source={require('../assets/icons/add_white/add_white.png')} />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    block: {
        height: 64,
        paddingHorizontal: 16,
        //backgroundColor: 'white',
        borderColor: '#bdbdbd',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        alignItems: 'center',
        flexDirection: 'row',
    },
    input: {
        flex: 1,
        fontSize: 16,
        paddingVertical: 8,
    },
    buttonStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#26a69a',
        width: 48,
        height: 48,
        borderRadius: 24,
    },
    circleWrapper: {
        overflow: 'hidden',
        borderRadius: 24,
    },
});

export default AddTodo;