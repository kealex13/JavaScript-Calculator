function calculateCarpet() {
  // 👇 Write your code here 👇
  
  // console.log("click");
  let room1Width=getRoomWidth(1);
  let room1Length=getRoomLength(1);
  let room2Width=getRoomWidth(2);
  let room2Length=getRoomLength(2);

  let room1Sqft=room1Width*room1Length;
  let room2Sqft=room2Width*room2Length;
  let roughSqft=room1Sqft+room2Sqft;
  let requiredSqft=roughSqft*1.1;

  showResult(requiredSqft);

  // 👆 Write your code here 👆
}