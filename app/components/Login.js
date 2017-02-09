'use strict';

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Image,
} from 'react-native';

import {
  Container,
  Content,
  List,
  ListItem,
  InputGroup,
  Input,
  Thumbnail,
  Icon,
  Text,
  Picker,
  Button
} from 'native-base';

import logo from '../images/logo.jpeg';

export default class Login extends Component {
  render() {
    return (
      <Container style={styles.container}>
         <Content >
             <List>

                 <ListItem >
                    <Thumbnail size={120} source={logo} style={styles.imgLogo}/>
                 </ListItem>

                 <ListItem>
                     <InputGroup>
                         <Icon name="ios-person" style={{ color: '#1385A3' }} />
                         <Input placeholder="EMAIL" />
                     </InputGroup>
                 </ListItem>
                 <ListItem>
                     <InputGroup>
                         <Icon name="ios-unlock" style={{ color: '#1385A3' }} />
                         <Input placeholder="PASSWORD" secureTextEntry />
                     </InputGroup>
                 </ListItem>
             </List>
             <Button block style={styles.button}>SIGN IN</Button>
         </Content>
     </Container>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: '#eee',
    marginTop:-80
  },
  imgLogo: {
    alignSelf: 'center',
    marginBottom: 20,
  },
  button: {
    marginLeft:20,
    marginRight:20,
    marginTop:20,
    backgroundColor: '#1385A3'
  }
});
