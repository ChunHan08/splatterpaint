function onMouseMove(event){
  var path = new Path.Circle({
    center: event.middlePoint,
    radius: Math.round(Math.random() * 40) + 7
})
  path.fillColor = {
    hue: event.count * 9,
    saturation: 4,
    brightness: 4
  }
}