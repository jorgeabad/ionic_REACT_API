import { IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import React from "react";
import ExploreContainer from "../components/ExploreContainer";

import { IonButtons, IonMenuButton } from "@ionic/react";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Blog de Jorge Abad</IonTitle>
        </IonToolbar>
      </IonHeader>
      <ExploreContainer />
    </IonPage>
  );
};

export default Home;
