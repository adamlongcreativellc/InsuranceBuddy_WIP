export const handleSmoothScroll = (
  e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
  href: string
) => {
  e.preventDefault();

  if (href.startsWith("#")) {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // Height of fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  } else {
    window.location.href = href;
  }
};