import MessageListItem from '../components/MessageListItem';
import { useState } from 'react';
import { Message, getMessages } from '../data/messages';

import { IonPage, IonContent, IonToolbar, IonTitle, IonButtons, IonBackButton, IonButton, IonIcon, IonMenuButton, IonSearchbar, IonSegment, IonSegmentButton, IonInput, IonItem,IonCheckbox, IonSelect, IonSelectOption } from '@ionic/react';
import { personCircle, search, helpCircle, star, create, ellipsisHorizontal, ellipsisVertical } from 'ionicons/icons';

/**
 *  for issue #25015
 *  IonInput below the half page focus delay
 *  Please note that, if scrollAssist: false in App.tsx, it will changes normal
 */

const InputTest: React.FC = () => {

  return (
    <IonPage>
      <IonContent>
        <IonInput placeholder='max'></IonInput>
        <div
          style={{
            margin: 20,
            height: 500
          }}
        >
        </div>
        <IonInput placeholder='max'></IonInput>
      </IonContent>
    </IonPage>
  );
};

export default InputTest;
