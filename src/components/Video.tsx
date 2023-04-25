import { ContainerVideoStyled } from "@styled/components/ContainerVideoStyled.styled";
import { VideoStyled } from "@styled/components/VideoStyled.styled";
import { useContext, useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import AppContext from "../context/appContext";
import { ButtonOption } from "../setting/setting";
import Button from "./Button";
import Timer from "./Timer";
import play from "/assets/play.svg";
import replay from "/assets/replay.svg";
import stop from "/assets/stop.svg";
const Video = () => {

  const { state, dispatch } = useContext(AppContext);
  const [buttonVideo, setButtonVideo] = useState("start");
  const [videoUrl, setVideoUrl] = useState("");
  const [thumbnailUrl, setThumbnailUrl] = useState("");

  const videoRef = useRef<HTMLVideoElement>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const mediaStreamRef = useRef<MediaStream | null>(null);
  const { preguntaId } = useParams();

  const constraints = {
    audio: true,
    video: { width: 1200, height: 900 }
  };

  const idPage = Number(preguntaId);


  const handleInitPlay = () => {

    navigator.mediaDevices.
      getUserMedia(constraints).then((mediaStream) => {

        if (videoRef.current) {
          videoRef.current.srcObject = mediaStream;
          videoRef.current.onloadedmetadata = () => {
            videoRef.current?.play();
            mediaRecorderRef.current = new MediaRecorder(mediaStream);
            mediaRecorderRef.current.start();
            setButtonVideo("stop");
            mediaStreamRef.current = mediaStream;
          };
        }
      }).catch((error) => {
        console.log(error);
      });

  };


  const handleStop = () => {
    if (mediaRecorderRef.current) {

      mediaRecorderRef.current.stop();
      setButtonVideo("replay");
    }

    if (mediaStreamRef.current) {
      mediaStreamRef.current.getTracks().forEach(track => track.stop());
    }
    setButtonVideo("stop");
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
      videoRef.current.src = state.question[idPage - 1].srcVideo;
      videoRef.current.controls = false;
      videoRef.current.play();
    }
  };


  useEffect(() => {

    if (state.question[idPage - 1].status) {
      setButtonVideo(ButtonOption.REPLAY);
    }
  }, []);

  useEffect(() => {
    if (thumbnailUrl !== "" && videoUrl !== "") {
      dispatch({
        type: "SET_IMAGE",
        payload: state.question.map(item => {

          if (item.numberPage === preguntaId) {
            return {
              ...item,
              imgVideo: thumbnailUrl,
              srcVideo: videoUrl,
              status: true
            };
          } else {
            return item;
          }
        })
      });
    }


  }, [thumbnailUrl, videoUrl]);

  return (
    <ContainerVideoStyled>

      <VideoStyled>
        <Timer state={buttonVideo} setButtonVideo={setButtonVideo} />
        <video ref={videoRef} />
        {
          (buttonVideo === ButtonOption.START)
            ? (<Button src={play} onClick={handleInitPlay} />)
            : (buttonVideo === ButtonOption.STOP)
              ? (<Button src={stop} onClick={handleStop} />)
              : (<Button src={replay} onClick={handleReplay} />)
        }
        <footer>
          <p>{state.question[idPage - 1].question}</p>
        </footer>
        <div>
        </div>
      </VideoStyled>
      <Link to={"/"}>atras</Link>
      <button>Siguiente</button>
    </ContainerVideoStyled>
  );
};

export default Video;