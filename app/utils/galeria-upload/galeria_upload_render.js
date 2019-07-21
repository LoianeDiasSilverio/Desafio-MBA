import React from 'react'
import { View, Text, Image, Button } from 'react-native'
import ImagePicker from 'react-native-image-picker'

const createFormData = (photo, body) => {
  const data = new FormData();

  data.append("photo", {
    name: photo.fileName,
    type: photo.type,
    uri:
      Platform.OS === "android" ? photo.uri : photo.uri.replace("file://", "")
  });

  Object.keys(body).forEach(key => {
    data.append(key, body[key]);
  });

  return data;
};
  
export default class GaleriaUpload extends React.Component {
  state = {
    photo: null,
  }
  handleChoosePhoto = () => { 
    const options = {
      noData: true,
    }
    ImagePicker.launchImageLibrary(options, response => {
      if (response.uri) {
        this.setState({ photo: response })
      }
    })
  }

  handleUploadPhoto = () => {
    fetch("http://localhost:3000/api/upload", {
      method: "POST",
      body: createFormData(this.state.photo, { userId: "123" })
    })
      .then(response => response.json())
      .then(response => {
        console.log("upload succes", response);
        alert("Upload success!");
        this.setState({ photo: null });
      })
      .catch(error => {
        console.log("upload error", error);
        alert("Upload failed!");
      });
  };


  render() {
    const { photo } = this.state
    return (
      <View>
      {photo && (
        <React.Fragment>
          <Image
            source={{ uri: photo.uri }}
            style={{ width: 300, height: 300 }}
          />
          <View style={{ marginTop: 10 }}></View>
          <Button color='#FB6849' title="Upload" onPress={this.handleUploadPhoto} />
        </React.Fragment>
      )}
      <View style={{ marginTop: 10 }}></View>
      <Button color='#FB6849' title="Escolha a Foto" onPress={this.handleChoosePhoto} />
    </View>
    )
  }
  
}

