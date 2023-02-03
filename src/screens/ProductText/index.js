import { Text, StyleSheet, Image } from "react-native";
//trong 1 file chi 1 function duoc export dang dafaulst
//neu export dafault thi khi import khong can {}
//neu export khong dafault thi khong bat buoc co {} va dung ten

// export default function ProductImage(props){
//     return(
//         <Image
//         style = {styles.Image}
//             source={{uri: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fvn.jugomobile.com%2Fgoku-nhan-vat-te-nhat-cua-dragon-ball-sap-xuat-hien-trong-fortnite%2F&psig=AOvVaw3vE7d40p8KvpUHOyztCcZx&ust=1673488260006000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCKCG7N2zvvwCFQAAAAAdAAAAABAD'}}
//         />
//     );
// }

export default function ProductText(props){
    const name = props.name;
    const desc = props.desc;


    return(
        <>
            <Text style={styles.text}>{name}</Text>
            <Text>{desc ? desc : 'Updating....'}</Text>
        </>
        
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        fontStyle: 'italic',
        color: 'blue'
    },
    Image:{
        width: 200,
        height: 100
    }
});