import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function Products({ data, addToCart }) {
    return (
        <View style={styles.container}>
            <View style={styles.areaDescription}>
                <Text style={styles.nameItem}>{data.name}</Text>
                <Text style={styles.price}>R$ {data.price}</Text>
            </View>
            <TouchableOpacity style={styles.buttonPlus} onPress={addToCart}>
                <Feather name="plus" size={30} color={'#fff'} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginBottom: 8,
        elevation: 3,
    },
    areaDescription: {
        padding: 4,
    },

    nameItem: {
        fontSize: 18,
        fontStyle: 'italic',
        fontWeight: 'bold',
    },
    price: {
        marginTop: 8,
        fontSize: 16,
    },
    buttonPlus: {
        width: 30,
        height: 30,
        borderRadius: (30 / 2) * 100,
        right: 8,
        backgroundColor: '#000',
    },
});
