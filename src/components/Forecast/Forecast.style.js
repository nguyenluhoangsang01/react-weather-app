import styled from "styled-components";

export const ForecastTitle = styled.h2`
  font-size: 23px;
  font-weight: 700;
`;

export const DailyItem = styled.div`
  background-color: #f5f5f5;
  border-radius: 15px;
  height: 40px;
  margin: 5px;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 14px;
  padding: 5px 20px;
`;

export const Icon = styled.img`
  width: 40px;
`;
export const Day = styled.p`
  color: #212121;
  flex: 1 1;
  font-weight: 600;
  margin-left: 15px;
`;
export const Description = styled.p`
  text-transform: capitalize;
  flex: 1 1;
  margin-right: 15px;
  text-align: right;
`;
export const MinMaxTemperature = styled.p`
  color: #757575;
`;
export const MinTemperature = styled.span``;
export const MaxTemperature = styled.span``;

export const DailyDetailsGrid = styled.div`
  grid-row-gap: 0;
  grid-column-gap: 15px;
  column-gap: 15px;
  display: grid;
  flex: 1 1;
  grid-template-columns: auto auto;
  padding: 5px 15px;
`;
export const DailyDetailGridItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 30px;
`;
export const Label = styled.p`
  text-transform: capitalize;
  color: #757575;
`;
export const Value = styled.p``;
