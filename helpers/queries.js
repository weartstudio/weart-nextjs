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
    optionsFooter {
      footertext
      footertitle
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
    homePortfolio {
      homeportfoliotitle
      homeportfoliotext
      homeportfoliofeatured {
        ... on Project {
          id
          portfolio {
            portfoliotag
            portfoliotechstack
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
      testimonialblocktext
      testimonialblocktitle
      testimonialblockcontent {
        text
        tag
        name
      }
    }
    optionsFooter {
      footertext
      footertitle
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
      }
    }
  }
}`

export const posts = gql`query {
	posts(where: {status: PUBLISH}) {
		edges {
			node {
				excerpt
				slug
				title
				date
				id
			}
		}
	}
}`;


export const posts_slug = gql`query NewQuery {
  posts(where: {status: PUBLISH}) {
    edges {
      node {
        slug
        id
      }
    }
  }
}`;

export const posts_by_slug = gql`
query ($slugUrl: String!) {
	postBy(slug: $slugUrl) {
		id
		title
		content
	}
}`;