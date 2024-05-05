import { useEffect, useState } from "react";
import Box from "@mui/material/Box";

import Dialpad from "./components/Dialpad";
import ScreenRinging from "./components/ScreenRinging";
import ScreenCallAnswered from "./components/ScreenCallAnswered";

//@ts-expect-error use CDN
const anCti = window.AnCti;
interface Props {
  isExpand: boolean;
  onChangePanelWidth: () => void;
}

const PHONE_STATUS = {
  DIALPAD: "dialpad",
  RINGING: "ringing",
  CALLING: "calling",
};

const ACCOUNT_AS7 = {
  url: "wss://as7presales.apac-ancontact.com/cti/ws",
  username: "cti-app@mobifone.vn",
  password: "]6ko.:}_c5p'@6Qb~\\|1",
};

const Phone = (props: Props) => {
  const { onChangePanelWidth } = props;
  const [phoneStatus, setPhoneStatus] = useState(PHONE_STATUS.DIALPAD);

  useEffect(() => {
    if (!anCti) return;
    const agent = anCti.newAgent();
    const audio = new Audio();
    audio.autoplay = true;

    agent.startApplicationSession(ACCOUNT_AS7);

    agent.on("applicationsessionterminated", (event: any) => {
      if (event.reason == "invalidApplicationInfo") {
        console.log("Please check your credentials and try again");
      }
    });

    agent.on("applicationsessionstarted", () => {
      const device = agent.getDevice("sip:1003@term.322");
      device
        .monitorStart({ rtc: true })
        .then(() => {
          // this.handleEnableClickToDial()
          // this.connected=true
        })
        .catch(() => {
          console.log("monitoring failed");
          // this.connected=false
        });
      // this.device = device;
    });

    agent.on("localstream", (event: any) => {
      console.log(event);
      // if(this.isCall && event.stream){
      //   this.startUpdatingTime()
      // }
    });

    agent.on("remotestream", (event: any) => {
      // this.template.querySelector(".remoteView").srcObject = event.stream;
      audio.srcObject = event.stream;
    });

    agent.on("call", (event: any) => {
      const call = event.call;
      switch (call.localConnectionInfo) {
        case "alerting":
          if (!event.call.autoAnswer) {
            console.log("alerting", call.name, call.callID);
            setPhoneStatus(PHONE_STATUS.RINGING);
            onChangePanelWidth();
          }
          break;
        case "connected":
          console.log(`connected to ${call.number}`);
          break;
        case "fail":
          console.log(`call failed, cause is ${event.content.cause}`);
          break;
        case "hold":
          console.log(`holding call to ${call.number}`);
          break;
        case "null":
          console.log(`call to ${call.number} is gone`);
          setPhoneStatus(PHONE_STATUS.DIALPAD);
          break;
      }
    });
  }, [onChangePanelWidth]);

  const show = () => {
    switch (phoneStatus) {
      case PHONE_STATUS.DIALPAD:
        return <Dialpad {...props} />;
      case PHONE_STATUS.CALLING:
        return <ScreenCallAnswered />;
      case PHONE_STATUS.RINGING:
        return <ScreenRinging />;
      default:
        return null;
    }
  };

  return <Box>{show()}</Box>;
};

export default Phone;
