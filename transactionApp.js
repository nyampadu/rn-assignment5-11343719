import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.welcomeText}>Welcome back,</Text>
            <Text style={styles.nameText}>Eric Atsu</Text>

            <View style={styles.menuContainer}>
                <Text style={styles.menuItem}>Topup</Text>
                <Text style={styles.menuItem}>Receive</Text>
                <Text style={styles.menuItem}>Sent</Text>
                <Text style={styles.menuItem}>Loan</Text>
            </View>

            <View style={styles.transactionContainer}>
                <Text style={styles.transactionTitle}>Transactions</Text>
                <TouchableOpacity>
                    <Text style={styles.transactionItem}>Sell All</Text>
                </TouchableOpacity>

                <Text style={styles.transactionAmount}>$300 Money Transfer</Text>
                <Text style={styles.transaction}>- $88 Grocery Shopping</Text>
                <Text style={styles.transaction}>- $5.99 Apple Store Entertainment</Text>
                <Text style={styles.transaction}>- $12.99 Spotify Music</Text>
                <Text style={styles.transaction}>- $5.99 Apple Store Entertainment</Text>
            </View>

            <View style={styles.cardContainer}>
                <Text style={styles.cardNumber}>4562 1122 4595 7852</Text>
                <Text style={styles.cardHolder}>AR Jonson</Text>
                <Text style={styles.cardExpiry}>Expiry Date: 24/2000</Text>
                <Text style={styles.cardCvv}>CVV: 6986 Mastercard</Text>
            </View>
        </ScrollView>
    );
};

const SettingsScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Settings</Text>

            <TouchableOpacity style={styles.item}>
                <Text style={styles.itemText}>Change Password</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}>
                <Text style={styles.itemText}>Privacy Policy</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}>
                <Text style={styles.itemText}>Theme</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}>
                <Text style={styles.itemText}>Language</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}>
                <Text style={styles.itemText}>Contact Us</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}>
                <Text style={styles.itemText}>My Profile</Text>
            </TouchableOpacity>
        </View>
    );
};

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Settings" component={SettingsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f8f8f8',
    },
    welcomeText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    nameText: {
        fontSize: 20,
        marginBottom: 20,
    },
    menuContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20,
    },
    menuItem: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    transactionContainer: {
        marginBottom: 20,
    },
    transactionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    transactionItem: {
        fontSize: 16,
        color: 'blue',
        marginBottom: 10,
    },
    transactionAmount: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    transaction: {
        fontSize: 16,
        marginBottom: 5,
    },
    cardContainer: {
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    cardNumber: {
        fontSize: 18,
        marginBottom: 10,
    },
    cardHolder: {
        fontSize: 16,
        marginBottom: 10,
    },
    cardExpiry: {
        fontSize: 16,
        marginBottom: 10,
    },
    cardCvv: {
        fontSize: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    item: {
        padding: 15,
        backgroundColor: '#fff',
        borderRadius: 5,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    itemText: {
        fontSize: 18,
    },
});

export default App;
