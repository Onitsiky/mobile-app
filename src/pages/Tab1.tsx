import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage className='body'>
      <IonHeader>
        <IonToolbar>
          <IonTitle >
            Emploi {">"} Informatique {">"} 1
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div>
          <h1>Portal job Mada </h1>
          <br/>
          <h3>Offre récentes </h3>
        </div>
        <ExploreContainer name={'tab - 2'} />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
