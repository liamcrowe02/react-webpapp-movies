import React from "react";
import { getTrending } from "../api/tmdb-api"; // Update the import statement
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites';

const TrendingMoviesPage = () => {
  const { data, error, isLoading, isError } = useQuery('trending', getTrending); // Update the query key and function

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const movies = data.results;


  return (
    <PageTemplate
      title="Trending Movies" // Update the title
      movies={movies}
      action={(movie) => {
        return <AddToFavoritesIcon movie={movie} />;
      }}
    />
  );
};

export default TrendingMoviesPage;
