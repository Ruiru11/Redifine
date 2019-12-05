import React, {Component} from 'react';
import {
  Container,
  Header,
  Content,
  Input,
  Item,
  Form,
  Textarea,
  Label,
  CardItem,
  Text,
  Button,
} from 'native-base';

import {ImageBackground, StyleSheet} from 'react-native';

class Contact extends Component {
  render() {
    return (
      <Container>
        <ImageBackground style={{}} source={require('../assets/black.jpeg')}>
          <CardItem style={[styles.backgroundImage]}>
            <Text style={[styles.title]}>Contact</Text>
          </CardItem>
        </ImageBackground>

        <Content>
          <Form>
            <Item regular>
              <Input placeholder="Email" />
            </Item>
            <Textarea rowSpan={5} bordered placeholder="Inquiry" />
          </Form>
          <Button info style={{width: 100, marginTop: 5}}>
            <Text>Send</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.2,
  },
  title:{
      color:"white",
      fontSize:22,
      fontWeight:"bold"
  }
});

export default Contact;
