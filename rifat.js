// ........................Blog click another HTML.......................
document.getElementById('btn-blog').addEventListener('click',function(){
    window.location.href= 'myans.html';
})

    //   ..............Background Color Change .....................
document.getElementById("myDiv").addEventListener("mouseover", function() {
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        myDiv.style.backgroundColor = "#" + randomColor;
      });
      myDiv.addEventListener("mouseout", function() {
        myDiv.style.backgroundColor = "";
      });
document.getElementById("myDivR").addEventListener("mouseover", function() {
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        myDivR.style.backgroundColor = "#" + randomColor;
      });
      myDivR.addEventListener("mouseout", function() {
        myDivR.style.backgroundColor = "";
      });
document.getElementById("myDivP").addEventListener("mouseover", function() {
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        myDivP.style.backgroundColor = "#" + randomColor;
      });
      myDivP.addEventListener("mouseout", function() {
        myDivP.style.backgroundColor = "";
      });
document.getElementById("myDivRh").addEventListener("mouseover", function() {
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        myDivRh.style.backgroundColor = "#" + randomColor;
      });
      myDivRh.addEventListener("mouseout", function() {
        myDivRh.style.backgroundColor = "";
      });
document.getElementById("myDivPn").addEventListener("mouseover", function() {
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        myDivPn.style.backgroundColor = "#" + randomColor;
      });
      myDivPn.addEventListener("mouseout", function() {
        myDivPn.style.backgroundColor = "";
      });
document.getElementById("myDivE").addEventListener("mouseover", function() {
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        myDivE.style.backgroundColor = "#" + randomColor;
      });
      myDivE.addEventListener("mouseout", function() {
        myDivE.style.backgroundColor = "";
      });


// Triangle
document.getElementById('triangle-calculator').addEventListener('click',function(){
    const triangleBase = document.getElementById('triangle-b');
    const triangleBaseString = triangleBase.value;
    const triangle = parseFloat(triangleBaseString);
    const heightTriangle = document.getElementById('triangle-h');
    const heightValueString = heightTriangle.value;
    const heightValue = parseFloat(heightValueString);
    triangleBase.value ='';
    heightTriangle.value = '';
    const nameT = document.getElementById('triangle-name').innerText;

    let triangleResult = (0.5 * triangle * heightValue);
    if(!isNaN(triangleResult)){
      console.log(DisplayData(nameT,Math.abs(triangleResult.toFixed(2))))
  }
  else {
      alert('Enter both valid number');
  } 
})

// Rectangle
document.getElementById('rectangle-calculator').addEventListener('click',function(){
    const widthRectangular = document.getElementById('rectangler-w');
    const widthValueString = widthRectangular.value;
    const widthValue = parseFloat(widthValueString);
    const lengthRectangle = document.getElementById('rectangler-l');
    const lengthValueString = lengthRectangle.value;
    const lengthtValue = parseFloat(lengthValueString);
    widthRectangular.value ='';
    lengthRectangle.value = '';
    const nameT = document.getElementById('rectangler-name').innerText;
    let rectanguleResult = (widthValue * lengthtValue);
    if(!isNaN(rectanguleResult)){
      console.log(DisplayData(nameT,Math.abs(rectanguleResult.toFixed(2))))
  }
  else {
      alert('Enter both valid number')
  } 
})

// Parallelogram
document.getElementById('parallelogram-calculator').addEventListener('click',function(){
  const parallelogramBase = document.getElementById('parallelogram-b');
  const parallelogramBaseString = parallelogramBase.value;
  const parallelogram = parseFloat(parallelogramBaseString);
  const heightparallelogram = document.getElementById('parallelogram-h');
  const parallelogramValueString = heightparallelogram.value;
  const parallelogramValue = parseFloat(parallelogramValueString);
  parallelogram.value ='';
  heightparallelogram.value = '';
  const nameT = document.getElementById('parallelogram-name').innerText;
  const parallelogramResult = (parallelogram * parallelogramValue);
  DisplayData(nameT, parallelogramResult.toFixed(2));
})

// Rhombus
document.getElementById('rhombus-calculator').addEventListener('click',function(){
  const rhombusBase = document.getElementById('rhombus-d1');
  const rhombusBaseString = rhombusBase.value;
  const rhombus = parseFloat(rhombusBaseString);
  const heightrhombus = document.getElementById('rhombus-d2');
  const rhombusValueString = heightrhombus.value;
  const rhombusValue = parseFloat(rhombusValueString);
  rhombusBase.value ='';
  heightrhombus.value = '';
  const nameT = document.getElementById('rhombus-name').innerText;
  const rhombusResult = (0.5 * rhombus * rhombusValue);
  DisplayData(nameT, rhombusResult.toFixed(2));
})

// Pentagon
document.getElementById('pentagon-calculator').addEventListener('click',function(){
  const pentagonBaseP = document.getElementById('pentagon-p');
  const pentagonString = pentagonBaseP.value;
  const pentagon = parseFloat(pentagonString);
  const pentagonBase = document.getElementById('pentagon-b');
  const pentagonValueString = pentagonBase.value;
  const pentagonValue = parseFloat(pentagonValueString);
  pentagonBaseP.value ='';
  pentagonBase.value = '';
  const nameT = document.getElementById('pentagon-name').innerText;
  const pentagonResult = (0.5 * pentagon * pentagonValue);
  DisplayData(nameT, pentagonResult.toFixed(2));
})

// Ellipse
document.getElementById('ellipse-calculator').addEventListener('click',function(){
  const ellipseBase = document.getElementById('ellipse-a');
  const ellipseString = ellipseBase.value;
  const ellipse = parseFloat(ellipseString);
  const ellipseB = document.getElementById('ellipse-b');
  const ellipseValueString = ellipseB.value;
  const ellipseValue = parseFloat(ellipseValueString);
  ellipseBase.value ='';
  ellipseB.value = '';
  const nameT = document.getElementById('ellipse-name').innerText;
  const ellipseResult = (3.1416 * ellipse * ellipseValue);
  DisplayData(nameT, ellipseResult.toFixed(2));
})


