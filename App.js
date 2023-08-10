import React from 'react'
import {Text, View} from 'react-native'
import {Button} from 'native-base'
import { registerRootComponent } from "expo";

const App = () => {
    return (
        <View>
            <Button light title={'Light'}></Button>
            <Button primary title={'Primary'}></Button>
            <Button success  title={'Success'}></Button>
            <Button info  title={'Info'}></Button>
            <Button warning  title={'Warning'}></Button>
            <Button danger  title={'Danger'}></Button>
            <Button dark  title={'Dark'}></Button>
        </View>
    )
}

registerRootComponent(App);
export default App