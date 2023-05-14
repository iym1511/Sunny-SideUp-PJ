import "../css/WeatherIcons.css";
import styled, { keyframes } from "styled-components";

const WeatherIcons = () => {
  return (
    <div className="weathericon-wp">
      <h1>Weather Icon</h1>

      <WeatherIcon className="icon sunny">
        <Sun>
          <Rays></Rays>
        </Sun>
      </WeatherIcon>

      <WeatherIcon className="icon rainy">
        <Cloud></Cloud>
        <Rain></Rain>
      </WeatherIcon>

      <WeatherIcon className="icon cloudy">
        <Cloud></Cloud>
        <Cloud></Cloud>
      </WeatherIcon>

      <WeatherIcon className="icon flurries">
        <Cloud></Cloud>
        <Snow>
          <Flake></Flake>
          <Flake></Flake>
        </Snow>
      </WeatherIcon>

      <WeatherIcon className="icon thunder-storm">
        <Cloud></Cloud>
        <Light>
          <Bolt></Bolt>
          <Bolt></Bolt>
        </Light>
      </WeatherIcon>

      <WeatherIcon className="icon sun-shower">
        <Cloud></Cloud>
        <Sun>
          <Rays></Rays>
        </Sun>
        <Rain></Rain>
      </WeatherIcon>

      {/* 이거! */}
      <WeatherIcon className="icon sun-clouds">
        <Cloud></Cloud>
        <Sun>
          <Rays></Rays>
        </Sun>
      </WeatherIcon>

      <WeatherIcon className="icon mist">
        <Cloud></Cloud>
        <Mistbar></Mistbar>
      </WeatherIcon>
    </div>
  );
};

export default WeatherIcons;

const WeatherIcon = styled.div`
  width: 100px;
`

const SpinKeyframe = keyframes`
  0%  {-webkit-transform: rotate(0deg);}
  100% {-webkit-transform: rotate(360deg);
    transform: rotate(360deg);}   
`

const LightningKeyframe = keyframes`
  45% {
    color: #fff;
    background: #fff;
    opacity: 0.2;
  }
  50% {
    color: lemonchiffon;
    background: lemonchiffon;
    opacity: 1;
  }
  55% {
    color: #fff;
    background: #fff;
    opacity: 0.2;
  }
`

const MistKeyframe = keyframes`
    0% { opacity: 0; }
  50% { opacity: 0.6; }
  100% {
    opacity: 0;
    -webkit-transform: scale(0.5) translate(-100%, -3em);
            transform: scale(0.5) translate(-100%, -3em);
  }
`

const CloudKeyframe = keyframes`
    0% { opacity: 0; }
  50% { opacity: 0.3; }
  100% {
    opacity: 0;
    -webkit-transform: scale(0.5) translate(-200%, -3em);
            transform: scale(0.5) translate(-200%, -3em);
  }
`

const RainKeyframe = keyframes`
    0% {
    background: #0cf;
    box-shadow:
      0.625em 0.875em 0 -0.125em rgba(255,255,255,0.2),
      -0.875em 1.125em 0 -0.125em rgba(255,255,255,0.2),
      -1.375em -0.125em 0 #0cf;
  }
  25% {
    box-shadow:
      0.625em 0.875em 0 -0.125em rgba(255,255,255,0.2),
      -0.875em 1.125em 0 -0.125em #0cf,
      -1.375em -0.125em 0 rgba(255,255,255,0.2);
  }
  50% {
    background: rgba(255,255,255,0.3);
    box-shadow:
      0.625em 0.875em 0 -0.125em #0cf,
      -0.875em 1.125em 0 -0.125em rgba(255,255,255,0.2),
      -1.375em -0.125em 0 rgba(255,255,255,0.2);
  }
  100% {
    box-shadow:
      0.625em 0.875em 0 -0.125em rgba(255,255,255,0.2),
      -0.875em 1.125em 0 -0.125em rgba(255,255,255,0.2),
      -1.375em -0.125em 0 #0cf;
  }
`

const Sun = styled.div`
  width: 2.5em;
  height: 2.5em;
  margin: -1.25em;
  background: orange;
  border-radius: 50%;
  box-shadow: 0 0 0 0.375em orange;
  -webkit-animation: 12s infinite linear;
  animation: ${SpinKeyframe} 12s infinite linear;
`

