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
            id
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
            id
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
            id
            name
         }
      }
   }
`;

export const GET_CHARACTER = gql`
   query getCharacter($id: ID!) {
      character(id: $id) {
         name
         image
         status
         species
         type
         gender
         created
         origin {
            name
            type
            dimension
            created
         }
         location {
            name
         }
         episode {
            name
         }
      }
   }
`;

export const GET_EPISODE = gql`
   query getEpisode($id: ID!) {
      episode(id: $id) {
         name
         air_date
         characters {
            name
         }
         created
      }
   }
`;

export const GET_LOCATION = gql`
   query getLocation($id: ID!) {
      location(id: $id) {
         name
         type
         created
      }
   }
`;
