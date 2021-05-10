import React from "react";
import { Text, View, TouchableOpacity, Image, StyleSheet } from 'react-Native';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner'

export default class ScanScreen extends React.Component {
    constructor(){
        super();
        this.state={
            hasCameraPermissions: null,
            scanned: false,
            scannedData: '',
            buttonState: 'normal'
        }
    }

    getCameraPermissions = async () =>{
        const {status} = await Permissions.askAsync(Permissions.CAMERA);
        
        this.setState({
          hasCameraPermissions: status === "granted",
          buttonState: 'clicked',
          scanned: false
        });
      }
  
      handleBarCodeScanned = async({type, data})=>{
        this.setState({
          scanned: true,
          scannedData: data,
          buttonState: 'normal'
        });
      }

      render() {
          return(
            <View>
              <TouchableOpacity
              onPress={this.getCameraPermissions}
              style={StyleSheet.scanButton}
              title="Bar Code Scanner">
                  <Text style={StyleSheet.buttonText}>Scan QR Code </Text>
              </TouchableOpacity>
            </View>
          )
      }
}