import React, { FunctionComponent } from "react";
import { StatusBar, ScrollView, View, Text } from "react-native";
import { Queue } from "react-native-spacing-system";
import LogoDark from "../../components/logo/LogoDark.svg";
import { styles } from "./Meditate.styles";

interface Props { }

const Meditate: FunctionComponent<Props> = () => {
    return (
        <View>
            <StatusBar barStyle="dark-content" />

            <ScrollView style={styles.container} alwaysBounceVertical={false} bounces={false}>
                <View style={styles.topSection}>
                    {/* Top Section */}
                    <LogoDark style={styles.logo} width="170px" />
                </View>

                <View style={styles.mainSection}>

                </View>
            </ScrollView>
        </View>
    );
};

export default Meditate;