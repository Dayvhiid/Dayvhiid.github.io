const display = document.getElementById("display")
display.style.display = "none"
raceBtn.addEventListener("click", function() {
    const year = document.getElementById("season")
    const race = document.getElementById("round")
    const raceBtn = document.getElementById("raceBtn")
    const circuit = document.getElementById("trackName")
    const driverArray = []
    const TimeArray = []
    const constructorArray = []
    const pointsArray = []
    let season, round;
    season = year.value;
    round = race.value;
    fetch(`http://ergast.com/api/f1/${season}/${round}/results.json`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            console.log(data.MRData.RaceTable.Races[0].Results)
            let holding = data.MRData.RaceTable.Races[0].Results
                //holding = JSON.stringify(holding)


            for (let i = 0; i <= 19; i++) {
                //console.log(holding[i].Driver.driverId)
                driverArray.push(holding[i].Driver.driverId)
                pointsArray.push(holding[i].points)
                TimeArray.push(holding[i].FastestLap.Time.time)
                constructorArray.push(holding[i].Constructor.constructorId)

            }
            circuit.innerHTML = (data.MRData.RaceTable.Races[0].raceName)
                //DRIVER LIST
            const r1c2 = document.getElementById("r1c2")
            r1c2.innerHTML = driverArray[0]
            const r2c2 = document.getElementById("r2c2")
            r2c2.innerHTML = driverArray[1]
            const r3c2 = document.getElementById("r3c2")
            r3c2.innerHTML = driverArray[2]
            const r4c2 = document.getElementById("r4c2")
            r4c2.innerHTML = driverArray[3]
            const r5c2 = document.getElementById("r5c2")
            r5c2.innerHTML = driverArray[4]
            const r6c2 = document.getElementById("r6c2")
            r6c2.innerHTML = driverArray[5]
            const r7c2 = document.getElementById("r7c2")
            r7c2.innerHTML = driverArray[6]
            const r8c2 = document.getElementById("r8c2")
            r8c2.innerHTML = driverArray[7]
            const r9c2 = document.getElementById("r9c2")
            r9c2.innerHTML = driverArray[8]
            const r10c2 = document.getElementById("r10c2")
            r10c2.innerHTML = driverArray[9]
            const r11c2 = document.getElementById("r11c2")
            r11c2.innerHTML = driverArray[10]
            const r12c2 = document.getElementById("r12c2")
            r12c2.innerHTML = driverArray[11]
            const r13c2 = document.getElementById("r13c2")
            r13c2.innerHTML = driverArray[12]
            const r14c2 = document.getElementById("r14c2")
            r14c2.innerHTML = driverArray[13]
            const r15c2 = document.getElementById("r15c2")
            r15c2.innerHTML = driverArray[14]
            const r16c2 = document.getElementById("r16c2")
            r16c2.innerHTML = driverArray[15]
            const r17c2 = document.getElementById("r17c2")
            r17c2.innerHTML = driverArray[16]
            const r18c2 = document.getElementById("r18c2")
            r18c2.innerHTML = driverArray[17]
            const r19c2 = document.getElementById("r19c2")
            r19c2.innerHTML = driverArray[18]
            const r20c2 = document.getElementById("r20c2")
            r20c2.innerHTML = driverArray[19]


            //CONSTRUCTOR LIST

            const r1c3 = document.getElementById("r1c3")
            r1c3.innerHTML = constructorArray[0]
            const r2c3 = document.getElementById("r2c3")
            r2c3.innerHTML = constructorArray[1]
            const r3c3 = document.getElementById("r3c3")
            r3c3.innerHTML = constructorArray[2]
            const r4c3 = document.getElementById("r4c3")
            r4c3.innerHTML = constructorArray[3]
            const r5c3 = document.getElementById("r5c3")
            r5c3.innerHTML = constructorArray[4]
            const r6c3 = document.getElementById("r6c3")
            r6c3.innerHTML = constructorArray[5]
            const r7c3 = document.getElementById("r7c3")
            r7c3.innerHTML = constructorArray[6]
            const r8c3 = document.getElementById("r8c3")
            r8c3.innerHTML = constructorArray[7]
            const r9c3 = document.getElementById("r9c3")
            r9c3.innerHTML = constructorArray[8]
            const r10c3 = document.getElementById("r10c3")
            r10c3.innerHTML = constructorArray[9]
            const r11c3 = document.getElementById("r11c3")
            r11c3.innerHTML = constructorArray[10]
            const r12c3 = document.getElementById("r12c3")
            r12c3.innerHTML = constructorArray[11]
            const r13c3 = document.getElementById("r13c3")
            r13c3.innerHTML = constructorArray[12]
            const r14c3 = document.getElementById("r14c3")
            r14c3.innerHTML = constructorArray[13]
            const r15c3 = document.getElementById("r15c3")
            r15c3.innerHTML = constructorArray[14]
            const r16c3 = document.getElementById("r16c3")
            r16c3.innerHTML = constructorArray[15]
            const r17c3 = document.getElementById("r17c3")
            r17c3.innerHTML = constructorArray[16]
            const r18c3 = document.getElementById("r18c3")
            r18c3.innerHTML = constructorArray[17]
            const r19c3 = document.getElementById("r19c3")
            r19c3.innerHTML = constructorArray[18]
            const r20c3 = document.getElementById("r20c3")
            r20c3.innerHTML = constructorArray[19]

            //FASTEST LAP LIST
            const r1c4 = document.getElementById("r1c4")
            r1c4.innerHTML = TimeArray[0]
            const r2c4 = document.getElementById("r2c4")
            r2c4.innerHTML = TimeArray[1]
            const r3c4 = document.getElementById("r3c4")
            r3c4.innerHTML = TimeArray[2]
            const r4c4 = document.getElementById("r4c4")
            r4c4.innerHTML = TimeArray[3]
            const r5c4 = document.getElementById("r5c4")
            r5c4.innerHTML = TimeArray[4]
            const r6c4 = document.getElementById("r6c4")
            r6c4.innerHTML = TimeArray[5]
            const r7c4 = document.getElementById("r7c4")
            r7c4.innerHTML = TimeArray[6]
            const r8c4 = document.getElementById("r8c4")
            r8c4.innerHTML = TimeArray[7]
            const r9c4 = document.getElementById("r9c4")
            r9c4.innerHTML = TimeArray[8]
            const r10c4 = document.getElementById("r10c4")
            r10c4.innerHTML = TimeArray[9]
            const r11c4 = document.getElementById("r11c4")
            r11c4.innerHTML = TimeArray[10]
            const r12c4 = document.getElementById("r12c4")
            r12c4.innerHTML = TimeArray[11]
            const r13c4 = document.getElementById("r13c4")
            r13c4.innerHTML = TimeArray[12]
            const r14c4 = document.getElementById("r14c4")
            r14c4.innerHTML = TimeArray[13]
            const r15c4 = document.getElementById("r15c4")
            r15c4.innerHTML = TimeArray[14]
            const r16c4 = document.getElementById("r16c4")
            r16c4.innerHTML = TimeArray[15]
            const r17c4 = document.getElementById("r17c4")
            r17c4.innerHTML = TimeArray[16]
            const r18c4 = document.getElementById("r18c4")
            r18c4.innerHTML = TimeArray[17]
            const r19c4 = document.getElementById("r19c4")
            r19c4.innerHTML = TimeArray[18]
            const r20c4 = document.getElementById("r20c4")
            r20c4.innerHTML = TimeArray[19]

            display.style.display = "block"
        })
    console.log(driverArray)
    console.log(TimeArray)
    console.log(constructorArray)
    console.log(pointsArray)

    //table data definitions
    //const r1c2 = document.getElementById("r1c2")
    console.log(driverArray[0])



})