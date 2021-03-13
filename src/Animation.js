export const PageAnimation = {
  hidden: {
    opacity: 0,
    y: 300,
  },

  show: {
    opacity: 3,
    y: 0,

    transition: {
      duraction: 1,
      when: 'beforeChildren',
      staggerChildren: 0.5,
    },
  },

  exit: {
    opacity: 0,
    y: 300,
    transition: {
      duraction: 0.5,
    },
  },
};

export const titleAnim = {
  hidden: { y: 200 },
  show: {
    y: 0,
    transition: { duraction: 1, ease: 'easeOut' },
  },
};

export const fade = {
  hidden: {
    opacity: 0,
  },

  show: {
    opacity: 1,
    transition: { ease: 'easeOut', duraction: 0.5 },
  },
};

export const photoAnim = {
  hidden: {
    scale: 1.5,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      ease: 'easeOut',
      duraction: 75,
    },
  },
};

export const lineAnim = {
  hidden: { width: '0%' },
  show: {
    width: '100%',
    transition: { duration: 1 },
  },
};

export const slider = {
  hidden: { x: '-130%', skew: '45deg' },
  show: {
    x: '100%',
    skew: '0deg',
    transition: { ease: 'easeOut', duration: 1 },
  },
};

export const sliderContainer = {
  hidden: {
    opacity: 0,
  },

  show: {
    opacity: 3,
    transition: {
      duraction: 1,
      when: 'beforeChildren',
      staggerChildren: 0.1,
    },
  },
};

export const ScrollReveal = {
  hidden: {
    opacity: 0,
    scale: 1.2,
    transition: {
      duraction: 0.5,
    },
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duraction: 0.5,
    },
  },
};
