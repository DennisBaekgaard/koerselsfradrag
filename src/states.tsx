import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
  } from 'recoil';

export const kilometerState = atom({
    key: 'kilometerState',
    default: 0,
  });

export const christmasOffState = atom({
    key: "christmasOffState",
    default: true
});
export const newYearsOffState = atom({
    key: "newYearsOffState",
    default: true
})

export const workSpecialDaysState = atom<null|boolean>({
    key: "workSpecialDaysState",
    default: null
})

export const homeWorkDaysState = atom({
    key: "homeWorkDaysState",
    default: 0
});

export const vacationWeeksState = atom({
    key: "vacationWeeksState",
    default: 0
});

export const highRateState = atom({
    key: "highRateState",
    default: false
});

export const sickDaysState = atom({
    key: "sickDaysState",
    default: 0
});

export const daysOffState = atom({
    key: 'daysOffState',
    default: [
        {
            title: "Palmesøndag",
            selected: false,
        },
       {
        title: "Skærtorsdag",
        selected: false
       },
       {
    
           title:"Langfredag",
           selected: false
        },
        {
    
            title: "Påskedag",
            selected: false,
        },
        {
            title:"2. påskedag",
            selected: false
        },
        {
            title: "Store bededag",
            selected: false
        },
        {
            title: "Pinsedag",
            selected: false
        },
        {
            title: "2. pinsedag",
            selected: false,
        },
        {
            title: "Juledag",
            selected: false
        },
        {
            title: "2. Juledag",
            selected: false
        },
        {
            title: "Arbejdernes kampdag",
            selected: false
        },
        {
            title:   "Grundlovsdag",
            selected: false
        }
    ]
});