import ScrollAnimation from 'react-animate-on-scroll';

const AnimateOnScroll = ({ children, duration = 1, delay = 0 }) => {
  return (
    <ScrollAnimation 
      animateIn="animate__animated animate__fadeIn"
      duration={duration}
      delay={delay}
      animateOnce={true}
    >
      {children}
    </ScrollAnimation>
  );
};

// Usage example:
const App = () => {
  return (
    <>
      <AnimateOnScroll>
        <div>First animated element</div>
      </AnimateOnScroll>
      
      <AnimateOnScroll delay={0.2}>
        <div>Second animated element with delay</div>
      </AnimateOnScroll>
    </>
  );
};

export default AnimateOnScroll;