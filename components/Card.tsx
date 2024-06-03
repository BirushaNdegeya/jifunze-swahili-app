import { View, Text } from "react-native";


type cardProps = {
   text: string
}


export default function Card ({ text }: cardProps) {
   return (
      <View>
         <Text>{text}</Text>
      </View>
   );
}