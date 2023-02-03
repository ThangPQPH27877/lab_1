import { FlatList, Text, StyleSheet } from "react-native";

export default function ProductList (props){
    const productList = [
        {id: 1, name: 'Iphone 12', price: 1000000},
        {id: 2, name: 'Iphone 13', price: 2000000},
    ];
    return(
        <FlatList
            data={productList}
            //item la giao dien tra ve sau moi vong lap
            renderItem={({item}) => (
                <>
                    <Text>Tem SP: {item.name}</Text>
                    <Text>Gia: {item.price} VND</Text>
                </>
            )}
            //keyb la gia tri duy nhat tra ve sau moi vong lap
            keyExtractor={(item) =>item.id }
        />
    );
}

const style = StyleSheet.create({});