import React from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from "react-native"

const HellowWorld = () => {
  return(
      <Text>
          Hellow World
      </Text>
  )
}

const App = () => (
    <View style={[styles.container, styles.horizontal]}>
        <HellowWorld />
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 2,
        justifyContent: "center"
    },
    horizontal: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
    }
})

export default App