import { Platform } from "react-native";

let baseURL = '';

{
    Platform.OS == 'android' 
        ? baseURL = 'http://localhost:8671/api/1/'
        : baseURL = 'http://localhost:8671/api/1/'
}

export default baseURL



// Platform.OS == 'android'
//     ? baseURL = 'http"//127.0.0.1:8671/api/v1/'
//     : baseURL = 'http://localhost:8671/api/'


// Platform.OS == 'android'
//     ? baseURL = 'https://bdemr.services/api/1/'
//     : baseURL = 'http://localhost:8671/api/'