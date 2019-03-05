import React, { Component } from 'react'
import { Container, Content, Icon, Button } from 'native-base'
import { inject } from 'mobx-react'
import Match from '../components/match.component'

@inject('stores')
class MatchScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerRight: (
      <Button transparent onPress={() => navigation.navigate('Post')}>
        <Icon name="camera" style={{ color: '#fff' }} size={28} />
      </Button>
    ),
  })

  render() {
    console.log('match props:', this.props)
    return (
      <Container>
        <Content scrollEnabled={false} style={{ backgroundColor: '#858585' }}>
          <Match stores={this.props.stores} />
        </Content>
      </Container>
    )
  }
}

export default MatchScreen
