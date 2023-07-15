import { View, Text, Button } from "react-native";

import { NavigationProp, RouteProp } from "@react-navigation/native";
import { FIREBASE_AUTH } from "../firebase/firebaseConfig";
import { signOut } from "firebase/auth";

interface ListProps {
  navigation: NavigationProp<any, any>;
  route: RouteProp<any, any>;
}

const List = ({ navigation, route }: ListProps) => {
  const handleLogout = async () => {
    await signOut(FIREBASE_AUTH);
  };

  return (
    <View>
      <Text>List</Text>
      <Button title="Details" onPress={() => navigation.navigate("Details")} />
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

export default List;
