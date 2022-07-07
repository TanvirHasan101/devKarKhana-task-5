// CALORIE CALCULATOR

function Calorie() {

    document.getElementById("welcome-div").style.display = 'none'
    document.getElementById("BMI").style.display = 'none'
    document.getElementById("BMR").style.display = 'none'
    document.getElementById("CALORIE").style.display = 'block'
    document.getElementById("WEIGHT").style.display = 'none'

    document.getElementById("CALORIE").innerHTML = `
    <section class="block h-full p-5">
    <h1 class="text-4xl font-bold mb-10 text-center">Calculate Calorie</h1>
    <div class="flex flex-col md:flex-row w-full">
        <div class=" form-control w-full md:w-1/2 flex flex-col p-8 bg-lime-200 rounded-2xl mx-2">

            <div class=" w-full flex flex-col md:flex-row justify-center items-center ">
                <label class="w-4/5 input-group  my-2">
                    <span class="bg-lime-500 w-28 font-semibold">Age</span>
                    <input min="0" id="cal_age" type="number" placeholder="Years" class="input input-bordered w-full" />
                </label>

                <select id="activity" class="select select-success w-full max-w-xs">
                              <option disabled selected>Activity</option>
                              <option>Sedentary (little or no exercise)</option>
                              <option>Lightly active (light exercise/sports 1-3 days/week)</option>
                              <option>Moderately active (moderate exercise/sports 3-5 days/week)</option>
                              <option>Very active (hard exercise/sports 6-7 days a week)</option>
                              <option>Extra active (very hard exercise/sports & a physical job)</option>
                        
               </select>
              
            </div>

            <div class=" w-full flex flex-row justify-center items-center">
                <label class="input-group my-2 w-full">
                    <span class="bg-lime-500 w-24 h-12  font-semibold">Gender</span>
                    <div class="w-full flex flex-row justify-center items-center">
                        <div class="w-full pl-4 flex justify-around">
                            <div>
                                <input type="radio" id="cal_male" name="cal-gender">
                                <label for="cal_male" class="font-semibold">Male</label>
                            </div>
                            <div>
                                <input type="radio" id="cal_female" name="cal-gender">
                                <label for="cal_female" class="font-semibold">Female</label>
                            </div>
                        </div>
                    </div>
                </label>
            </div>

            <div class=" w-full flex flex-row justify-center items-center">
                <label class="input-group my-2 w-full">
                    <span class=" bg-lime-500 w-26  font-semibold">Height</span>
                    <input min="0" id="cal_height_feet" type="number" placeholder="feet"
                        class="input input-bordered w-full" />
                    <input min="0"  max="11" id="cal_height_inch" type="number" placeholder="inch"
                        class="input input-bordered w-full" />
                </label>
            </div>

            <div class=" w-full flex flex-row justify-center items-center">
                <label class="input-group my-2 w-full">
                    <span class="bg-lime-500 w-24 font-semibold">Weight</span>
                    <input id="cal_weight" min="0" type="number" placeholder="kg" class="input input-bordered w-full" />
                </label>
            </div>
               <div id="cal_warning" class="alert alert-error shadow-lg">
               <div>
                      <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span id="cal_input_warning">
               </span>
                </div>
             </div>
            
            <button  onclick="calculateCal()"
                class="btn btn-primary mt-4 px-10 w-full hover:text-white hover:bg-lime-800">Calculate
            </button>
            <button onclick="clearCalData()"
            class="btn bg-red-500 text-white border-current text-center mt-10 mx-auto px-10 w-1/5 hover:text-white hover:bg-red-800">Clear
        </button>
        </div>

        <div id="cal_result"
            class="w-full md:w-1/2 p-8 bg-lime-200 rounded-2xl mx-2 mt-6 md:mt-0 flex flex-col justify-center items-center">
            <h1 class="text-2xl font-bold ">Your Calorie per Day: <span id="cal"
                    class="text-neutral">_</span> cal/day </h1>
                
        </div>
    </div>
</section>
    
    `
    document.getElementById("cal_warning").style.display = 'none';
}



function calculateCal() {
    let getHeightFeet = parseFloat(document.getElementById("cal_height_feet").value);
    let getHeightInch = parseFloat(document.getElementById("cal_height_inch").value);
    let getAge = parseFloat(document.getElementById("cal_age").value);
    let getWeight = parseFloat(document.getElementById("cal_weight").value);
    let male = document.getElementById('cal_male').checked;
    let female = document.getElementById('cal_female').checked;
    let activity = document.getElementById("activity").value
    let c;
    let s;

    if (getAge, getHeightFeet, getHeightInch, getWeight) {

        document.getElementById("cal_warning").style.display = 'none';
        if (male) {
            c = "+5";
        }
        if (female) {
            c = "-161";
        }

        if (!male && !female) {
            document.getElementById("cal_warning").style.display = 'block';
            document.getElementById("cal_input_warning").innerHTML = "Please Select Gender"
        }
        if (activity == 'Sedentary (little or no exercise)') {
            s = 1.2
        }
        if (activity == 'Lightly active (light exercise/sports 1-3 days/week)') {
            s = 1.375
        }
        if (activity == 'Moderately active (moderate exercise/sports 3-5 days/week)') {
            s = 1.55
        }
        if (activity == 'Very active (hard exercise/sports 6-7 days a week)') {
            s = 1.725
        }
        if (activity == 'Extra active (very hard exercise/sports & a physical job)') {
            s = 1.9
        }

        let bmr = 10 * getWeight + 6.25 * ((getHeightFeet * 12 + getHeightInch) * 2.54) - 5 * getAge + parseFloat(c);
        let cal = bmr * s



        document.getElementById('cal').innerHTML = cal.toFixed(5)
    }
    else {
        document.getElementById("cal_warning").style.display = 'block';
        document.getElementById("cal_input_warning").innerHTML = "Please Put Valid Information"
    }


}


function clearCalData() {
    document.getElementById("cal_warning").style.display = 'none'
    document.getElementById('cal_height_feet').value = ""
    document.getElementById('cal_height_inch').value = ""
    document.getElementById('cal_weight').value = ""
    document.getElementById('cal_age').value = ""
    document.getElementById('cal').innerHTML = "_"
    document.getElementById('cal_male').checked = false
    document.getElementById('cal_female').checked = false
    document.getElementById("activity").value = 'Activity'
}