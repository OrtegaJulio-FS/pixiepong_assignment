// We first need to create a new PixiJS application instance
const app = new PIXI.Application();
// Now we need to call an asyncronous method on our PixiJS
// application called "init" which initializes our display
// using a defined width and height measured in pixels.
await app.init({
  backgroundColor: "#3398b9",
  width: 800,
  height: 800,
});
// Now all we need to do is to tell PixiJS what HTMLElement
// in our DOM we want to show our game using a DOM helper
document.getElementById("game").appendChild(app.canvas);
// First lets create ourselves a new graphic instance to
// represent our "cirlce" on the screen and assign it to
// a variable called "circle"
const circle = new PIXI.Graphics();
// Now we can set it's "fill" color to a nice fun yellow!
circle.beginFill("#f5ef42");
// Now we need to tell Pixi to draw an actual circle
// the three arguments we need are: X, Y, and radius size
// all measured in pixels. So this cirlce will start at
// zero X and zero Y coordinates with a 5 pixel radius
circle.drawCircle(400, 400, 5);
// Now we need to call an end to our "fill" that we started
// earlier with our "beginFill" call with the "endFill" call
circle.endFill();
// Now finally!!! Let's add our cirlce to our game stage
// to see what happens using the addChild call
app.stage.addChild(circle);
