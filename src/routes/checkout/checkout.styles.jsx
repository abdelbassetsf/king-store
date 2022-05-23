import styled from 'styled-components';

export const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 55%;
  min-height: 90vh;
  margin: 50px auto 0;
`;

export const CheckoutHeader = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 10px 0;
  border-bottom: 1px solid darkgrey;
`;

export const HeaderBlock = styled.li`
  text-transform: capitalize;
  width: 23%;

  &:last-child {
    width: 9%;
  }
`;

export const TotalPrice = styled.span`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
  display: inline-block;
`;
