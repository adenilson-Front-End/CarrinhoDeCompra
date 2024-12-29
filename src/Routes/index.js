import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../pages/home";
import Cart from "../pages/Cart";

const StackContent = createNativeStackNavigator({});

export default function Routes() {
    return (
        <StackContent.Navigator>
            <StackContent.Screen name="Home" component={Home} options={{
                headerShown: false
            }} />

            <StackContent.Screen name="Cart" component={Cart} options={{
                headerTitle: "Meus produtos"
            }} />
        </StackContent.Navigator>
    );
}