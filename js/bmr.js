// BMR CALCULATOR
function BMR() {

    document.getElementById("welcome-div").style.display = 'none'
    document.getElementById("BMI").style.display = 'none'
    document.getElementById("BMR").style.display = 'block'
    document.getElementById("CALORIE").style.display = 'none'
    document.getElementById("WEIGHT").style.display = 'none'

    document.getElementById("BMR").innerHTML = `
    
    
    <section class="block h-full p-5">
    <h1 class="text-4xl font-bold mb-10 text-center">Calculate BMR</h1>
    <div class="flex flex-col md:flex-row w-full">
        <div class=" form-control w-full md:w-1/2 flex flex-col p-8 bg-lime-200 rounded-2xl mx-2">

            <div class="w-full">
                <label class=" input-group  my-2">
                    <span class="bg-lime-500 w-28 font-semibold">Age</span>
                    <input min="0" id="bmr_age" type="number" placeholder="Years" class="input input-bordered w-full" />
                </label>
              
            </div>

            <div class=" w-full flex flex-row justify-center items-center">
                <label class="input-group my-2 w-full">
                    <span class="bg-lime-500 w-24 h-12  font-semibold">Gender</span>
                    <div class="w-full flex flex-row justify-center items-center">
                        <div class="w-full pl-4 flex justify-around">
                            <div>
                                <input type="radio" id="bmr_male" name="bmr-gender">
                                <label for="bmr_male" class="font-semibold">Male</label>
                            </div>
                            <div>
                                <input type="radio" id="bmr_female" name="bmr-gender">
                                <label for="bmr_female" class="font-semibold">Female</label>
                            </div>
                        </div>
                    </div>
                </label>
            </div>

            <div class=" w-full flex flex-row justify-center items-center">
                <label class="input-group my-2 w-full">
                    <span class=" bg-lime-500 w-26  font-semibold">Height</span>
                    <input min="0" id="bmr_height_feet" type="number" placeholder="feet"
                        class="input input-bordered w-full" />
                    <input min="0"  max="11" id="bmr_height_inch" type="number" placeholder="inch"
                        class="input input-bordered w-full" />
                </label>
            </div>

            <div class=" w-full flex flex-row justify-center items-center">
                <label class="input-group my-2 w-full">
                    <span class="bg-lime-500 w-24 font-semibold">Weight</span>
                    <input id="bmr_weight" min="0" type="number" placeholder="kg" class="input input-bordered w-full" />
                </label>
            </div>
            <div id="bmr_warning" class="alert alert-error shadow-lg">
            <div>
                   <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
             <span id="bmr_input_warning""></span>
             </div>
          </div>
            <button  onclick="calculateBMR()"
                class="btn btn-primary mt-4 px-10 w-full hover:text-white hover:bg-lime-800">Calculate
            </button>
            <button onclick="clearBmrData()"
            class="btn bg-red-500 text-white border-current text-center mt-10 mx-auto px-10 w-1/5 hover:text-white hover:bg-red-800">Clear
        </button>
        </div>

        <div id="bmr_result"
            class="w-full md:w-1/2 p-8 bg-lime-200 rounded-2xl mx-2 mt-6 md:mt-0 flex flex-col justify-center items-center">
            <h1 class="text-2xl font-bold ">Your BMR: <span id="bmr"
                    class="text-neutral">_</span> Kcal/day </h1>
                
        </div>
    </div>
</section>
    
    `
    document.getElementById("bmr_warning").style.display = 'none';
}




function calculateBMR() {
    let getHeightFeet = parseFloat(document.getElementById("bmr_height_feet").value);
    let getHeightInch = parseFloat(document.getElementById("bmr_height_inch").value);
    let getAge = parseFloat(document.getElementById("bmr_age").value);
    let getWeight = parseFloat(document.getElementById("bmr_weight").value);
    let male = document.getElementById('bmr_male').checked;
    let female = document.getElementById('bmr_female').checked;
    let c;

    if (getAge, getHeightFeet, getHeightInch, getWeight) {

        document.getElementById("bmr_warning").style.display = 'none';
        if (male) {
            c = "+5";
        }
        if (female) {
            c = "-161";
        }
        if (!male && !female) {
            document.getElementById("bmr_warning").style.display = 'block';
            document.getElementById("bmr_input_warning").innerHTML = "Please Select Gender"
        }

        let bmr = 10 * getWeight + 6.25 * ((getHeightFeet * 12 + getHeightInch) * 2.54) - 5 * getAge + parseFloat(c);


        document.getElementById('bmr').innerHTML = bmr.toFixed(3)
    }
    else {
        document.getElementById("bmr_warning").style.display = 'block';
        document.getElementById("bmr_input_warning").innerHTML = "Please Put Valid Information"
    }


}


function clearBmrData() {
    document.getElementById("bmr_input_warning").style.display = 'none'
    document.getElementById('bmr_height_feet').value = ""
    document.getElementById('bmr_height_inch').value = ""
    document.getElementById('bmr_weight').value = ""
    document.getElementById('bmr_age').value = ""
    document.getElementById('bmr').innerHTML = "_"
    document.getElementById('bmr_male').checked = false
    document.getElementById('bmr_female').checked = false
}