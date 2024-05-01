import styled from 'styled-components';
import { device } from '../../breakpoints/devices';

import { Link } from 'react-router-dom';

export const Container = styled(Link)`
  width: 100%;
  height: 4.8rem;
  
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  line-height: 1.6;
  border-radius: .5rem;
  padding: 0 1.6rem;
  font-weight: 500;

  text-decoration: none;

  cursor: pointer;

  display: flex;
  gap: 1.1rem;
  align-items: center;
  justify-content: center;

  @media ${device.laptop} { 
    width: fit-content;

    padding: 1.2rem 2.4rem;
  }

`;