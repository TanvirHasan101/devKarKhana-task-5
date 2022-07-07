// IDEAL WEIGHT CALCULATOR


function idealWeight() {

    document.getElementById("welcome-div").style.display = 'none'
    document.getElementById("BMI").style.display = 'none'
    document.getElementById("BMR").style.display = 'none'
    document.getElementById("CALORIE").style.display = 'none'
    document.getElementById("WEIGHT").style.display = 'block'


    document.getElementById("WEIGHT").innerHTML = `
    
    <section class="block h-full p-10">
    <h1 class="text-4xl font-bold mb-10 text-center">Calculate IdealWeight</h1>
    <div class="flex flex-col md:flex-row w-full">
        <div class=" form-control w-full md:w-1/2 flex flex-col p-8 bg-lime-200 rounded-2xl mx-2">
            

        <div class=" w-full flex flex-row justify-center items-center">
        <label class="input-group my-2 w-full">
            <span class="bg-lime-500 w-24 h-12  font-semibold">Gender</span>
            <div class="w-full flex flex-row justify-center items-center">
                <div class="w-full pl-4 flex justify-around">
                    <div>
                        <input type="radio" id="IdealWeight_male" name="IdealWeight-gender">
                        <label for="IdealWeight_male" class="font-semibold">Male</label>
                    </div>
                    <div>
                        <input type="radio" id="IdealWeight_female" name="IdealWeight-gender">
                        <label for="IdealWeight_female" class="font-semibold">Female</label>
                    </div>
                </div>
            </div>
        </label>
    </div>
            <div class=" w-full flex flex-row justify-center items-center">
                <label class="input-group my-2 w-full">
                    <span class=" bg-lime-500 w-26  font-semibold">Height</span>
                    <input min="0" id="IdealWeight_height_feet" type="number" placeholder="feet"
                        class="input input-bordered w-full" />
                    <input min="0" max="11" id="IdealWeight_height_inch" type="number" placeholder="inch"
                        class="input input-bordered w-full" />
                </label>
            </div>

           
            <div id="IdealWeight_warning" class="alert alert-error shadow-lg">
            <div>
                   <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
             <span id="IdealWeight_input_warning"></span>
             </div>
          </div>
            <button onclick="calculateIdealWeight()"
                class="btn btn-primary mt-4 px-10 w-full hover:text-white hover:bg-lime-800">Calculate
            </button>
            <button onclick="clearIdealWeightData()"
            class="btn bg-red-500 text-white border-current text-center mt-10 mx-auto px-10 w-1/5 hover:text-white hover:bg-red-800">Clear
           </button>
        </div>

        <div id="IdealWeight_result"
            class="w-full md:w-1/2 p-8 bg-lime-200 rounded-2xl mx-2 mt-6 md:mt-0 flex flex-col justify-center items-center">
            <h1 class="text-2xl font-bold ">Your IdealWeight: <span id="IdealWeight"
                    class="text-neutral">_</span>kg</h1>
            <span id="category_IdealWeight"></span>
        </div>
    </div>
</section>
 
`
    document.getElementById("IdealWeight_warning").style.display = 'none';
}


function calculateIdealWeight() {
    let getHeightFeet = parseFloat(document.getElementById("IdealWeight_height_feet").value);
    let getHeightInch = parseFloat(document.getElementById("IdealWeight_height_inch").value);
    let male = document.getElementById('IdealWeight_male').checked;
    let female = document.getElementById('IdealWeight_female').checked;
    let g;
    if (male) {
        g = 50
    }
    if (female) {
        g = 45.5
    }
    if (!male && !female) {
        document.getElementById("IdealWeight_warning").style.display = 'block';
        document.getElementById("IdealWeight_input_warning").innerHTML = "Please Select Gender"
    }
    if (getHeightFeet, getHeightInch) {
        let ans = g + (0.91 * ((((getHeightFeet * 12) + getHeightInch) * 2.54) - 152.4));

        document.getElementById('IdealWeight').innerHTML = ans.toFixed(3);
    }
    else {
        document.getElementById("IdealWeight_warning").style.display = 'block';
        document.getElementById("IdealWeight_input_warning").innerHTML = "Please Put Valid Information"
    }
}

function clearIdealWeightData() {
    document.getElementById("IdealWeight_height_feet").value = "";
    document.getElementById("IdealWeight_height_inch").value = "";
    let male = document.getElementById('IdealWeight_male').value = false;
    let female = document.getElementById('IdealWeight_female').value = false;
    document.getElementById("IdealWeight_warning").style.display = 'none';
    document.getElementById('IdealWeight').innerHTML = '_'
}