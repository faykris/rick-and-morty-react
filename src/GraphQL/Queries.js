import { gql } from "@apollo/client";

export const LOAD_CHARACTERS = gql`
    query {
        characters {
            results {
                id
                name
                image
            }
        }
    }
`;

export const LOAD_DETAILS = (id) => gql`
    query {
        character(id: ${id}) {
            id
            name
            status
            species
            gender
            type
            origin {
                id
                name
                dimension
            }
            location {
                id
                name
                dimension
            }
            image
            episode {
                id
                name
            }
            created
    }
}
`;