const Rays = styled.div`
  position: absolute;
  top: -2em;
  left: 50%;
  display: block;
  width: 0.375em;
  height: 1.125em;
  margin-left: -0.1875em;
  background: yellow;
  border-radius: 0.25em;
  box-shadow: 0 5.375em yellow;
  &:before, &::after{
    content: '';
  position: absolute;
  top: 0em;
  left: 0em;
  display: block;
  width: 0.375em;
  height: 1.125em;
  -webkit-transform: rotate(60deg);
          transform: rotate(60deg);
  -webkit-transform-origin: 50% 3.25em;
          transform-origin: 50% 3.25em;
  background: yellow;
  border-radius: 0.25em;
  box-shadow: 0 5.375em yellow;
  }
  &:before{
    -webkit-transform: rotate(120deg);
          transform: rotate(120deg);
  }
`

const Rain = styled.div`
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 20%;
  width: 3.75em;
  height: 3.75em;
  margin: 0.375em 0 0 -2em;
  background: transparent;
  &:after{
    content: '';
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 50%;
  width: 1.125em;
  height: 1.125em;
  margin: -1em 0 0 -0.25em;
  background: #0cf;
  border-radius: 100% 0 60% 50% / 60% 0 100% 50%;
  box-shadow:
    0.625em 0.875em 0 -0.125em rgba(255,255,255,0.2),
    -0.875em 1.125em 0 -0.125em rgba(255,255,255,0.2),
    -1.375em -0.125em 0 rgba(255,255,255,0.2);
  -webkit-transform: rotate(-28deg);
          transform: rotate(-28deg);
  -webkit-animation: ${RainKeyframe} 3s linear infinite;
          animation: ${RainKeyframe} 3s linear infinite;
  }
`

const Cloud = styled.div`
  position: absolute;
  z-index: 1;
  width: 3.6875em;
  height: 3.6875em;
  margin: -1.84375em;
  background: gray;
  border-radius: 50%;
  box-shadow:
    -2.1875em 0.6875em 0 -0.6875em gray,
    2.0625em 0.9375em 0 -0.9375em gray,
    0 0 0 0.375em gray,
    -2.1875em 0.6875em 0 -0.3125em gray,
    2.0625em 0.9375em 0 -0.5625em gray;
  &:after{
    content: '';
  position: absolute;
  bottom: 0;
  left: -0.5em;
  display: block;
  width: 4.5625em;
  height: 1em;
  background: gray;
  box-shadow: 0 0.4375em 0 -0.0625em gray;
  }
  &:nth-child(2){
    z-index: 0;
  background: white;
  box-shadow:
    -2.1875em 0.6875em 0 -0.6875em #fff,
    2.0625em 0.9375em 0 -0.9375em #fff,
    0 0 0 0.375em #fff,
    -2.1875em 0.6875em 0 -0.3125em #fff,
    2.0625em 0.9375em 0 -0.5625em #fff;
  opacity: 0.3;
  -webkit-transform: scale(0.5) translate(6em, -3em);
          transform: scale(0.5) translate(6em, -3em);
  -webkit-animation: ${CloudKeyframe} 4s linear infinite;
          animation: ${CloudKeyframe} 4s linear infinite;
  }
  &:nth-child(2):after{
    background: white;
  }
  &+${Sun}{
    margin: -2em 1em;
  }
`

const Snow = styled.div`
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 20%;
  width: 3.75em;
  height: 3.75em;
  margin: 0.375em 0 0 -2em;
  background: transparent;
`

const Flake = styled.div`
  &:before, &:after{
  content: '❅';
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -1.025em 0 0 -1.0125em;
  color: white;
  list-height: 1em;
  opacity: 0.2;
  -webkit-animation: ${SpinKeyframe} 8s linear infinite reverse;
          animation: ${SpinKeyframe} 8s linear infinite reverse;
  }
  &:after{
    margin: 0.125em 0 0 -1em;
  font-size: 1.5em;
  opacity: 0.4;
  -webkit-animation: ${SpinKeyframe} 14s linear infinite;
          animation: ${SpinKeyframe} 14s linear infinite;
  }
  &:nth-child(2):before{
    margin: -0.5em 0 0 0.25em;
  font-size: 1.25em;
  opacity: 0.2;
  -webkit-animation: ${SpinKeyframe} 10s linear infinite;
          animation: ${SpinKeyframe} 10s linear infinite;
  }
  &:nth-child(2):after{
    margin: 0.375em 0 0 0.125em;
  font-size: 2em;
  opacity: 0.4;
  -webkit-animation: ${SpinKeyframe} 16s linear infinite reverse;
          animation: ${SpinKeyframe} 16s linear infinite reverse;
  } 
`

