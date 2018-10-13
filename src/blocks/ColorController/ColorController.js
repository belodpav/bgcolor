import { Component } from 'react';

class ColorController extends Component {
  constructor(props) {
    super(props);
  
    const {firstColor, secondColor} = props;

    this.state = {
      firstColor,
      secondColor,
      isValid: this.isHEX(firstColor) && this.isHEX(secondColor),
      linearGradient: this.getLinearGradient('to bottom', firstColor, secondColor)
    }
  }

  onChangeFirstColor = (e) => {
    this.setState({ firstColor: e.target.value })
  }

  onChangeSecondColor = (e) => {
    this.setState({ secondColor: e.target.value })
  }

  onSubmit = () => {
    const {firstColor, secondColor} = this.state;

    this.setState({
      linearGradient: this.getLinearGradient('to bottom', firstColor, secondColor)
    })
  }
  /**
   * Returns linear-gradient correct value for css
   * property
   *
   * @param {String} direction 
   * @param {String} firstColor 
   * @param {String} secondColor 
   * @return {String}
   */
  getLinearGradient(direction, firstColor, secondColor) {
    return `linear-gradient(${direction}, ${firstColor}, ${secondColor})`;
  }

  /**
   * Returns true if s is correct hex code
   *
   * @param {String} s 
   * @return {boolean}
   */
  isHEX(s) {
    const pattern = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;

    return pattern.test(s);
  }
}

export default ColorController;
