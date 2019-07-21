import React, { Component } from "react";
import { View, TouchableOpacity,CameraRoll,PermissionsAndroid } from "react-native";
import { Text } from "native-base";
import Styles from './primeiro_desafio.styles';
import { RNCamera } from 'react-native-camera';
import AutoHeightImage from "react-native-auto-height-image";
import IconCamera from "../../images/icon_camera.png";

class PrimeiroDesafioRender extends Component {
  constructor(props) {
    super(props);
    this.state = { cpf: "" };
  }

takePicture = async () => {
  if (this.camera) {
    const options = { quality: 0.5, base64: true };
    const data = await this.camera.takePictureAsync(options)

    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      {
        "title": "Access Storage",
        "message": "Access Storage for the pictures"
      }
    )
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      await CameraRoll.saveToCameraRoll(data.uri);
    } else {
      console.log("Permissao de camera negada.");
    } 
  }

  }


  render() {
    return (
      <View style={Styles.container}>
        <RNCamera
          ref={camera => {
            this.camera = camera;
          }}
          style={Styles.preview}
          type={RNCamera.Constants.Type.back}
          autoFocus={RNCamera.Constants.AutoFocus.on}
          flashMode={RNCamera.Constants.FlashMode.off}
          permissionDialogTitle={"Permissão para usar a camera"}
          permissionDialogMessage={
            "Precisamos de sua permissão para acessar sua camera"
          }
        /> 
        <View style={Styles.buttonContainer}>
          <TouchableOpacity onPress={this.takePicture} style={Styles.capture}>
            <AutoHeightImage width={20} source={IconCamera} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default PrimeiroDesafioRender;
