import React, { Component } from 'react'
import { Image, View } from 'react-native'
import { inject } from 'mobx-react'

@inject('stores')
class SplashScreen extends Component {
  componentDidMount() {
    const { stores, navigation } = this.props
    setTimeout(() => {
      navigation.navigate('Login')
    }, stores.config.SplashTime)
  }

  render() {
    const { stores } = this.props
    return (
      <View style={{ flex: 1 }}>
        <Image style={{ flex: 1, width: null, height: null }} source={stores.config.SplashImg} />
      </View>
    )
  }
}

export default SplashScreen
