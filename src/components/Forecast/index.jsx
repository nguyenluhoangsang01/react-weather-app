import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import {
  DailyDetailGridItem,
  DailyDetailsGrid,
  DailyItem,
  Day,
  Description,
  ForecastTitle,
  Icon,
  Label,
  MaxTemperature,
  MinMaxTemperature,
  MinTemperature,
  Value,
} from "./Forecast.style";

const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const Forecast = ({ data }) => {
  console.log(data);

  const dayOfWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayOfWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayOfWeek)
  );

  return (
    <>
      <ForecastTitle>Daily</ForecastTitle>

      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, index) => (
          <AccordionItem key={item.dt}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <DailyItem>
                  <Icon
                    src={`icons/${item.weather[0].icon}.png`}
                    alt={item.weather[0].description}
                  />
                  <Day>{forecastDays[index]}</Day>
                  <Description>{item.weather[0].description}</Description>
                  <MinMaxTemperature>
                    <MinTemperature>
                      {Math.round(item.main.temp_min)}°C
                    </MinTemperature>
                    /
                    <MaxTemperature>
                      {Math.round(item.main.temp_max)}°C
                    </MaxTemperature>
                  </MinMaxTemperature>
                </DailyItem>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <DailyDetailsGrid>
                <DailyDetailGridItem>
                  <Label>Pressure: </Label>
                  <Value>{item.main.pressure} hPa</Value>
                </DailyDetailGridItem>
                <DailyDetailGridItem>
                  <Label>humidity: </Label>
                  <Value>{item.main.humidity}%</Value>
                </DailyDetailGridItem>
                <DailyDetailGridItem>
                  <Label>clouds: </Label>
                  <Value>{item.clouds.all}%</Value>
                </DailyDetailGridItem>
                <DailyDetailGridItem>
                  <Label>wind speed: </Label>
                  <Value>{item.wind.speed} m/s</Value>
                </DailyDetailGridItem>
                <DailyDetailGridItem>
                  <Label>sea level: </Label>
                  <Value>{item.main.sea_level} m</Value>
                </DailyDetailGridItem>
                <DailyDetailGridItem>
                  <Label>feels like: </Label>
                  <Value>{Math.round(item.main.feels_like)}°C</Value>
                </DailyDetailGridItem>
              </DailyDetailsGrid>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default Forecast;
