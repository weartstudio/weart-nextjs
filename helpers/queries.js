import { gql } from "@apollo/client";

export const homePageQuery = gql`query {
  acfOptionsGlobalOptions {
    testimonial {
      testimonialblockcontent {
        text
        tag
        name
      }
    }
  }
  page(id: "12", idType: DATABASE_ID) {
    homeAbout {
      aboutleft
      aboutright
    }
    homePortfolio {
      homeportfoliofeatured {
        ... on Project {
          id
          portfolio {
            portfoliotag
            portfoliotechstack
            portfoliourl
          }
          title
          featuredImage {
            node {
              sourceUrl(size: LARGE)
            }
          }
        }
      }
    }
  }
}`

export const testimonialQuery = gql`query {
  acfOptionsGlobalOptions {
    testimonial {
      testimonialblockcontent {
        text
        tag
        name
      }
    }
  }
}`

export const portfolioPageQuery = gql`query {
  page(id: "58", idType: DATABASE_ID) {
    content
    title
  }
  projects {
    nodes {
      title
      featuredImage {
        node {
          sourceUrl
        }
      }
      portfolio {
        portfoliotechstack
        portfoliotag
        portfoliourl
      }
    }
  }
}`