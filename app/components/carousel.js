import Head from 'next/head';

const Carousel = ({ children }) => {
  return (
    <div className="carousel">
      {children}
    </div>
  );
};

export default Carousel;