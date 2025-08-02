import { useEffect } from "react";
//tutorial
//oda-d819c681fc924b1db7bf0befe8a02e20-da71726f.data.digitalassistant.oci.oraclecloud.com
var chatWidgetSettings = {
  // ⬅️ Ajusta estos valores según tu configuración
  // skill/bot ID está en tu ODA console
  // 'channelId' es del canal web configurado en ODA
  //URI: "http://oda-d819c681fc924b1db7bf0befe8a02e20-da71726f.data.digitalassistant.oci.oraclecloud.com/oda/api/v1",

  //URI: "oda-d819c681fc924b1db7bf0befe8a02e20-da71726f.data.digitalassistant.oci.oraclecloud.com/botsui",
  
//https://oda-d819c681fc924b1db7bf0befe8a02e20-da71726f.data.digitalassistant.oci.oraclecloud.com/management-api/v1/bots/1ECBA189-7CA2-40A0-9A12-EAA4C5DC2D13/test/responses?_=1754150444973
  URI: "https://oda-d819c681fc924b1db7bf0befe8a02e20-da71726f.data.digitalassistant.oci.oraclecloud.com", 
  channelId: "ed5a7bd5-85ce-4ed3-9ad3-fa6eca0f45fb",
  hidden: false,
  enableAttachment: false,
  openChatOnLoad: true,
  timestamp: Date.now(),
};

export default function OracleChat() {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript"; //https://cdn.oracle.com/oda/web-sdk/loader.js
    script.src = "https://static.oracle.com/cdn/oda/latest/web-sdk.js";
    script.async = true;
    script.onload = () => {
      console.log("Oracle", window.WebSDK);
      window.Bots = new WebSDK(chatWidgetSettings);
      setTimeout(() => {
        window.Bots = new WebSDK(chatWidgetSettings);
        Bots.connect().then(
          () => {
            console.log("Connection Successful");
          },
          (reason) => {
            console.log("Connection failed",reason);
            
          }
        );
      }, 2000);
      // window.OracleWebChat.init({
      //     container: 'web-chat',
      //     endpoint: 'https://oda.oraclecloud.com/your-instance-id',
      //     access

      //window.OracleBots.loadBot();
    };
    document.body.appendChild(script);
  }, []);

  return <div id="web-chat">Test</div>;
}
