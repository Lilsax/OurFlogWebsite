import React from 'react';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
export default function useSctroll() {
  const controls = useAnimation();
  const [element, view] = useInView({ threshold: 0.5 });

  if (view) {
    controls.start('show');
  } else {
    controls.start('hide');
  }
  return [element, controls, view];
}
