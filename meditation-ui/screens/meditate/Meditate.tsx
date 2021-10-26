import React, { Fragment, FunctionComponent } from "react";
import { StatusBar, ScrollView, View, Text } from "react-native";
import { Queue } from "react-native-spacing-system";
import { CircularButton } from "../../components/circularButton";
import { styles } from "./Meditate.styles";

interface Props { }

const categories = [
    {
        icon: <Fragment />,
        name: "All"
    },
    {
        icon: <Fragment />,
        name: "My"
    },
    {
        icon: <Fragment />,
        name: "Anxious"
    },
    {
        icon: <Fragment />,
        name: "Sleep"
    },
    {
        icon: <Fragment />,
        name: "Kids"
    },
]

const Meditate: FunctionComponent<Props> = () => {
    return (
        <View>
            <StatusBar barStyle="dark-content" />

            <ScrollView style={styles.container} alwaysBounceVertical={false} bounces={false}>
                <View style={styles.mainSection}>
                    <View style={styles.titleSection}>
                        <Text style={styles.title}>Meditate</Text>
                        <Text style={styles.subtitle}>we can learn how to recognize when our minds are doing their normal everyday acrobatics.</Text>
                    </View>


                    <ScrollView contentContainerStyle={{
                        justifyContent: 'space-evenly',
                    }}
                        horizontal
                        alwaysBounceHorizontal
                        bounces
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}>
                        {
                            categories.map((each: any, i: number) => (
                                <Fragment key={i}>
                                    <Queue size={5} />
                                    <CircularButton active={i === 0} icon={each.icon} label={each.name} />
                                </Fragment>
                            ))
                        }
                    </ScrollView>
                </View>
            </ScrollView>
        </View>
    );
};

export default Meditate;