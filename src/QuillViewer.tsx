import React from 'react'
import { Image, View, Keyboard, Text, StyleSheet } from 'react-native';
import Hyperlink from 'react-native-hyperlink'
import { WebView } from 'react-native-webview';

type Props = {
  style?: ViewStyle
  defaultValue?: string
  options?: any
}

const Viewer = (props: Props) => {

  return(
    {ops.map((op, index) => {
      const title = ops[index+1]?.attributes?.header===1
      const heading = ops[index+1]?.attributes?.header===4
      const right = ops[index+1]?.attributes?.align==='right'
      const center = ops[index+1]?.attributes?.align==='center'
      const justify = ops[index+1]?.attributes?.align==='justify'
      const bullet = ops[index+1]?.attributes?.list==='bullet'
      const ordered = ops[index+1]?.attributes?.list==='ordered'
      const bulletColor = ops[index-1]?.attributes?.color
      const coded = ops[index-1]?.attributes?.color
      if(typeof op.insert === "string") ?
        if(op.insert !== '\n' && op.insert !== ' '){
          return(
            <View style={{flexDirection: bullet||ordered?'row':'column'}}>
              {(bullet || ordered) && <View style={{marginTop:27.5,marginLeft:40,marginRight:-10,width: 5, height:5, borderRadius:2.5,backgroundColor:bulletColor? bulletColor: black}}/>}
              <Hyperlink key={index} linkDefault={true} linkStyle={{ color: blue, fontSize: 15, textDecorationLine: 'underline' }}>
                <Text selectable={true} style={{ marginTop:20, marginHorizontal:20, width: bullet?width-75:width-40,
                              flexWrap: justify?'wrap':'nowrap',
                              color:op.attributes?.color? op.attributes.color: coded? 'yellow': black,
                              backgroundColor:op.attributes?.background?op.attributes?.background: coded?black:'transparent',
                              lineHeight:title?25:heading?20:20,
                              opacity:op.attributes?.color?1:0.8,
                              fontFamily:title?'Gilroy-Bold':heading?'Gilroy-Bold':'Gilroy-Medium',
                              fontSize:title?25:heading?20:15,
                              fontWeight: op.attributes?.bold?'bold':'normal',
                              fontStyle: op.attributes?.italic?'italic':'normal',
                              textDecorationLine: op.attributes?.underline?'underline':'none',
                              textAlign: right? 'right':center? 'center': 'left'
                            }} >
                  {op.insert}
                </Text>
              </Hyperlink>
            </View>
          )
        }else if(typeof op.insert === 'object'){
          if(op.insert.image){
            return(
              <View style={{marginTop:20, marginBottom:ops[index+2]?-30:0,marginLeft:20}}>
                <Image style={{ borderRadius:10, width:width-40, height:width-160, resizeMode:'contain'}} source={{uri: op.insert.image}}/>
              </View>
            )
          }else{//video
            return(
              <View style={{marginTop:20, marginLeft:20}}>
                <WebView
                  style={ { width:width-40, height:width-160, marginTop: 0} }
                  javaScriptEnabled={true}
                  domStorageEnabled={true}
                  source={{uri: op.insert.video }} />
              </View>
            )
          }
        }


  )
}

Viewer.defaultProps = {
  style: {},
  defaultValue: '',
  options: {},
}


export default Viewer
