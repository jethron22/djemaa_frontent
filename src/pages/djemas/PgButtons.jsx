export const PgButtons = ({ pageNumber, setPage, isPreviousData }) => {
    return (
      <button onClick={() => setPage(pg)} disabled={isPreviousData}>
        {pageNumber}
      </button>
    );
  };