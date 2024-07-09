import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { LocationList } from "./location/LocationList";
import { LocationCreate } from "./location/LocationCreate";
import { LocationEdit } from "./location/LocationEdit";
import { LocationShow } from "./location/LocationShow";
import { BeerList } from "./beer/BeerList";
import { BeerCreate } from "./beer/BeerCreate";
import { BeerEdit } from "./beer/BeerEdit";
import { BeerShow } from "./beer/BeerShow";
import { BeerAvailabilityList } from "./beerAvailability/BeerAvailabilityList";
import { BeerAvailabilityCreate } from "./beerAvailability/BeerAvailabilityCreate";
import { BeerAvailabilityEdit } from "./beerAvailability/BeerAvailabilityEdit";
import { BeerAvailabilityShow } from "./beerAvailability/BeerAvailabilityShow";
import { BarList } from "./bar/BarList";
import { BarCreate } from "./bar/BarCreate";
import { BarEdit } from "./bar/BarEdit";
import { BarShow } from "./bar/BarShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"beer"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Location"
          list={LocationList}
          edit={LocationEdit}
          create={LocationCreate}
          show={LocationShow}
        />
        <Resource
          name="Beer"
          list={BeerList}
          edit={BeerEdit}
          create={BeerCreate}
          show={BeerShow}
        />
        <Resource
          name="BeerAvailability"
          list={BeerAvailabilityList}
          edit={BeerAvailabilityEdit}
          create={BeerAvailabilityCreate}
          show={BeerAvailabilityShow}
        />
        <Resource
          name="Bar"
          list={BarList}
          edit={BarEdit}
          create={BarCreate}
          show={BarShow}
        />
      </Admin>
    </div>
  );
};

export default App;
