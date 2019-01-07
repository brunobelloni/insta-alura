import { AppRegistry } from 'react-native';
import App from './src/App';
import Feed from './src/components/Feed'
import Login from './src/screens/Login'
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => Login);
// AppRegistry.registerComponent(appName, () => Feed);