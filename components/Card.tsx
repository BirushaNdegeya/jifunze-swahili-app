import { View, Text } from "react-native";


type cardProps = {
   text: string
}


export default function Card ({ text }: cardProps) {
   return (
      <View>
         <Text className="text-3xl">{text}</Text>
      </View>
   );
}