import {Client} from "appwrite";

export function initAppwrite(){
  const client = new Client();

  client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('64e4e4919c91c9da532f')
  ;
}