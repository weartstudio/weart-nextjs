import { gql } from "@apollo/client";

export const homePageQuery = gql`query {
  pageBy(pageId: 12) {
    title
    homeHero {
      text
      title
      img {
        sourceUrl(size: LARGE)
      }
    }
  }
}`