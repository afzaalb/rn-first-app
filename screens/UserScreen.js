import { StyleSheet, View, Text, Button } from "react-native";

const UserScreen = ({ navigation }) => {
  const openDrawerHandler = () => {
    navigation.toggleDrawer();
  };

  return (
    <View style={styles.container}>
      <Text>User screen</Text>
      <Button title="Open Drawer" onPress={openDrawerHandler} />
    </View>
  );
};

export default UserScreen;

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
});
