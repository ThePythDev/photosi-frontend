# Progetto PhotoSi

Come supporto per il frontend, ho deciso di creare un piccolo servizio di rest api.

## Setup Progetto

Prima di partire, bisogna aprire il backend e lanciare il comando `npm install`.
Dopodichè, è necessario lanciare il comando `npm start` per poter avviare il servizio rest api, connesso ad un database mongodb atlas.

Eseguire la stessa procedura lato frontend per poter avviare l'applicativo in React.

## Funzionamento

Nonostante il servizio rest abbia un CRUD funzionante (lo si può testare tramite postman), l'applicativo React chiama il servizio rest solo per ottenere i dati presenti sul database e popolare lo state.

Tutte le modifiche crud fatte sul frontend non vengono sincronizzate sul database, ma viene modificato solo lo state.
In questo modo ricaricando l'applicativo si tornerà alla situazione di partenza.

N.B.: Per poter inserire le categorie, bisogna separarle con la virgola.

Spero di non aver dimenticato nulla.
Grazie!