function calculateTriangleArea(){
    // get triangle base value
    const baseField = document.getElementById('triangle-base');
    const baseValueText = baseField.value;
    const base = parseFloat(baseValueText);
    // get triangle height
    const heightField = document.getElementById('triangle-height');
    const heightValueText = heightField.value;
    const height = parseFloat(heightValueText);
    const area = 0.5 * base * height ;
    // show  triangle area
    const areaSpan = document.getElementById('triangle-area');
    areaSpan.innerText = area;
}
function calculateRectangleArea(){
    const widthField = document.getElementById('rectangle-width');
    const widthValueText = widthField.value;
    const width = parseFloat(widthValueText);
    // get length
    const lengthField = document.getElementById('rectangle-length');
    const lengthValueText = lengthField.value;
    const length = parseFloat(lengthValueText);
    const area = width * length;
    // show the rectangle area
    const areaSpan = document.getElementById('rectangle-area');
    areaSpan.innerText = area;


}
/* function calculateParallelogramArea(){
    // get base value
    const baseField = document.getElementById('parallelogram-base');
    const baseValueText = baseField.value;
    const base = parseFloat(baseValueText);
    // get height
    const heightField = document.getElementById('parallelogram-height');
    const heightValueText = heightField.value;
    const height = parseFloat(heightValueText);
    const area = base * height ;
    // show area
    const areaSpan = document.getElementById('parallelogram-area');
    areaSpan.innerText = area;
} */
function calculateParallelogramArea(){
    const base =getInputValue('parallelogram-base');
    const height =getInputValue('parallelogram-height');
    const area = base * height;
    setElementInnerText('parallelogram-area', area);

}
function calculateEllipseArea(){
    const majorRadius =  getInputValue('ellipse-first-radius');
    const minorRadius = getInputValue('ellipse-second-radius');
    const area = 3.14 * majorRadius * minorRadius;
    setElementInnerText('ellipse-area', area);
}

function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;

}
// reusable set
function setElementInnerText(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}