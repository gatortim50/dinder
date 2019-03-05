import React, { Component } from 'react'
import { Button, Item, Input, Icon, Text, Form } from 'native-base'
import { observer } from 'mobx-react/native'
import { observable } from 'mobx'

@observer
class Login extends Component {
  @observable email = ''

  @observable password = ''

  signIn = () => {
    const { auth } = this.props.stores
    const { navigate } = this.props.navigation
    auth.signIn({ email: this.email, password: this.password }).then(() => {
      navigate('Match')
    })
  }

  render() {
    const { auth } = this.props.stores
    console.log('login auth:', auth)
    return (
      <Form>
        <Item style={{ marginBottom: 10 }} rounded>
          <Icon style={{ color: '#fff' }} name="person-outline" />
          <Input
            style={{ color: '#fff' }}
            placeholder="Please Enter Email"
            value={this.email}
            placeholderTextColor="#fff"
            autoCapitalize="none"
            keyboardType="email-address"
            onChangeText={email => (this.email = email)}
          />
        </Item>
        <Item style={{ marginBottom: 10 }} rounded>
          <Icon style={{ color: '#fff' }} name="lock-open" />
          <Input
            style={{ color: '#fff' }}
            placeholder="Please Enter Password"
            placeholderTextColor="#fff"
            secureTextEntry
            value={this.password}
            autoCapitalize="none"
            password
            onChangeText={pass => (this.password = pass)}
          />
        </Item>
        <Button rounded block style={{ marginBottom: 10 }} onPress={this.signIn.bind(this)}>
          <Text>Login</Text>
        </Button>
      </Form>
    )
  }
}

export default Login
