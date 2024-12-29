import { useState, useContext } from "react";
import { View, Text, StyleSheet, SafeAreaView, FlatList, TouchableOpacity } from "react-native";
import { Feather } from '@expo/vector-icons';
import { CartContext } from "../../contexts";
import Products from "../../components/products";
import { useNavigation } from "@react-navigation/native";


export default function Home() {


    const { cart, addItemCart } = useContext(CartContext);
    const navigation = useNavigation()
    const [ products, setProducts ] = useState([
        { id: '1', name: 'Coca-Cola', price: 9.88 },
        { id: '2', name: 'Bata Frita', price: 4.98 },
        { id: '3', name: 'Chocolate', price: 7.25 },
    ])


    function handleItemCart(item) {
        addItemCart(item)
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.contentCart}>
                <Text style={styles.title}>Lista de produtos</Text>

                <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                    {cart.length > 0 && (
                        <View style={styles.dot}>
                            <Text style={styles.textDot}>{cart?.length}</Text>
                        </View>
                    )}
                    <Feather name="shopping-cart" size={30} color={'#000'} />
                </TouchableOpacity>

            </View>

            <FlatList
                data={products}
                keyExtractor={(item) => String(item.id)}
                renderItem={({ item }) => <Products data={item} addToCart={() => handleItemCart(item)} />}

            />

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

        paddingLeft: 14,
        paddingRight: 14,
        backgroundColor: '#fafafa'
    },
    contentCart: {

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

        marginTop: 30,
        marginBottom: 30


    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    dot: {
        width: 22,
        height: 22,
        alignItems: 'center',
        justifyContent: "center",
        borderRadius: 20 / 2 * 100,
        position: 'absolute',
        bottom: 0,
        left: -4,
        zIndex: 99,
        backgroundColor: 'red'

    },
    textDot: {
        color: '#fff',
        textAlign: 'center'

    }
})