const Light = styled.div`
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 20%;
  width: 3.75em;
  height: 3.75em;
  margin: 0.375em 0 0 -2em;
  background: transparent;
`

const Bolt = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -0.25em 0 0 -0.125em;
  color: #fff;
  opacity: 0.3;
  -webkit-animation: ${LightningKeyframe} 2s linear infinite;
          animation: ${LightningKeyframe} 2s linear infinite;
  &:nth-child(2){
    width: 0.5em;
  height: 0.25em;
  margin: -1.75em 0 0 -1.875em;
  -webkit-transform: translate(2.5em, 2.25em);
          transform: translate(2.5em, 2.25em);
  opacity: 0.2;
  -webkit-animation: ${LightningKeyframe} 1.5s linear infinite;
          animation: ${LightningKeyframe} 1.5s linear infinite;
  }
  &:before, &:after{
    content: '';
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 50%;
  margin: -1.625em 0 0 -1.0125em;
  border-top: 1.25em solid transparent;
  border-right: 0.75em solid;
  border-bottom: 0.75em solid;
  border-left: 0.5em solid transparent;
  -webkit-transform: skewX(-10deg);
          transform: skewX(-10deg);
  }
  &:after{
    margin: -0.25em 0 0 -0.25em;
  border-top: 0.75em solid;
  border-right: 0.5em solid transparent;
  border-bottom: 1.25em solid transparent;
  border-left: 0.75em solid;
  -webkit-transform: skewX(-10deg);
          transform: skewX(-10deg);
  }
  &:nth-child(2):before{
    margin: -0.75em 0 0 -0.5em;
  border-top: 0.625em solid transparent;
  border-right: 0.375em solid;
  border-bottom: 0.375em solid;
  border-left: 0.25em solid transparent;
  }
  &:nth-child(2):after{
    margin: -0.125em 0 0 -0.125em;
  border-top: 0.375em solid;
  border-right: 0.25em solid transparent;
  border-bottom: 0.625em solid transparent;
  border-left: 0.375em solid;
  }
`

const Mistbar = styled.div`
position: absolute;
  z-index: 2;
  top: 50%;
  left: 20%;
  width: 3.75em;
  height: 3.75em;
  margin: 0.375em 0 0 -2em;
  background: transparent;
  width: 90px;
  height: 15px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 50px;
  position: relative;
  bottom: -9px;
  &:after{
    content: '';
    position: absolute;
    top: 13px;
    display: block;
    width: 120px;
    height: 10px;
    border-radius: 50px;
    z-index: 0;
    background: white;
    box-shadow:
      -2.1875em 0.6875em 0 -0.6875em #fff,
      2.0625em 0.9375em 0 -0.9375em #fff,
      0 0 0 0.375em #fff,
      -2.1875em 0.6875em 0 -0.3125em #fff,
      2.0625em 0.9375em 0 -0.5625em #fff;
    opacity: 0.3;
    -webkit-transform: scale(0.5) translate(6em, -3em);
            transform: scale(0.5) translate(6em, -3em);
    -webkit-animation: ${MistKeyframe} 8s linear infinite;
            animation: ${MistKeyframe} 8s linear infinite;
  }
  &:before{
    content: '';
    position: absolute;
    top: 40px;
    left: -30px;
    display: block;
    width: 130px;
    height: 10px;
    border-radius: 50px;
    z-index: 0;
    background: white;
    box-shadow:
      -2.1875em 0.6875em 0 -0.6875em #fff,
      2.0625em 0.9375em 0 -0.9375em #fff,
      0 0 0 0.375em #fff,
      -2.1875em 0.6875em 0 -0.3125em #fff,
      2.0625em 0.9375em 0 -0.5625em #fff;
    opacity: 0.3;
    -webkit-transform: scale(0.5) translate(6em, -3em);
            transform: scale(0.5) translate(6em, -3em);
    -webkit-animation: ${MistKeyframe} 8s linear infinite;
            animation: ${MistKeyframe} 8s linear infinite;
  }
`