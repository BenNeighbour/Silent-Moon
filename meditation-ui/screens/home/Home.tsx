import React, { FunctionComponent } from "react";
import { StatusBar, Text, View } from "react-native";
import { SvgXml } from "react-native-svg";
import { LogoDark } from "../../components/logo/LogoDarkSvg";
import { styles } from "./Home.styles";

interface Props { }

const Home: FunctionComponent<Props> = () => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" />

            <View style={styles.topSection}>
                {/* Top Section */}
                <SvgXml style={styles.logo} xml={LogoDark} width="170px" />
            </View>


            <View style={styles.mainSection}>
                <Text>Main Section</Text>
            </View>
        </View>
    );
};

export default Home;