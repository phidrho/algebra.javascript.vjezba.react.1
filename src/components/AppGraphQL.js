import React from 'react';
// import ApolloClient from 'apollo-boost';
import { ApolloProvider, useQuery, InMemoryCache, ApolloClient } from '@apollo/react-hooks';
import gql from 'graphql-tag';

//importamo dodane biblioteke
import { createHttpLink } from 'apollo-link-http';


// LINK ZA DEFINICIJU KLIJENTA KOJI PRIMA GRAPHQL UPITE:
// https://48p1r2roz4.sse.codesandbox.io

// NAŠ UPIT:
// {
//     rates(currency: "EUR")
//     {
//         currency
//         rate
//     }
// }


const httpLink = new createHttpLink({
    uri: 'https://48p1r2roz4.sse.codesandbox.io',
});

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
});


// // kreiramo naš klijent za GraphQL - definiramo gdje je resurs za podatke
// const client = new ApolloClient({
//     uri: 'https://48p1r2roz4.sse.codesandbox.io',
// });

// naša komponenta
function ExchangeRates() {
    // useQuery funkcija koja šalje upit, a gql je anotacija (prefix) za upit
    const { loading, error, data } = useQuery(gql`
    {
        rates(currency: "EUR")
        {
            currency
            rate
        }
    }`);


    if (loading) return <p>Loading...</p>;

    if (error) return <p>Error:</p>;

    return data.rates.map(({ currency, rate }) => (
        <div key={currency}>
            <p>{currency}: {rate}</p>
        </div>
    )
    );
}


const AppGraphQL = () => (
    <ApolloProvider client={client}>
        <div>
            <h1>GraphQL primjer</h1>
            <h2>Upit serveru:</h2>
            <h2>https://api.coinbase.com/v2/exchange-rates?currency=EUR</h2>

            <ExchangeRates />
        </div>

    </ApolloProvider>
);

export default AppGraphQL;
