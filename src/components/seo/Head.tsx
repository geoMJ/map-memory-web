import { Helmet, HelmetData } from 'react-helmet-async';

type HeadProps = {
  title?: string;
  description?: string;
};

// Borrowed from the Booletproof React repo

const helmetData = new HelmetData({});

const Head = ({ title = '', description = '' }: HeadProps = {}) => {
  return (
    <Helmet
      helmetData={helmetData}
      title={title ? `${title} | MapMemory` : undefined}
      defaultTitle="Bulletproof React"
    >
      <meta name="description" content={description} />
    </Helmet>
  );
};

export default Head