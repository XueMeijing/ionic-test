import MessageListItem from '../components/MessageListItem';
import { useState } from 'react';
import { Message, getMessages } from '../data/messages';

import { IonPage, IonList, IonLabel, IonAccordion, IonAccordionGroup, IonHeader, IonContent, IonToolbar, IonTitle, IonButtons, IonBackButton, IonButton, IonIcon, IonMenuButton, IonSearchbar, IonSegment, IonSegmentButton, IonInput, IonItem,IonCheckbox, IonSelect, IonSelectOption } from '@ionic/react';
import { personCircle, search, helpCircle, star, create, ellipsisHorizontal, ellipsisVertical } from 'ionicons/icons';
import { useHistory } from "react-router-dom";

const Home: React.FC = (props: any) => {
  let history = useHistory();

  return (
    <IonPage>
      <IonContent>
        {/* i want colors and numbers IonAccordion default open at the same time, 
        but it seems that it only works when the IonAccordionGroup value array has one item. */}
        <IonAccordionGroup value={['colors', 'numbers']} multiple>
          <IonAccordion value="colors">
            <IonItem slot="header">
              <IonLabel>Colors</IonLabel>
            </IonItem>
      
            <IonList slot="content">
              <IonItem>
                <IonLabel>Red</IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>Green</IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>Blue</IonLabel>
              </IonItem>
            </IonList>
          </IonAccordion>
          <IonAccordion value="shapes">
            <IonItem slot="header">
              <IonLabel>Shapes</IonLabel>
            </IonItem>
      
            <IonList slot="content">
              <IonItem>
                <IonLabel>Circle</IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>Triangle</IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>Square</IonLabel>
              </IonItem>
            </IonList>
          </IonAccordion>
          <IonAccordion value="numbers">
            <IonItem slot="header">
              <IonLabel>Numbers</IonLabel>
            </IonItem>
      
            <IonList slot="content">
              <IonItem>
                <IonLabel>1</IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>2</IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>3</IonLabel>
              </IonItem>
            </IonList>
          </IonAccordion>
        </IonAccordionGroup>
      </IonContent>
    </IonPage>
  );
};

export default Home;
