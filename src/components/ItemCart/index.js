import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../contexts';

export default function ItemCart({ data, amountItem, deleteItem }) {

    const [ amount, setAmount ] = useState(data?.amount);

    function handleAmount() {
        amountItem();
        setAmount((value) => value + 1);
    }

    function handleRemoveItem() {
        deleteItem()

        if (amount === 0) {

            setAmount(0)
            return
        }

        setAmount(item => item - 1)

    }



    return (
        <View style={styles.container}>
            <View style={styles.areaDescription}>
                <Text style={styles.nameItem}>{data.name}</Text>
                <Text style={styles.price}>R$ {data.price}</Text>
            </View>
            <View style={styles.areaQuantity}>
                <TouchableOpacity style={styles.buttonPlus} onPress={handleRemoveItem}>
                    <Feather name="minus" size={30} color={'#fff'} />
                </TouchableOpacity>

                <Text style={styles.textQuantity}>{amount}</Text>

                <TouchableOpacity style={styles.buttonPlus} onPress={handleAmount}>
                    <Feather name="plus" size={30} color={'#fff'} />
                </TouchableOpacity>
            </View>
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
        marginLeft: 8,
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
    textQuantity: {
        fontSize: 18,
        marginLeft: 8,
        marginRight: 8,
    },
    areaQuantity: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        right: 10,
    },
    buttonPlus: {
        width: 30,
        height: 30,
        borderRadius: (30 / 2) * 100,

        backgroundColor: 'rgba(0, 110, 255, 0.4)',
    },
});
