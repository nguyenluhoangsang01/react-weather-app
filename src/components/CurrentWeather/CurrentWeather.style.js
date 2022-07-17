import styled from "styled-components";

export const Weather = styled.div`
  width: 400px;
  margin: 40px auto 20px;
  border-radius: 10px;
  box-shadow: 10px -2px 20px 2px rgb(0 0 0 / 30%);
  color: #fff;
  background: #333;
  padding: 20px;
`;

export const TopContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Info = styled.div``;

export const CityName = styled.h3`
  font-weight: 600;
  font-size: 18px;
  line-height: 1;
  letter-spacing: 1px;
  text-transform: capitalize;
`;
export const Description = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 1;
  margin-top: 12px;
  text-transform: capitalize;
`;
export const Icon = styled.img`
  width: 100px;
`;

export const BottomContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Temperature = styled.div`
  font-weight: 600;
  font-size: 50px;
  width: auto;
  letter-spacing: -5px;
  margin: 10px 0;
`;
export const Details = styled.div`
  width: 100%;
  padding-left: 70px;
`;
export const ParameterRow = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const ParameterLabel = styled.span`
  text-align: left;
  font-weight: 400;
  font-size: 12px;
  border-bottom: ${({ heading }) => heading && "1px solid #fff"};
  width: ${({ heading }) => heading && "100%"};
  padding-bottom: ${({ heading }) => heading && "5px"};
  margin-bottom: ${({ heading }) => heading && "15px"};
`;
export const ParameterValue = styled.span`
  text-align: right;
  font-weight: 600;
  font-size: 12px;
`;
