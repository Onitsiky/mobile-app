import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer3 from '../components/ExploreContainer3';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage className='body'>
      <IonHeader>
        <IonToolbar>
          <IonTitle >
            Emploi {">"} Informatique {">"} 3
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div>
          <h1>Portal job Mada </h1>
          <br/>
          <h3>Offre récentes </h3>
        </div>
        <ExploreContainer3 name={'tab - 3'} />
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
