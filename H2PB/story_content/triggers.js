function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5YO7cYibo44":
        Script1();
        break;
      case "6PefvahZR26":
        Script2();
        break;
      case "5geN88WixT9":
        Script3();
        break;
      case "6ayzeThN6UI":
        Script4();
        break;
      case "5WltAQfPtzJ":
        Script5();
        break;
      case "5vLNott8d3w":
        Script6();
        break;
      case "5lPOb8nLQVE":
        Script7();
        break;
      case "6G4RCmiKmWa":
        Script8();
        break;
      case "6DSnbpGCsLG":
        Script9();
        break;
      case "5rxZq5j2mIu":
        Script10();
        break;
      case "6Obw3u15TRc":
        Script11();
        break;
      case "6PZ6zOnmELE":
        Script12();
        break;
      case "6kecLjNnBT9":
        Script13();
        break;
      case "6ftbifMEHi3":
        Script14();
        break;
      case "6Xt4xnOHo44":
        Script15();
        break;
      case "6XVu9DRroCt":
        Script16();
        break;
      case "5fn44nbms0a":
        Script17();
        break;
      case "6esLznNW1OF":
        Script18();
        break;
      case "6AVEceNWjS7":
        Script19();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  player.once(() => {
const target = object('6PCmjUuJhy5');
const duration = 750;
const easing = 'ease-out';
const id = '6Ozys9JoRc5';
const growAmount = 0;
const delay = 7000;
addToTimeline(
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script2 = function()
{
  player.once(() => {
const target = object('5yZkC5ftDxt');
const duration = 750;
const easing = 'ease-out';
const id = '69gomubaOii';
const shrinkAmount = 0.3;
const delay = 0;
addToTimeline(
target.animate([
{ scale: `${1 - shrinkAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script3 = function()
{
  player.once(() => {
const target = object('6PCmjUuJhy5');
const duration = 750;
const easing = 'ease-out';
const id = '5rGSLwp48Dv';
const shrinkAmount = 0.3;
const delay = 5000;
addToTimeline(
target.animate([
{ scale: `${1 - shrinkAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script4 = function()
{
  player.once(() => {
const target = object('5yZkC5ftDxt');
const duration = 750;
const easing = 'ease-out';
const id = '5VhMEWzsvB0';
const growAmount = 0;
const delay = 8969;
addToTimeline(
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script5 = function()
{
  const target = object('65856p2ABLW');
const duration = 750;
const easing = 'ease-out';
const id = '6hoxbaLT9Er';
const shrinkAmount = 0.3;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 - shrinkAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script6 = function()
{
  const target = object('6Glr4VpJwak');
const duration = 1000;
const easing = 'ease-out';
const id = '6nTQRxtLhwp';
const shrinkAmount = 0.3;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 - shrinkAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script7 = function()
{
  player.once(() => {
const target = object('5l8HhbVWWau');
const duration = 750;
const easing = 'ease-out';
const id = '5z84WIKHQ6R';
const shrinkAmount = 0;
const delay = 0;
addToTimeline(
target.animate([
{ scale: `${1 - shrinkAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script8 = function()
{
  player.once(() => {
const target = object('6RvQepofsFx');
const duration = 750;
const easing = 'ease-out';
const id = '6mNUOZZLq4V';
const shrinkAmount = 0.2;
const delay = 1008;
addToTimeline(
target.animate([
{ scale: `${1 - shrinkAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script9 = function()
{
  player.once(() => {
const target = object('5aNlafdxD6J');
const duration = 750;
const easing = 'ease-out';
const id = '6pkPUrdqlh1';
const shrinkAmount = 0.2;
const delay = 1008;
addToTimeline(
target.animate([
{ scale: `${1 - shrinkAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script10 = function()
{
  player.once(() => {
const target = object('67GOgcRAYZk');
const duration = 750;
const easing = 'ease-out';
const id = '615XZ9uVCV7';
const shrinkAmount = 0.2;
const delay = 1008;
addToTimeline(
target.animate([
{ scale: `${1 - shrinkAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script11 = function()
{
  const target = object('6OoUCVuWkgi');
const duration = 500;
const easing = 'ease-out';
const id = '67NhHtU5vlp';
const shakeAmount = 5;
player.addForTriggers(
id,
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script12 = function()
{
  const target = object('6OoUCVuWkgi');
const duration = 500;
const easing = 'ease-out';
const id = '67NhHtU5vlp';
const shakeAmount = 5;
player.addForTriggers(
id,
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script13 = function()
{
  player.once(() => {
const target = object('6C9izHbZ8GT');
const duration = 750;
const easing = 'ease-out';
const id = '6KuHBf7cr2c';
const shrinkAmount = 0.3;
const delay = 0;
addToTimeline(
target.animate([
{ scale: `${1 - shrinkAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script14 = function()
{
  const target = object('5WA3cprhSxL');
const duration = 1000;
const easing = 'ease-out';
const id = '5kyRHYbcOIQ';
const growAmount = 0.3;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script15 = function()
{
  player.once(() => {
const target = object('6ZnzPwzvaSE');
const duration = 750;
const easing = 'ease-out';
const id = '5bu2Y0WvbCJ';
const growAmount = 0.3;
const delay = 4000;
addToTimeline(
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script16 = function()
{
  player.once(() => {
const target = object('5VycZLwd7K3');
const duration = 750;
const easing = 'ease-out';
const id = '5bu2Y0WvbCJ';
const growAmount = 0.3;
const delay = 4000;
addToTimeline(
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script17 = function()
{
  player.once(() => {
const target = object('5sxXKSPlYJm');
const duration = 750;
const easing = 'ease-out';
const id = '5bu2Y0WvbCJ';
const growAmount = 0.3;
const delay = 4000;
addToTimeline(
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script18 = function()
{
  player.once(() => {
const target = object('6e01qlHhQUm');
const duration = 100;
const easing = 'ease-out';
const id = '6Nj3F5AiRDq';
const growAmount = 0.3;
const delay = 3000;
addToTimeline(
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script19 = function()
{
  player.once(() => {
const target = object('6mVUk5SWysE');
const duration = 100;
const easing = 'ease-out';
const id = '6QA9joKOxzf';
const growAmount = 0.3;
const delay = 3000;
addToTimeline(
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

};
