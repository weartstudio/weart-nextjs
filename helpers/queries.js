import { gql } from "@apollo/client";

export const homePageQuery = gql`query {
  pageBy(pageId: 12) {
    title
    homeHero {
      herotext
      herotitle
      heroimg {
        sourceUrl(size: LARGE)
      }
    }
    homeServices {
      serviceServices {
        text
        title
        icon {
          sourceUrl(size: LARGE)
        }
      }
      serviceText
      serviceTitle
    }
    homeLogos {
      homelogos {
        img {
          sourceUrl(size: LARGE)
        }
      }
    }
  }
  acfOptionsGlobalOptions {
    testimonial {
      testimonialblocktext
      testimonialblocktitle
      testimonialblockcontent {
        text
        tag
        name
      }
    }
  }
}`

export const testimonialQuery = gql`query {
  testimonials {
    edges {
      node {
        title
        testimonials {
          testimonialname
          testimonialtag
          testimonialtext
        }
      }
    }
  }
}`