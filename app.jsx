import { useState } from 'react'
import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { jobsAtom, messagingAtom, networkAtom, notificationsAtom, totalNotificationSelector } from './atoms'

function App() {

  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  )
  
}

function MainApp() {

  const networkNotificationCount = useRecoilValue(networkAtom);
  const jobsNotificationCount = useRecoilValue(jobsAtom);
  const notificationAtomCount  = useRecoilValue(notificationsAtom);
  const messagingNoitficationCount = useRecoilValue(messagingAtom); //we are only using this coz below it is needed in this main app coz of the notification
  //const [messagingNoitficationCount,setmessagingNoitficationCount] = useRecoilState(messagingAtom); //we are using use recoilstate because we also need the update wala part where we can update the state of it 
  //if we only needed setmessagingnotificationcount from the above code then we would have used useserrecoilstate here on that case 
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  return (
    <div>
       <button>Home</button>
       <button>My Network ({networkNotificationCount >= 100? "99+" : networkNotificationCount})</button>
       <button>Jobs ({jobsNotificationCount >=100? "99+" : jobsNotificationCount})</button>
       <button>messaging ({messagingNoitficationCount >=100? "99+" : messagingNoitficationCount})</button>
       <button>notifications ({notificationAtomCount >=100? "99+" : notificationAtomCount})</button>
       
       <button>Me ({totalNotificationCount})</button>
       
    </div>
  )
}

export default App
