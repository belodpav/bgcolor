import React from 'react';
import './App.css';

import Input from '../Input/Input';
import Button from '../Button/Button';
import ColorController from '../ColorController/ColorController';

class App extends ColorController {
  render() {
    const {firstColor, secondColor, linearGradient} = this.state;
    const {
      isHEX,
      onSubmit,
      onChangeFirstColor,
      onChangeSecondColor
    } = this;

    const appWrapperStyle = {
      background: linearGradient
    };

    return (
      <div className="App-Wrapper" style={appWrapperStyle}>
        <div className="App-Controls">
          <Input
            className="App-ControlsInput"
            value={firstColor}
            onChange={onChangeFirstColor}
            validate={isHEX}
          />
          <Input
            className="App-ControlsInput"
            value={secondColor}
            onChange={onChangeSecondColor}
            validate={isHEX}
          />
          <Button onClick={onSubmit}>Go</Button>
        </div>
      </div>
    );
  }
}

export default App;
