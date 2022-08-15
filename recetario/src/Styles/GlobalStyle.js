import { StyleSheet } from "react-native";
import { Colors } from "./Colors";

export const globalStyles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.primary,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: Colors.secondary
  },
  simpleContainer: {
    flex: 1,
    backgroundColor: Colors.ligth,
  },
  simpleTitle: {
    marginLeft: 30,
    fontSize: 32,
    fontWeight: "bold",
    color: Colors.ligth,
    marginTop: -80
  },
  productName: {
    marginLeft: 30,
    fontSize: 28,
    fontWeight: "bold",
    color: Colors.ligth,
    marginTop: -5,
  },
  description: {
    fontSize: 20,
    color: Colors.ligth,
    fontWeight: 'bold',
    height: 35,
    marginLeft: 20
  },
  ingredients: {
    width: '100%',
    fontSize: 20,
    fontWeight: "400",
    marginTop: 15,
    color: Colors.ligth,
    marginLeft: 20,
    justifyContent: "space-between",
    borderBottomColor: Colors.ligth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  }
});
