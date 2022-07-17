import React from "react";
import {
  BottomContainer,
  CityName,
  Description,
  Details,
  Icon,
  Info,
  ParameterLabel,
  ParameterRow,
  ParameterValue,
  Temperature,
  TopContainer,
  Weather,
} from "./CurrentWeather.style";

const CurrentWeather = ({ data }) => {
  return (
    <Weather>
      <TopContainer>
        <Info>
          <CityName>{data.city}</CityName>
          <Description>{data.weather[0].description}</Description>
        </Info>

        <Icon src={`icons/${data.weather[0].icon}.png`} alt="weather" />
      </TopContainer>
      <BottomContainer>
        <Temperature>{Math.round(data.main.temp)}°C</Temperature>
        <Details>
          <ParameterRow>
            <ParameterLabel heading>Details</ParameterLabel>
          </ParameterRow>
          <ParameterRow>
            <ParameterLabel>Feels like</ParameterLabel>
            <ParameterValue>
              {Math.round(data.main.feels_like)}°C
            </ParameterValue>
          </ParameterRow>
          <ParameterRow>
            <ParameterLabel>Wind</ParameterLabel>
            <ParameterValue>{Math.round(data.wind.speed)} m/s</ParameterValue>
          </ParameterRow>
          <ParameterRow>
            <ParameterLabel>Humidity</ParameterLabel>
            <ParameterValue>{Math.round(data.main.humidity)}%</ParameterValue>
          </ParameterRow>
          <ParameterRow>
            <ParameterLabel>Pressure</ParameterLabel>
            <ParameterValue>
              {Math.round(data.main.pressure)} hPa
            </ParameterValue>
          </ParameterRow>
        </Details>
      </BottomContainer>
    </Weather>
  );
};

export default CurrentWeather;
