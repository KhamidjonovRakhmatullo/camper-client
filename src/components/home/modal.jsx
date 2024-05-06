import React from "react";
import Popup from "reactjs-popup";
import { ContainerTitle, ContainerTitleWrapper, PopupInsideTitle, PopupVideo, UnderLine, VideoContainer, VideoWrapper } from "../../styles/homeStyle";
import video1 from '../assets/home-box-1.png'
import video2 from '../assets/home-box-2.png'
import video3 from '../assets/home-box-3.png'
import video4 from '../assets/home-box-4.png'
import video5 from '../assets/home-box-5.png'
import video6 from '../assets/home-box-6.png'
import video7 from '../assets/home-box-7.png'
import video8 from '../assets/home-box-8.png'
// import playButton1 from '../assets/playButton.png'
// import PlayCircleFilledTwoToneIcon from '@mui/icons-material/PlayCircleFilledTwoTone';

const ModalComponent = () => {
  return (
    <div style={{margin: "40px 0"}}>
    <ContainerTitleWrapper>
      <ContainerTitle>Video</ContainerTitle>
      <UnderLine></UnderLine>
    </ContainerTitleWrapper>
    <VideoContainer>
    <Popup
      trigger={<VideoWrapper><img src={video1} alt="img" /></VideoWrapper>}
      modal
      nested
    >
      {(close) => (
        <div className="modal">
          <PopupInsideTitle>
            {" "}
            <h3> Name of the video </h3>
            <p className="close" onClick={close}>
              &times;
            </p>
          </PopupInsideTitle>
          <PopupVideo>
            {" "}
            <iframe
              style={{ borderRadius: "15px"}}
              width="100%"
              height="360"
              src="https://www.youtube.com/embed/9NpSU-j6eV8?si=gLr6by06PlvAo_5O"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </PopupVideo>
        </div> 
      )}
    </Popup>
    <Popup
      trigger={<VideoWrapper><img src={video2} alt="img" /> </VideoWrapper>}
      modal
      nested
    >
      {(close) => (
        <div className="modal">
          <PopupInsideTitle>
            {" "}
            <h3> Name of the video </h3>
            <p className="close" onClick={close}>
              &times;
            </p>
          </PopupInsideTitle>
          <PopupVideo>
            {" "}
            <iframe
              style={{ borderRadius: "15px" }}
              width="100%"
              height="360"
              src="https://www.youtube.com/embed/9NpSU-j6eV8?si=gLr6by06PlvAo_5O"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </PopupVideo>
        </div>
      )}
    </Popup>
    <Popup
      trigger={<VideoWrapper><img src={video3} alt="img" /></VideoWrapper>}
      modal
      nested
    >
      {(close) => (
        <div className="modal">
          <PopupInsideTitle>
            {" "}
            <h3> Name of the video </h3>
            <p className="close" onClick={close}>
              &times;
            </p>
          </PopupInsideTitle>
          <PopupVideo>
            {" "}
            <iframe
              style={{ borderRadius: "15px" }}
              width="100%"
              height="360"
              src="https://www.youtube.com/embed/9NpSU-j6eV8?si=gLr6by06PlvAo_5O"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </PopupVideo>
        </div>
      )}
    </Popup>
    <Popup
      trigger={<VideoWrapper><img src={video4} alt="img" /></VideoWrapper>}
      modal
      nested
    >
      {(close) => (
        <div className="modal">
          <PopupInsideTitle>
            {" "}
            <h3> Name of the video </h3>
            <p className="close" onClick={close}>
              &times;
            </p>
          </PopupInsideTitle>
          <PopupVideo>
            {" "}
            <iframe
              style={{ borderRadius: "15px" }}
              width="100%"
              height="360"
              src="https://www.youtube.com/embed/9NpSU-j6eV8?si=gLr6by06PlvAo_5O"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </PopupVideo>
        </div>
      )}
    </Popup>
    <Popup
      trigger={<VideoWrapper><img src={video5} alt="img" /></VideoWrapper>}
      modal
      nested
    >
      {(close) => (
        <div className="modal">
          <PopupInsideTitle>
            {" "}
            <h3> Name of the video </h3>
            <p className="close" onClick={close}>
              &times;
            </p>
          </PopupInsideTitle>
          <PopupVideo>
            {" "}
            <iframe
              style={{ borderRadius: "15px" }}
              width="100%"
              height="360"
              src="https://www.youtube.com/embed/9NpSU-j6eV8?si=gLr6by06PlvAo_5O"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </PopupVideo>
        </div>
      )}
    </Popup>
    <Popup
      trigger={<VideoWrapper><img src={video6} alt="img" /></VideoWrapper>}
      modal
      nested
    >
      {(close) => (
        <div className="modal">
          <PopupInsideTitle>
            {" "}
            <h3> Name of the video </h3>
            <p className="close" onClick={close}>
              &times;
            </p>
          </PopupInsideTitle>
          <PopupVideo>
            {" "}
            <iframe
              style={{ borderRadius: "15px" }}
              width="100%"
              height="360"
              src="https://www.youtube.com/embed/9NpSU-j6eV8?si=gLr6by06PlvAo_5O"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </PopupVideo>
        </div>
      )}
    </Popup>
    <Popup
      trigger={<VideoWrapper><img src={video7} alt="img" /></VideoWrapper>}
      modal
      nested
    >
      {(close) => (
        <div className="modal">
          <PopupInsideTitle>
            {" "}
            <h3> Name of the video </h3>
            <p className="close" onClick={close}>
              &times;
            </p>
          </PopupInsideTitle>
          <PopupVideo>
            {" "}
            <iframe
              style={{ borderRadius: "15px" }}
              width="100%"
              height="360"
              src="https://www.youtube.com/embed/9NpSU-j6eV8?si=gLr6by06PlvAo_5O"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </PopupVideo>
        </div>
      )}
    </Popup>
    <Popup
      trigger={<VideoWrapper><img src={video8} alt="img" /></VideoWrapper>}
      modal
      nested
    >
      {(close) => (
        <div className="modal">
          <PopupInsideTitle>
            {" "}
            <h3> Name of the video </h3>
            <p className="close" onClick={close}>
              &times;
            </p>
          </PopupInsideTitle>
          <PopupVideo>
            {" "}
            <iframe
              style={{ borderRadius: "15px" }}
              width="100%"
              height="360"
              src="https://www.youtube.com/embed/9NpSU-j6eV8?si=gLr6by06PlvAo_5O"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </PopupVideo>
        </div>
      )}
    </Popup>
    
    </VideoContainer>
    </div>
    
  );
};

export default ModalComponent;
