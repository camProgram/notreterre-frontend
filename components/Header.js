import React from "react";
import * as Font from "expo-font";
import { StyleSheet, View, Text, Image, Dimensions } from "react-native";

const hauteur = Dimensions.get("window").height;

const Header = () => {
	return (
		<View style={styles.header}>
			<Image
				source={require("../assets/logonotreterre.png")}
				style={{
					height: hauteur * 0.18,
					resizeMode: "contain",
				}}
			/>
			<Text style={styles.logoText}>Notre Terre</Text>
			<Text style={styles.tagLineText}>
				Vous aussi, invitez les meilleurs aliments dans votre cuisine
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	header: {
		backgroundColor: "#0EA888",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		height: (hauteur * 1) / 3,
	},
	logoText: {
		fontWeight: "bold",
		color: "white",
		fontSize: 35,
		fontFamily: "notoserif",
	},
	tagLineText: {
		color: "white",
		fontSize: 12,
		textAlign: "center",
		fontStyle: "italic",
	},
});

module.exports = Header;
