import MessageListItem from '../components/MessageListItem';
import { useState } from 'react';
import { Message, getMessages } from '../data/messages';

import { IonPage, IonContent, IonToolbar, IonTitle, IonButtons, IonBackButton, IonButton, IonIcon, IonMenuButton, IonSearchbar, IonSegment, IonSegmentButton, IonInput, IonItem,IonCheckbox, IonSelect, IonSelectOption } from '@ionic/react';
import { personCircle, search, helpCircle, star, create, ellipsisHorizontal, ellipsisVertical } from 'ionicons/icons';

/**
 *  for issue #25018
 *  IonItem's ionic component children inside a div doesn't work well 
 * 
 */

const Home: React.FC = () => {

  return (
    <IonPage>
      <IonContent>
        <IonItem>
          <div>
            {/* IonCheckbox can't click */}
            <IonCheckbox />
            <IonSelect value={'AAA'} style={{width: 190}}>
              <IonSelectOption>AAA</IonSelectOption>
              <IonSelectOption>BBB</IonSelectOption>
              <IonSelectOption>CCC</IonSelectOption>
            </IonSelect>
          </div>
        </IonItem>

        <IonItem>
          {/* IonCheckbox works well */}
          <IonCheckbox />
          <IonSelect value={'AAA'} style={{width: 190}}>
            <IonSelectOption>AAA</IonSelectOption>
            <IonSelectOption>BBB</IonSelectOption>
            <IonSelectOption>CCC</IonSelectOption>
          </IonSelect>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default Home;
