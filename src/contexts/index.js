import { createContext, useState } from 'react';

export const CartContext = createContext();

export default function CartProvaider({ children }) {
    const [ cart, setCart ] = useState([]);
    const [ total, setTotal ] = useState(0)

    function addItemCart(products) {
        let listItem = cart;

        // verificando se o item está na lista, caso não estiver vai me retornar -1, caso contrario irá me retorna o indice do item do array
        const itemIdex = listItem.findIndex((item) => item.id === products.id);

        if (itemIdex !== -1) {
            // se o itemIndex for !== -1 entao irei adicionar + 1 na quantidade
            listItem[ itemIdex ].amount = listItem[ itemIdex ].amount + 1;
            listItem[ itemIdex ].total = listItem[ itemIdex ].amount * products.price;

            setCart(listItem);
            totalItemCart(listItem)

            return;
        }

        // adicionando o item na lista
        const data = {
            ...products,
            amount: 1,
            total: products.price,
        };

        setCart((products) => [ ...products, data ]);
        totalItemCart([ ...cart, data ])
    }


    function removeItem(product) {

        const itemIndex = cart.findIndex((item) => item.id === product.id)

        //se itemIndex > 1 então irei diminuir 1 da quantidade e atualizar o total

        if (cart[ itemIndex ].amount > 1) {
            let listItem = cart;

            listItem[ itemIndex ].amount = listItem[ itemIndex ].amount - 1;
            listItem[ itemIndex ].total = listItem[ itemIndex ].total - listItem[ itemIndex ].price;
            setCart(listItem)
            totalItemCart(listItem)
            console.log(total)
            return


        }

        const filterItem = cart.filter((item) => item.id != product.id);
        setCart(filterItem)
        totalItemCart(filterItem)


    }

    console.log(total === 0)

    function totalItemCart(item) {
        let itemCart = item;
        let totalItens = itemCart.reduce((acc, obj) => { return acc + obj.total }, 0)

        setTotal(totalItens)


    }

    console.log(total)


    return (
        <CartContext.Provider value={{ cart, addItemCart, removeItem, total }}>
            {children}
        </CartContext.Provider>
    );
}
