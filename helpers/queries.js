import { gql } from "@apollo/client";

export const homePageQuery = gql`query {
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
  page(id: "12", idType: DATABASE_ID) {
    homeHero {
      herotext
      herotitle
      heroimg {
        sourceUrl(size: LARGE)
      }
    }
    homeLogos {
      homelogos {
        img {
          sourceUrl(size: LARGE)
        }
      }
    }
    homeServices {
      serviceText
      serviceTitle
      serviceServices {
        title
        text
        icon {
          sourceUrl(size: LARGE)
        }
      }
    }
  }
}`

export const testimonialQuery = gql`query {
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