const motionVariants = (isInView, translate) => {
  return {
    transform: isInView ? "none" : translate,
    opacity: isInView ? 1 : 0,
    transition: "all 0.9s cubic-bezier(0.017, 0.10, 0.2, 0.2) 0.25s",
  };
};

export default motionVariants;
