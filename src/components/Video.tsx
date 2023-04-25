import { ContainerVideoStyled, VideoStyled } from "@styled/components/index.styled";
import { useContext, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { getStateQuestions } from "../adapters/getStateQuestions.adapter";
import AppContext from "../context/appContext";
import { ButtonOption } from "../setting/setting";
import Button from "./Button";
import ContainerLinks from "./ContainerLinks";
import Timer from "./Timer";
import play from "/assets/play.svg";
import replay from "/assets/replay.svg";
import stop from "/assets/stop.svg";
const Video = () => {

  const { state, dispatch } = useContext(AppContext);
  const [isActive, setIsActive] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const [thumbnailUrl, setThumbnailUrl] = useState("");

  const videoRef = useRef<HTMLVideoElement>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const mediaStreamRef = useRef<MediaStream | null>(null);

  const { preguntaId } = useParams();
  const idPage = Number(preguntaId);


  const constraints = {
    audio: true,
    video: { width: 1200, height: 900 }
  };



  const handleInitPlay = () => {

    navigator.mediaDevices.
      getUserMedia(constraints).then((mediaStream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = mediaStream;
          videoRef.current.onloadedmetadata = () => {
            videoRef.current?.play();
            mediaRecorderRef.current = new MediaRecorder(mediaStream);
            mediaRecorderRef.current.start();
            dispatch({
              type: "SET_STATE_QUESTION",
              payload: state.question.map(item => getStateQuestions(item, preguntaId, {
                stateButton: "stop"
              }))
            });
            setIsActive(true);
            mediaStreamRef.current = mediaStream;
          };
        }
      }).catch((error) => {
        console.log(error);
      });

  };



  const handleStop = () => {
    if (mediaRecorderRef.current && mediaStreamRef.current) {
      mediaRecorderRef.current.stop();
      dispatch({
        type: "SET_STATE_QUESTION",
        payload: state.question.map(item => getStateQuestions(item, preguntaId, {
          stateButton: "replay"
        }))
      });
      mediaStreamRef.current.getTracks().forEach(track => track.stop());
      setIsActive(false);
    }

  };





  const handleDataAvailable = (event: BlobEvent) => {
    const url = window.URL.createObjectURL(event.data);

    setVideoUrl(url);

    if (videoRef.current) {
      const video = videoRef.current;
      const canvas = document.createElement("canvas");
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        const thumbnailUrl = canvas.toDataURL();
        setThumbnailUrl(thumbnailUrl);

      }
    }

  };


  if (mediaRecorderRef.current) {
    mediaRecorderRef.current.ondataavailable = handleDataAvailable;
  }

  const handleReplay = () => {
    if (videoRef.current) {
      videoRef.current.srcObject = null;
      videoRef.current.src = state.question[idPage - 1].srcVideo || "";
      videoRef.current.controls = false;
      videoRef.current.play();
    }
  };


  useEffect(() => {
    if (state.question[idPage - 1].status) {
      dispatch({
        type: "SET_STATE_QUESTION",
        payload: state.question.map(item => getStateQuestions(item, preguntaId, {
          stateButton: "replay"
        }))
      });
    }
  }, []);

  useEffect(() => {
    if (thumbnailUrl !== ""
      && videoUrl !== ""
      && !state.question[idPage - 1].status) {
      dispatch({
        type: "SET_STATE_QUESTION",
        payload: state.question.map(item => getStateQuestions(item, preguntaId, {
          imgVideo: thumbnailUrl,
          srcVideo: videoUrl,
          status: true
        }))

      });
    }


  }, [thumbnailUrl, videoUrl]);

  return (
    <ContainerVideoStyled>

      <VideoStyled>
        <Timer isActive={isActive}
          setIsActive={setIsActive}
          mediaStreamRef={mediaStreamRef}
          preguntaId={preguntaId}
          time={state.question[idPage - 1].time || 0}
        />
        <video ref={videoRef} />
        {
          (state.question[idPage - 1].stateButton === ButtonOption.START)
            ? (<Button src={play} onClick={handleInitPlay} />)
            : (state.question[idPage - 1].stateButton === ButtonOption.STOP)
              ? (<Button src={stop} onClick={handleStop} />)
              : (<Button src={replay} onClick={handleReplay} />)
        }
        <footer>
          <p>{state.question[idPage - 1].question}</p>
        </footer>
        <div>
        </div>
      </VideoStyled>

      <ContainerLinks idPage={idPage} />

    </ContainerVideoStyled>
  );
};

export default Video;