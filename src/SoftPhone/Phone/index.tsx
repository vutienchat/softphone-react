import { useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";

import Dialpad from "./components/Dialpad";
import ScreenRinging from "./components/ScreenRinging";
import ScreenCallAnswered from "./components/ScreenCallAnswered";

//@ts-expect-error use CDN
const anCti = window.AnCti;
interface Props {
  isExpand: boolean;
  onChangePanelExpand: (expand: boolean) => void;
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
  const { onChangePanelExpand } = props;
  const ref = useRef<HTMLVideoElement>(null);
  const [device, setDevice] = useState<any>(null);
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
      const device = agent.getDevice("sip:1002@term.442");
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
      setDevice(device);
      // this.device = device;
    });

    agent.on("localstream", (event: any) => {
      console.log(event);
      // if(this.isCall && event.stream){
      //   this.startUpdatingTime()
      // }
    });

    agent.on("remotestream", (event: any) => {
      if (ref.current) {
        ref.current.srcObject = event.stream;
        audio.srcObject = event.stream;
      }
    });

    agent.on("call", (event: any) => {
      const call = event.call;
      switch (call.localConnectionInfo) {
        case "alerting":
          if (!event.call.autoAnswer) {
            console.log("alerting", call.name, call.callID);
            setPhoneStatus(PHONE_STATUS.RINGING);
            onChangePanelExpand(true);
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
     console.log('abc',agent)
  }, [onChangePanelExpand]);

  const handleAnswerCall = () => {
    const call = device?.calls[0];
    console.log("handleAnswerCall", device);
    if (call?.localConnectionInfo === "alerting") {
      call.answerCall({ audio: true, vido: false })
        .then()
        .catch(err=>{console.log(err)});
      setPhoneStatus(PHONE_STATUS.CALLING);
    }
  };

  const show = () => {
    switch (phoneStatus) {
      case PHONE_STATUS.DIALPAD:
        return <Dialpad {...props} />;
      case PHONE_STATUS.CALLING:
        return <ScreenCallAnswered />;
      case PHONE_STATUS.RINGING:
        return <ScreenRinging onAnswerCall={handleAnswerCall} />;
      default:
        return null;
    }
  };

  return (
    <Box>
      <video
        ref={ref}
        playsInline
        autoPlay
        muted
        style={{ display: "none" }}
      ></video>
      {show()}
    </Box>
  );
};

export default Phone;
