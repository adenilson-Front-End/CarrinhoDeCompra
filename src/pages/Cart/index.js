import { useContext } from "react";
import { View, Text, StyleSheet, SafeAreaView, FlatList } from "react-native";
import { CartContext } from "../../contexts";
import ItemCart from "../../components/ItemCart";

export default function Cart() {

    const { cart, addItemCart, removeItem, total } = useContext(CartContext)
    return (
        <SafeAreaView style={styles.container}>


            {total === 0 ? (
                <View style={styles.containerMsgNadaNoCarrinho}>
                    <Text style={styles.textMsg}>Poxa! Nada no carrinho :(</Text>
                </View>
            ) :
                (<FlatList

                    data={cart}
                    keyExtractor={(item) => String(item.id)}
                    renderItem={({ item }) => <ItemCart data={item} amountItem={() => addItemCart(item)} deleteItem={() => removeItem(item)} />}

                />


                )


            }

            <Text>{total === 0 ? <View></View> : <Text>Total: R${total.toFixed(2)}</Text>}</Text>






        </SafeAreaView >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa'
    },

    containerMsgNadaNoCarrinho: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    textMsg: {
        fontSize: 30,
        color: "#dcdcdc"
    }
})