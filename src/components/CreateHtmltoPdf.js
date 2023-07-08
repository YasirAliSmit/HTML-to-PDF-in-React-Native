import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import image from './logo.png';

const CreateHtmltoPdf = () => {
  const genratePDF = async () => {
    let options = {
      ///html:'<div style="display:flex;flex-direction:row"><div style="width:50%;border-width:1px;border-color:black;height:120px"><h1 style="background-color:#0b223f;width:100%;color:white;text-align:center;height:60px;border:1px solid #000000;padding-top:5px">Plentys</h1><h1 style="width:100%;color:black;text-align:center;height:60px;border:1px solid #000000;margin-top:-22px">111</h1></div><div style="width:25%;border-width:1px;border-color:black;margin-left:20px;height:120px"><h1 style="width:100%;color:black;text-align:center;height:60px;border:1px solid #000000;padding-top:5px">FRAGILE</h1><h1 style="width:100%;color:black;text-align:center;height:60px;border:1px solid #000000;margin-top:-22px">11100</h1></div><div style="width:25%;border-width:1px;border-color:black;margin-left:20px;height:120px"><h1 style="width:100%;color:black;text-align:center;height:60px;border:1px solid #000000;padding-top:5px">COLD</h1><h1 style="width:100%;color:black;text-align:center;height:60px;border:1px solid #000000;margin-top:-22px">11100</h1></div></div><div style="display:flex;flex-direction:row"><div style="width:100%;border-width:1px;border-color:black;height:120px;margin-top:20px"><h1 style="width:60%;text-align:center;height:60px;border:1px solid #000000;padding:5px">CUSTOMER</h1><h1 style="width:100%;color:black;text-align:center;height:60px;border:1px solid #000000;margin-top:-22px;padding-top:5px">SANDESH</h1></div></div><div style="display:flex;flex-direction:row"><div style="width:100%;border-width:1px;border-color:black;height:120px;margin-top:20px"><h1 style="width:60%;padding-left:10px;height:60px;border:1px solid #000000;padding:5px">ADDRESS</h1><h1 style="width:100%;color:black;padding-left:10px;height:120px;border:1px solid #000000;margin-top:-22px;padding-top:5px">ELEGANT HOME 1ST FLOOR FLAT<br>NO.06-UNDEFINED CANTONMENT RAILWAY <br>STATION,KARACHI,SINDH,PAKISTAN</h1></div></div><div style="width:100%;height:40px;border:1px solid #000000;text-align:center;margin-top:110px;"><p>PRINTED BY:ZAIN</p></div>',
      html:'<div><div style="display:flex;flex-direction:row;margin-bottom:20px;"><div style="width:50%;border-width:1px;border-color:black;height:120px;"><h1 style="background-color:#0b223f;width:100%;color:white;text-align:center;height:60px;border:1px solid #000000;padding-top:5px;">Plentys</h1><h1 style="width:100%;color:black;text-align:center;height:60px;border:1px solid #000000;margin-top:-22px;">111</h1></div><div style="width:25%;border-width:1px;border-color:black;margin-left:20px;height:120px;"><h1 style="width:100%;color:black;text-align:center;height:60px;border:1px solid #000000;padding-top:5px;">FRAGILE</h1><h1 style="width:100%;color:black;text-align:center;height:60px;border:1px solid #000000;margin-top:-22px;">11100</h1></div><div style="width:25%;border-width:1px;border-color:black;margin-left:20px;height:120px;"><h1 style="width:100%;color:black;text-align:center;height:60px;border:1px solid #000000;padding-top:5px;">COLD</h1><h1 style="width:100%;color:black;text-align:center;height:60px;border:1px solid #000000;margin-top:-22px;">11100</h1></div></div><div style="display:flex;flex-direction:row"><div style="width:100%;border-width:1px;border-color:black;height:120px;margin-top:20px;"><h1 style="width:60%;text-align:center;height:60px;border:1px solid #000000;padding:5px;">CUSTOMER</h1><h1 style="width:100%;color:black;text-align:center;height:60px;border:1px solid #000000;margin-top:-22px;padding-top:5px;">SANDESH</h1></div></div><div style="display:flex;flex-direction:row"><div style="width:100%;border-width:1px;border-color:black;height:120px;margin-top:20px;"><h1 style="width:60%;padding-left:10px;height:60px;border:1px solid #000000;padding:5px;">ADDRESS</h1><h1 style="width:100%;color:black;padding-left:10px;height:120px;border:1px solid #000000;margin-top:-22px;padding-top:5px;">ELEGANT HOME 1ST FLOOR FLAT<br>NO.06-UNDEFINED CANTONMENT RAILWAY <br>STATION,KARACHI,SINDH,PAKISTAN</h1></div></div><div style="width:100%;height:40px;border:1px solid #000000;text-align:center;margin-top:110px;"><p>PRINTED BY:ZAIN</p></div></div><div style="margin-top:35px;transform:rotate(180deg);"><div style="display:flex;flex-direction:row"><div style="width:50%;border-width:1px;border-color:black;height:120px;justify-content:center;align-items:center;"><h1 style="background-color:#0b223f;width:100%;color:white;text-align:center;height:60px;border:1px solid #000000;padding-top:30px;padding-bottom:30px;">Plentys</h1></div><div style="width:50%;border-width:1px;border-color:black;margin-left:20px;height:120px;"><h1 style="width:100%;color:black;text-align:center;height:60px;border:1px solid #000000;padding-top:5px;">ORDERED DATE</h1><h1 style="width:100%;color:black;text-align:center;height:60px;border:1px solid #000000;margin-top:-22px;">18 FEB,2023</h1></div></div>',
      fileName: 'test',
      directory: 'Documents',
    };
    const file = await RNHTMLtoPDF.convert(options);
    console.log('here is our file', file);
  };
  return (
    <View style={{flex: 1}}>
      <Text style={{fontSize: 30, fontWeight: 'bold', alignSelf: 'center'}}>
        Hello HTML to PDF
      </Text>
      <View style={{marginHorizontal: 40}}>
        <Button title="Create PDF" onPress={() => genratePDF()} />
      </View>
    </View>
  );
};

export default CreateHtmltoPdf;

const styles = StyleSheet.create({});
