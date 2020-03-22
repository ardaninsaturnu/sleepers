const getSleepHours = day => {

   if(day==='saturday' || day==='sunday') {
     return 9
   } else if(day==='monday'|| day==='tuesday' || day==='wednesday' || day==='thursday' || day==='friday') {
     return 8
   }

}

const getActualSleepHours = () => {


return getSleepHours('saturday')+getSleepHours('sunday')+getSleepHours('monday')+getSleepHours('tuesday')+getSleepHours('wednesday')+getSleepHours('thursday')+getSleepHours('friday')

}

const getIdealSleepHours = () => {
  const idealHours = 7
  return idealHours*7
}

const calculateSleepDebt= () => {

  actualSleepHours = getActualSleepHours() ;

  idealSleepHours = getIdealSleepHours() ;

  if (actualSleepHours===idealSleepHours) {

    return console.log('well done bitch')
  }
  else if (actualSleepHours > idealSleepHours) {

    return console.log('haftada yaklaşık'+' '+ (actualSleepHours-idealSleepHours)+' '+'saat daha az uyumalısın')
  }
  else if (actualSleepHours<idealSleepHours) {

    return console.log('hey man some get more rest')
  }

}

calculateSleepDebt()
