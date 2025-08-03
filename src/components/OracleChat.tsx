import { useEffect, useRef } from "react";

const chatWidgetSettings = {
  URI: "https://oda-d819c681fc924b1db7bf0befe8a02e20-da71726f.data.digitalassistant.oci.oraclecloud.com",
  channelId: "ed5a7bd5-85ce-4ed3-9ad3-fa6eca0f45fb",
  enableStartConversation: true, // critical!
  hidden: false,
  enableAttachment: false,
  openChatOnLoad: true,
  timestamp: Date.now(),
  //Si esta propiedad tiene un valor, el bot muestra el primer mensaje del skill(bot) al cargar.
  initUserHiddenMessage: "Hola, soy BUG de Oracle.",
  //initUserHiddenMessage: "Hola, soy el bot de Oracle. ¿En qué puedo ayudarte hoy?",

};
export default function OracleChat() {
  const initialized = useRef(false); // This ref persists across mounts

  useEffect(() => {
    if (initialized.current) {
      console.log("OracleChat: Already initialized",window.__oracleBotLoaded);
      return;
    }
    initialized.current = true;

    //window.__oracleBotLoaded flag is global not attached to the component instance
    if (window.__oracleBotLoaded) { 
      console.log("OracleChat: Bot already loaded");
      return;
    }

    window.__oracleBotLoaded = true;

    const script = document.createElement("script");
    script.src = "https://static.oracle.com/cdn/oda/latest/web-sdk.js";
    script.async = true;
    script.onload = () => {
      // @ts-ignore
      const Bots = new window.WebSDK(chatWidgetSettings);
      // @ts-ignore
      window.Bots = Bots;
      Bots.connect().then(
        () => console.log("OracleChat: Connected"),
        (err) => console.error("OracleChat: Connection failed", err)
      );
    };

    document.body.appendChild(script);
  }, []);

  return <div id="web-chat" />;
}
