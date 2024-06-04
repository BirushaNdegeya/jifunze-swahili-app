import { View, Text } from '@/components/Themed';
import Colors from '@/constants/Colors';
import { TouchableOpacity } from 'react-native';
type cardProps = {
   text: string
}


export default function Card ({ text }: cardProps) {
   return (
      <TouchableOpacity className='mb-4 p-4 rounded-md flex items-center bg-blue-500'>
         <Text className="text-3xl text-white" lightColor={Colors.light.text} darkColor={Colors.dark.text}>{text}</Text>
      </TouchableOpacity>
   );
}