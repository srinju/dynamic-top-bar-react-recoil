/*
import { atom, selector } from "recoil";

//defing the atoms / states
export const networkAtom = atom({
    key : "networkAtom",
    default : 102
});

export const jobsAtom = atom({
    key : "jobsAtom",
    default : 0
});

export const notificationsAtom = atom({
    key : "notificationsAtom",
    default : 12
});

export const messagingAtom = atom({
    key : "messagingAtom",
    default : 0
});

//defining the selector >>

export const totalNotificationSelector = selector({
    key : "totalNotificationSelector",
    get : ({get}) => {
        const networkAtomCount = get(networkAtom); //getting all the values 
        const jobsAtomCount = get(jobsAtom);
        const notificationAtomCount = get(notificationsAtom);
        const messagingAtomCount = get(messagingAtom);
        //and then doing the operation .. we do or specify the operation in return inside a selector 
        return networkAtomCount + jobsAtomCount + notificationAtomCount + messagingAtomCount;
    }
})
*/

import axios from "axios";
import { atom, selector } from "recoil";

export const notifications = atom({ // we can understand we are mainly initialising the top bar shit here that upon reoload of the site the intital default state of the top bar is fetched from the backend whenver we want to do something like this we do it like this as shown below >>
    key: "networkAtom",
    default: selector({
        key : "networkAtomsSelector",
        get : async () => {
            const res = await axios.get("https://sum-server.100xdevs.com/notifications");
            return res.data;
        }
    })
});

export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({get}) => {
        const allNotifications = get(notifications);
        return allNotifications.network + 
        allNotifications.jobs + 
        allNotifications.notifications + 
        allNotifications.messaging
    }
})
