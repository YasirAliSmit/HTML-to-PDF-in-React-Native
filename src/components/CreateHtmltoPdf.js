import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import image from './logo.png';

const CreateHtmltoPdf = () => {
  const genratePDF = async () => {
    let options = {
      html:'<div><div><div style="margin-top:-30px"><div style="display:flex;flex-direction:row"><div style="width:50%;border-width:1px;border-color:black"><h1 style="background-color:#0b223f;width:100%;color:white;text-align:center;padding-top:30px;padding-bottom:30px;border:1px solid #000000;padding-top:5px;">Plentys</h1><h1 style="width:100%;color:black;text-align:center;padding-top:10px;padding-bottom:10px;border:1px solid #000000;margin-top:-22px;">11100</h1></div><div style="width:25%;border-width:1px;border-color:black;margin-left:20px;"><h1 style="width:100%;color:black;text-align:center;border:1px solid #000000;padding-top:15px;padding-bottom:15px;">FRAGILE</h1><h1 style="width:100%;color:black;text-align:center;padding-top:15px;padding-bottom:15px;border:1px solid #000000;margin-top:-22px;">111001</h1></div><div style="width:25%;border-width:1px;border-color:black;margin-left:20px;"><h1 style="width:100%;color:black;text-align:center;border:1px solid #000000;padding-top:15px;padding-bottom:15px;">COLD</h1><h1 style="width:100%;color:black;text-align:center;padding-top:15px;padding-bottom:15px;border:1px solid #000000;margin-top:-22px;">11100</h1></div></div><div style="display:flex;flex-direction:row;margin-top:-40px"><div style="width:100%;border-width:1px;border-color:black;margin-top:0px;"><h1 style="width:60%;text-align:center;border:1px solid #000000;padding-top:15px;padding-bottom:15px;">CUSTOMER</h1><h1 style="width:100%;color:black;text-align:center;padding-top:15px;padding-bottom:15px;border:1px solid #000000;margin-top:-22px;padding-top:5px;">SANDESH</h1></div></div><div style="display:flex;flex-direction:row"><div style="width:100%;border-width:1px;border-color:black;margin-top:-40px;"><h1 style="width:60%;padding-left:10px;border:1px solid #000000;padding:10px;">ADDRESS</h1><h4 style="width:100%;color:black;padding-left:10px;padding:10px;border:1px solid #000000;margin-top:-22px;padding-top:5px;">ELEGANTHOME1STFLOORFLAT<br />NO.06-UNDEFINEDCANTONMENTRAILWAY<br />STATION,KARACHI,SINDH,PAKISTAN</h4></div></div><div style="width:100%;border:1px solid #000000;text-align:center;margin-top:-20px;"><p>PRINTEDBY:ZAIN</p></div></div><div style="transform:rotate(180deg); margin-top:10px;"><div style="display:flex;flex-direction:row"><div style="width:50%;border-width:1px;border-color:black;justify-content:center;align-items:center;"><h1 style="background-color:#0b223f;width:100%;color:white;text-align:center;border:1px solid #000000;padding-top:30px;padding-bottom:30px;">Plentys</h1></div><div style="width:50%;border-width:1px;border-color:black;margin-left:20px;"><h1 style="width:100%;color:black;text-align:center;padding-top:5px;padding-bottom:5px;border:1px solid #000000;">ORDEREDDATE</h1><h1 style="width:100%;color:black;text-align:center;padding-top:5px;padding-bottom:5px;border:1px solid #000000;margin-top:-22px;">18FEB,2023</h1></div></div><div style="display:flex;flex-direction:row"><div style="width:50%;border-width:1px;border-color:black;margin-left:20px;display:flex;flex-direction:row;"><div><h1 style="width:100%;color:black;text-align:center;padding-left:10px;padding-right:10px;border:1px solid #000000;">ORDEREDID</h1><h1 style="width:100%;color:black;text-align:center;padding-left:10px;padding-right:10px;border:1px solid #000000;margin-top:-22px;">01010101</h1></div></div><div style="border:1px solid #000000;width:50%;margin-top:-20px;"><h3>QrCode</h3></div></div><div style="display:flex;flex-direction:row;justify-content:space-between;"><div style="border:1px solid #000000;width:48%;margin-left:15px;"><h4 style="padding-top:10px;padding-bottom:10px;padding-left:10px;padding-right:10px;width:40%;text-align:center;">City:karachi</h4></div><div style="border:1px solid #000000;width:49%"><h4 style="padding-top:10px;padding-bottom:10px;padding-left:10px;padding-right:10px;width:50%;text-align:center;">Test:49850398</h4></div></div><div style="display:flex;flex-direction:row;"><div style="width:49%;margin-left:5px;margin-right:10px;"><div style="border:1px solid #000000;justify-content:center;"><h3 style="text-align:center">Amount(Rs)</h3></div><div style="border:1px solid #000000;justify-content:center;"><h3 style="text-align:center">100,000</h3></div></div><div style="width:48%"><div style="border:1px solid #000000;justify-content:center;"><div style="display:flex;flex-direction:row;"><div style="width:50%;border:1px solid #000000;"><h3 style="text-align:center">PIECE(S)</h3></div><div style="width:50%;"><h3 style="text-align:center">WEIGHT</h3></div></div></div><div style="border:0.5px solid #000000;justify-content:center;"><div style="display:flex;flex-direction:row;"><div style="width:50%;border:0.5px solid #000000;"><h3 style="text-align:center">2</h3></div><div style="width:50%;"><h3 style="text-align:center">0.5kg</h3></div></div></div></div></div></div></div><div></div></div></div>',
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
