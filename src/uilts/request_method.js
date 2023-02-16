import { Promise } from "core-js";
import request from "./request_config";
export default{
    async get(url, payload = {}, config){
       try{
            let response
            response = await request.get(
                url,
                Object.assign({ param:payload }),
                config
            )
        console.log(response)
        return response
       } catch(error){
            return Promise.error
       }
    },
    async post(url, payload = {}, config){
        try{
         let response
         response = await request.post(
             url,
             Object.assign({ param:payload }),
             config
         )
         console.log(response)
         return response
        } catch(error){
            return Promise.error
        }
    },
    async patch(url, payload = {}, config) {
        try {
            let response;
            response = await request.patch(
                url,
                Object.assign({ params: payload }),
                config
            );
            console.log(url, payload);
            return response;
        } catch (error) {
          return Promise.reject(error);
        }
    },
    async delete(url, payload = {}, config) {
        try {
            let response;
            response = await request.delete(
                url,
                Object.assign({ params: payload }),
                config
            );
            console.log(url, payload);
            return response;
        } catch (error) {
            return Promise.reject(error);
        }
      },
    async put(url, payload = {}, config) {
    try {
        let response;
        response = await request.put(
            url,
            Object.assign({ params: payload }),
            config
        );
        console.log(url, payload);
        return response;
    } catch (error) {
        return Promise.reject(error);
    }
    }
}
