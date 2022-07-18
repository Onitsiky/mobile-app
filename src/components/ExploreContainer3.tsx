import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from "@ionic/react";
import { useEffect, useState } from "react";
import "./ExploreContainer.css";
import axios from "axios";
import { Ijob } from "./Ijob";

interface ContainerProps {
    name: string;
  }

const ExploreContainer3 : React.FC <ContainerProps> = () => {
    const [result, setResult] = useState<Ijob[]>([]);
    useEffect(()=>{
        const promise = axios.get("https://scrappit-api.herokuapp.com/FmxaY044kqzeMnxP1lNSeGNqC5nxNgQYEB01Tdr8AAA=/3");
       promise.then((response)=>{
        console.log(response);
        setResult(response.data);
       }).catch((error)=>{
        console.error(error);
       })
    }, [])

    return(
        <div>
            {result.length > 0 && (
                result.map((item)=>(
                    <IonCard className="card">
                <IonCardHeader>
                    <IonCardSubtitle>
                        Secteur : informatique
                        <br/> 
                        <h6>Entreprise : {item.society}</h6>
                    </IonCardSubtitle>
                    <IonCardTitle>
                        <h5>{item.post}</h5>
                        <p>{item.contract}</p>
                    </IonCardTitle>
                    <IonCardContent>
                        {item.description}
                    </IonCardContent>
                </IonCardHeader>
            </IonCard>
                ))
            )}
        </div>
    );

}
export default ExploreContainer3;