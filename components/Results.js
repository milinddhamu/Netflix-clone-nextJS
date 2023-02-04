import FlipMove from 'react-flip-move';
import Thumbnail from '@/components/Thumbnail';


const Results = ({ results }) => {
  return (
    <>
    <FlipMove className="px-4 my-10 sm:grid md:grid-cols-2 md:px-4
    l:grid-cols-3 xl:grid-cols-4 xl:px-5 3xl:px-8 flex-wrap justify-center">
    {results.map((result) => (
        <Thumbnail key={result.id} result={result} />
      ))}
    </FlipMove>
      
    </>
  );
}

export default Results;