const int greenPin = 12;
const int redPin = 11;
const int yellowPin = 10;
enum State {red, green, yellow};
State lightStatus = red;
int count= 0;
int timeToSwitch = 0;
void(* resetFunc) (void) = 0;//declare reset function at address 0
void setup() {
  // put your setup code here, to run once:
  pinMode(greenPin, OUTPUT);
  pinMode(redPin, OUTPUT);
  pinMode(yellowPin, OUTPUT);

  timeToSwitch = millis() + 5000;
  Serial.begin(9600);
}

void loop() {

  if(millis() > timeToSwitch) {
    nextState();
    timeToSwitch = millis() + 2000;
    Serial.println("changing state");
    count++;
  }  
  delay(100);
  // put your main code here, to run repeatedly:
  digitalWrite( greenPin, lightStatus == green);
  digitalWrite( redPin, lightStatus == red);
  digitalWrite( yellowPin, lightStatus == yellow);
  if(count == 14){
    //reseting
    resetFunc();
    }
}

void nextState() {
  switch(lightStatus) {
    case green:
      lightStatus = yellow;
      break;
    case yellow:
     lightStatus = red;
     break;
    case red:
     lightStatus = green;
     break;
   default:
     break;
  }
}

