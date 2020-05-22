import React, { Fragment } from "react"
import { makeStyles } from "@material-ui/styles"

import HomeBtn from "../ui/HomeBtn"
import SectionHeader from "../ui/SectionHeader"

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: "5rem",
    marginLeft: "3rem",
    marginRight: "3rem",
    color: "#777",
    fontFamily: "Roboto",
    textAlign: "justify",
    lineHeight: 2,
    [theme.breakpoints.down("sm")]: {
      marginTop: "3rem",
      marginLeft: "2rem",
      marginRight: "2rem",
      fontSize: "0.9rem",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "2rem",
      marginLeft: "0.5rem",
      marginRight: "0.5rem",
      fontSize: "0.8rem",
    },
  },
}))
const Help = () => {
  const classes = useStyles()

  return (
    <Fragment>
      <SectionHeader title="Pomoc" />
      <div className={classes.container}>
        <h3>Co to jest CMS?</h3>
        <p>
          CMS to skrót od angielskiego
          <strong> Content Management System</strong> - System Zarządzania
          Treścią. Jest to aplikacja umożliwiająca użytkownikowi bezpośrednią
          edycję treści strony internetowej bez znajomości żadnego języka
          programowania. Edycja odbywa się podobnie do edycji zwykłego dokumentu
          (np .doc)
        </p>
        <br />
        <br />
        <h3>Jak działa CMS?</h3>
        <p>
          <strong>Statyczne i dynamiczne strony internetowe.</strong> Żeby
          zrozumieć jak działa CMS musimy znać różnicę pomiędzy statyczną i
          dynamiczną stroną internetową
        </p>
        <p>
          <strong>Strony statyczne</strong> - czyli strony do jakich jesteśmy
          przyzwyczajeni od lat to (w pewnym uproszczeniu) pliki przechowywane
          na serwerze, które zawierają wszystkie informacje wymagane przez Twoja
          przegladarkę do wyświetlenia strony, tym jej treść, zdjęcia i style
          (kolory, czcionki, rozmiar i stylizacja elementów). Konsekwencją tego
          jest fakt, że każda edycja treści strony musi się odbyć poprzez edycję
          pliku i zapisanie zmienionej wersji na serwerze. Wymagana jest
          znajomość języka programowania, gdyż treść i kod przeplatają się w
          pliku strony.
        </p>
        <p>
          <strong>Strony dynamiczne</strong> - mają bardziej złożoną
          architekturę. Strona wciąż ma plik dostępowy, który ładowany jest po
          odwiedzeniu adresu strony, ale plik ten oryginalnie nie zawiera treści
          strony, jest jakby kontenerem, który wypełniany jest treścią za każdym
          razem kiedy użytkownik odwiedzi stronę. Aby to uzyskać treść strony
          musi być przechowywana niezależnie od strony. W ten sposób zmiana
          wyświetlanej treści nie wymaga każdorazowo edycji plików strony. Treść
          w systemie CMS jest przechowywana w <strong>bazie danych</strong>.
          Załadowane grafiki przechowywane są na serwerze, a do bazy trafia link
          do grafiki, która jest zaczytywana razem z treścią podczas
          wyświetlania strony.
        </p>
        <p>
          Dzięki temu możemy zmieniać treść, a po zapisaniu zmian w bazie
          danych, oryginalna strona będzie zaczytywać nową treść w czasie
          rzeczywistym. Do edycji treści w bazie danych służy właśnie CMS.
          Wprowadzając zmiany zmieniasz odpowiednie wpisy w bazie danych.
          Ponieważ treść zaczytywana jest przez oryginalną stronę od nowa przy
          każdych odwiedzinach, zmiany wprowadzone z CMS’a są widoczne od razu.
        </p>
        <br />
        <br />
        <h3>Problemy techniczne</h3>
        <p>
          Najlepszą opcją na rozwiązanie problemów technicznych jest telefon do
          jednego z developerów rozwijających to oprogramowanie ;).
        </p>
        <br />
        <br />
      </div>
      <HomeBtn />
    </Fragment>
  )
}

export default Help
