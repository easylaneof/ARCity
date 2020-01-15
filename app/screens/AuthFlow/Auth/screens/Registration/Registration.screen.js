import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  TouchableWithoutFeedback,
} from 'react-native';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import registrationStyles from './Registration.styles.js';
import {AuthField} from '../../components/index';

const background = require('_assets/images/nycBackground.png');

const RegistrationScreen = () => {
  return (
    <ImageBackground source={background} style={registrationStyles.background}>
      <KeyboardAwareScrollView
        enableOnAndroid={true}
        style={registrationStyles.awareView}
        contentContainerStyle={registrationStyles.awareChild}>
        <View>
          <View style={registrationStyles.LogoContainer}>
            <Text style={registrationStyles.arcityLabel}>ARCity</Text>
          </View>

          <View style={registrationStyles.authContainer}>
            <TouchableWithoutFeedback>
              <View style={registrationStyles.uploadAvatar}>
                <Text style={registrationStyles.addPhotoText}>Фото</Text>
              </View>
            </TouchableWithoutFeedback>

            <AuthField placeholder="Email" />
            <AuthField placeholder="Имя" />
            <AuthField placeholder="Фамилия" />
            <AuthField placeholder="Пароль" />
            <AuthField placeholder="Повторите пароль" />
          </View>

          <View style={registrationStyles.signupButtonContainer}>
            <TouchableOpacity style={registrationStyles.signupButton}>
              <Text style={registrationStyles.signupText}>SIGN UP</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </ImageBackground>
  );
};

export default RegistrationScreen;