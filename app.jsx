/*
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
*/

//same thing more advancely >> or moreover using asynchronous data queries ...mainly initialising 


import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { notifications, totalNotificationSelector } from './atoms'
import { useEffect } from 'react'
import axios from 'axios'

//asynchronous queries is nothing but the values are coming from the backened and we are directly showing the value from the backend the link  to backend is an already created backend server
//The default value cant be async the default value can be a selecto by itself

function App() {
  return <RecoilRoot>
    <MainApp />
  </RecoilRoot>
}

function MainApp() {
  const [networkCount, setNetworkCount] = useRecoilState(notifications); //notifications is the atom and when we fetch the data from the backend and updatte the state by setnetworkcount it basically updates the notifications state directly
  const totalNotificationCount = useRecoilValue(totalNotificationSelector); //selector

  /* we can do this logic directly inside the atom in the atom.js file otherwise we will see a flash that is 0 in the notifications then it will show the otification counts see the atoms.js file 
  useEffect(() => {
    // fetch
    axios.get("https://sum-server.100xdevs.com/notifications")
      .then(res => {
        setNetworkCount(res.data)
      })
  }, [])
  */

  return (
    <>
      <button>Home</button>
      
      <button>My network ({networkCount.networks >= 100 ? "99+" : networkCount.networks})</button>
      <button>Jobs {networkCount.jobs}</button>
      <button>Messaging ({networkCount.messaging})</button>
      <button>Notifications ({networkCount.notifications})</button>

      <button>Me ({totalNotificationCount})</button>
    </>
  )
}

export default App
