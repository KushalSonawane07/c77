import 'react-native-gesture-handler'
import * as React from 'react'
import { NavigationConatainer } 
from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'


import HomeScreen from "./screens/Home"
import MeteorScreen from "./screens/Meteors"
import IssLocationScreen from "./screens/IssLocation"


const Stack = createStackNavigator()
function App(){
return(
<NavigationConatainer>
<Stack.Navigator initialRouteName='Home'
screenOptions={{
headerShown:false 


}
}>
<Stack.Screen name='Home' component={HomeScreen}/>
<Stack.Screen name='Meteores' component={MeteoreScreen}/>
<Stack.Screen name='IssLocation' component={IssLocationScreen}/>

</Stack.Navigator>


</NavigationConatainer>


)


}

export default App