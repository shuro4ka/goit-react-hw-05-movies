import { useMemo } from 'react';
import { useEffect, useState } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { getSearchedMovies } from 'service/api';
import { Searchbar } from 'components/Searchbar/Searchbar';
// import Pagination from 'components/Pagination/Pagination';

import {
  ListContainer,
  MoviesList,
  ListItem,
  MovieLink,
  NoImageAvlb,
  MovTitle,
} from './Movies.styled';


const Movies = () => {
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();


  const imageURL = 'https://image.tmdb.org/t/p/w185';

  const onSubmit = (e) => {
    e.preventDefault();
    const inputValue = e.currentTarget.elements[1].value;
    setSearchParams(inputValue !== '' ? { filter: inputValue } : {});
  };

  const filterParam = searchParams.get('filter') ?? '';

  useEffect(() => {
    if (filterParam === '') {
      setMovies([]);
      return;
    }

    setTimeout(() => {
     getSearchedMovies(filterParam).then((data) => {
      setMovies(data.results);
     });
    }, 200);
  }, [filterParam]);

  const visibleMovies = useMemo(() => {
    return movies.filter(
      movie =>
        movie.hasOwnProperty('title') &&
        movie.title.toLowerCase().includes(filterParam.toLowerCase())
    );
  }, [filterParam, movies]);

  return (
    <ListContainer>
      <Searchbar onSubmit={onSubmit} />
      {visibleMovies.length > 0 && (
        <MoviesList>
          {visibleMovies.map(movie => (
            <ListItem key={movie.id}>
              <MovieLink to={`${movie.id}`} state={{ from: location }}>
                {movie.poster_path ? (
                  <img src={imageURL + movie.poster_path} alt="Poster" />
                ) : (
                  <NoImageAvlb
                    src="https://bpgroup.lv/i/product_images/images/Z2000128443.jpg"
                    alt="No Poster Available"
                  />
                )}

                <MovTitle>{movie.title}</MovTitle>
              </MovieLink>
            </ListItem>
          ))}
        </MoviesList>
      )}

      {/* <Pagination
        total={Number(100)}
        limit={Number(20)}
        page={page}
        setPage={setPage}
      /> */}
    </ListContainer>
  );
};

export default Movies;




















// import { useLocation, useSearchParams } from 'react-router-dom';
// import { useState } from 'react';
// import { getSearchedMovies } from 'service/api';
// import { useEffect } from 'react';
// import { MoviesList } from 'components/MoviesList/MoviesList';
// import { Searchbar } from 'components/Searchbar/Searchbar';


//   const MoviesView = props => {
//   const [searchParams, setSearchParams] = useSearchParams();
//   const [searchResults, setSearchResults] = useState([]);
//   //const [isLoading, setIsLoading] = useState(false);
//   const query = searchParams.get('query');
//   const location = useLocation();


//   useEffect(() => {
//     query && setIsLoading(true);
//     query &&
//       getSearchedMovies(query).then(data => {
//         if (data.length > 0) {
//           console.log(data);
//           setSearchResults(data);
//           setIsLoading(false);
//         } else {
//           alert('Sorry, movies are not found');
//           setIsLoading(false);
//         }
//       });
//   }, [query]);

//   const submitHandler = e => {
//     e.preventDefault();
//     if (e.target[0].value === '') {
//       alert('Please write the name of the movie');
//       return;
//     }

//     const changeFilter = value => {
//       setSearchParams(value !== '' ? { filter: value } : {});
//     };
  

//     const query = e.target[0].value;
//     setSearchParams({ query });
//   };

//   <ListContainer>
//   <Searchbar value={filterParam} onChange={changeFilter} />
//   {MoviesView.length > 0 && (
//     <MoviesList>
//       {visibleMovies.map(movie => (
//         <ListItem key={movie.id}>
//           <MovieLink to={`${movie.id}`} state={{ from: location }}>
//             {movie.poster_path ? (
//               <img src={imageURL + movie.poster_path} alt="Poster" />
//             ) : (
//               <NoImageAvlb
//                 src="https://bpgroup.lv/i/product_images/images/Z2000128443.jpg"
//                 alt="No Poster Available"
//               />
//             )}

//             <MovTitle>{movie.title}</MovTitle>
//           </MovieLink>
//         </ListItem>
//       ))}
//     </MoviesList>
//   )}

//   {/* <Pagination
//     total={Number(100)}
//     limit={Number(20)}
//     page={page}
//     setPage={setPage}
//   /> */}
// </ListContainer>

//   };
















  // return (
  //   <div>
  //     <form onSubmit={e => submitHandler(e)}>
  //       <input type="text" />
  //       <button type="submit">submit</button>
  //     </form>
  //     {isLoading}
  //     {query && searchResults.length > 0 && (
  //       <MoviesList moviesData={searchResults} location={location} />
  //     )}
  //   </div>
  // );
//};

