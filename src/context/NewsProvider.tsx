import { NewsContext } from './NewsContext';
import useFetch from '../hooks/useFetch';
import useFilterNews from '../hooks/useFilter';

type NewsProviderProps = {
  children: React.ReactNode;
};

function NewsProvider({ children } : NewsProviderProps) {
  // Dados da API
  const { dataNews, isLoading } = useFetch();

  // Filtros
  const {
    filteredNews,
    filterByString,
    filterByNoticia,
    filterByRelease,
    filterByRecent,
    filterByFavorites,
    filterByOldest,
  } = useFilterNews(dataNews);

  // Contexto
  const contextValue = {
    dataNews,
    isLoading,
    filteredNews,
    filterByString,
    filterByNoticia,
    filterByRelease,
    filterByRecent,
    filterByFavorites,
    filterByOldest,
  };

  // Provider
  return (
    <NewsContext.Provider value={ contextValue }>
      {children}
    </NewsContext.Provider>
  );
}

export default NewsProvider;
