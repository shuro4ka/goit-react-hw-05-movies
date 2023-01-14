// import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const ListContainer = styled.div`
  padding: 20px;
`;

const MoviesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: -10px;
`;

const ListItem = styled.li`
  margin: 10px;
  padding: 15px;
  border-radius: 10px;
  transition: all 400ms cubic-bezier(0.4, 0, 0.2, 1);
`;

const MovieLink = styled(NavLink)`
  display: block;
  max-width: 190px;
  text-align: center;
  overflow: hidden;
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
`;

const NoImageAvlb = styled.img`
  width: 185px;
`;

const MovTitle = styled.h2`
  text-transform: uppercase;
`;

export {
  ListContainer,
  MoviesList,
  ListItem,
  MovieLink,
  NoImageAvlb,
  MovTitle,
};
