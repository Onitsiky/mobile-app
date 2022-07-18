import { IonButton, IonContent, IonHeader, IonPage, IonTabBar, IonTabButton, IonTabs, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer2 from '../components/ExploreContainer2';

import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage className='body'>
      <IonHeader>
        <IonToolbar>
          <IonTitle >
            Emploi {">"} Informatique {">"} 2
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
        <ExploreContainer2 name={'tab - 2'} />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
