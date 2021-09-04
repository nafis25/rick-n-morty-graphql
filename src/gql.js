import { gql } from "graphql-tag";

export const GET_ALL_CHARACTERS = gql`
   query getAllCharacters($page: Int!) {
      characters(page: $page) {
         info {
            prev
            pages
            next
         }
         results {
            name
         }
      }
   }
`;

export const GET_ALL_EPISODES = gql`
   query getAllEpisodes($page: Int!) {
      episodes(page: $page) {
         info {
            prev
            pages
            next
         }
         results {
            name
         }
      }
   }
`;

export const GET_ALL_LOCATIONS = gql`
   query getAllLocations($page: Int!) {
      locations(page: $page) {
         info {
            prev
            pages
            next
         }
         results {
            name
         }
      }
   }
`;
