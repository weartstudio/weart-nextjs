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
      homeabouttitle
      homeaboutcontent
    }
    homeHero {
      herocontent
      homeherotitle
    }
    homeServices {
      servicetitle
      servicecontent
      services {
        title
        content
        icon {
          mediaItemUrl
        }
      }
    }
    homePortfolio {
      homeportfoliotitle
      homeportfoliocontent
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
    excerpt
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

export const aboutPageQuery = gql`query {
  page(id: "1478", idType: DATABASE_ID) {
    content
    title
    excerpt
  }
}`

