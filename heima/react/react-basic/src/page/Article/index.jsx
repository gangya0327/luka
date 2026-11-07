// import { useSearchParams } from 'react-router';
import { useParams } from 'react-router';

const Article = () => {
  // const [params] = useSearchParams();
  // const id = params.get('id');
  // const name = params.get('name');

  const params = useParams();
  console.log('params :>> ', params);
  const id = params.id;
  const name = params.name;

  return (
    <div>
      i am article, id: {id}, name: {name}
    </div>
  );
};

export default Article;
