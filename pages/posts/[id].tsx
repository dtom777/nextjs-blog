import { GetStaticPaths, GetStaticProps } from 'next';
type Props = {
  title: string;
  content: string;
};

const Post: React.FC<Props> = ({ title, content }) => {
  return (
    <>
      <h1>{title}</h1>
      <p>{content}</p>
    </>
  );
};

export default Post;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
    fallback: false,
  };
};

const dummyData = {
  1: {
    title: 'id1 title',
    content: 'id1 context',
  },
  2: {
    title: 'id2 title',
    content: 'id2 context',
  },
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const props: Props = dummyData[params!.id as '1' | '2'];
  return { props };
};
