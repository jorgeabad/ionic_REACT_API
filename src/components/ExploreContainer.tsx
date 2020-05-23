import React from "react";
import "./ExploreContainer.css";
import {
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
} from "@ionic/react";
import axios from "axios";
const URL = "https://jorge-abad.es/publicaciones";
interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {
  const [articulos, setarticulos] = React.useState([]);
  React.useEffect(() => {
    fetchArticulos().then((data) => setarticulos(data));
  }, []);
  const fetchArticulos = () => {
    return axios({
      url: URL,
      method: "get",
      headers: {
        common: {
          Accept: "application/json",
        },
      },
    }).then((response) => {
      return response.data;
    });
  };

  return (
    <IonContent color="light">
      {articulos.map((a) => {
        return (
          <IonCard href={URL + "/" + a["_id"]}>
            <IonCardHeader>
              <IonCardSubtitle>Título</IonCardSubtitle>
              <IonCardTitle>{a["titulo"]}</IonCardTitle>
              <IonCardSubtitle>Autor: {a["autor"]}</IonCardSubtitle>
            </IonCardHeader>

            <IonCardContent>Descripción: {a["descripcion"]}</IonCardContent>
          </IonCard>
        );
      })}
    </IonContent>
  );
};

export default ExploreContainer;
