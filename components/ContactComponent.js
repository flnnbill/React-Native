import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Card, ListItem } from 'react-native-elements';
import { PARTNERS } from '../shared/partners';



class Contact extends Component {



    static navigationOptions = {
        title: 'Contact'
    };

    render() {
        return (<ScrollView>
            <Card title="Contact Information"
                wrapperStyle={{ margin: 20 }}>
                <Text>1 Nucamp Way</Text>
                <Text>Seatle, WA 98001</Text>
                <Text style={{ marginBottom: 10 }}>U.S.A</Text>
                <Text>Phone: 1-206-555-1234</Text>
                <Text>Email: campsites@nucamp.co</Text>
            </Card>
        </ScrollView>
        )
    }


}


export default Contact;