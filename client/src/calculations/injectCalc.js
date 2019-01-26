const calcInjectble = (medication, patient) => {
    let med = medication.injectable
    let kg = patient.weight / 2.2
    let returnedDose = []
    let dose = {medication: medication,
                patient: patient,
                mL: null,
                low: null,
                hi: null}

    if (patient.species === "Canine") {
        if (med.doseCanine !== 0) {
            dose.mL = parseFloat((med.doseCanine * kg / med.concentration).toFixed(2))
        } 
        
        if (med.doseRangeCanine[0] !== 0) {
            dose.low = parseFloat((med.doseRangeCanine[0] * kg /med.concentration).toFixed(2))
            dose.hi = parseFloat((med.doseRangeCanine[1] * kg /med.concentration).toFixed(2)) 
        }
    } 
    
    if (patient.species === "Feline") {
        if (med.doseFeline !== 0) {
            dose.mL = parseFloat((med.doseFeline * kg / med.concentration).toFixed(2))
        }

        if (med.doseRangeFeline[0] !== 0) {
            dose.low = parseFloat((med.doseRangeFeline[0] * kg / med.concentration).toFixed(2))
            dose.hi = parseFloat((med.doseRangeFeline[1] * kg / med.concentration).toFixed(2))
        }
    }
    returnedDose.push(dose)
    return returnedDose
    }

module.exports = calcInjectble;
