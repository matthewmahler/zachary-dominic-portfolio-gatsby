import { useTransition, animated, config } from 'react-spring';
import React, { useState, useEffect } from 'react';
import Img from 'gatsby-image';

const ImageWrapper = props => {
  const [index, set] = useState(0);

  useEffect(
    () => void setInterval(() => set(state => (state + 1) % 2), 10000),
    []
  );
  const transitions = useTransition(
    props.data.contentfulAbout.profileImages[index],
    item => item.id,
    {
      from: { opacity: 0 },
      enter: { opacity: 1 },
      leave: { opacity: 0 },
      config: config.molasses,
    }
  );
  return transitions.map(({ item, props: animation, key }) => (
    <animated.div
      key={key}
      style={{
        ...animation,
        width: '100%',
      }}
    >
      <Img fluid={item.fluid} style={{ width: '100%' }} />
    </animated.div>
  ));
};

export default ImageWrapper;
