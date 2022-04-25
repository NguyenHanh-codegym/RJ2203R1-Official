import React, { Component } from 'react';
import CalculatorTitle from './calculatorTitle.js';
import OutputScreen from './outputScreen.js';
import Button from './button.js';

class Calculator extends Component {
    // Trước tiên, cần tạo constructor để khởi tạo các đối tượng sau:
    // 1. Trạng thái: state ( question: khi khởi tạo là giá trị rỗng, sau khi user nhập vào sẽ lưu giá trị vào)
// và trạng thái (answer: khi user tính toán sẽ lưu giá trị tính toán vào)
// 2. Sự kiện click vào sẽ thực hiện tính toán
    constructor(props) {
        super(props);
        this.state = {
            question: '',
            answer: ''
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event){
        const value = event.target.value;
        switch (value) {
            case '=': {
                if (this.state.question!=='')
                {
                    var ans='';
                    try
                    {
                        ans = eval(this.state.question);
                    }
                    catch(err)
                    {
                        this.setState({answer: "Math Error"});
                    }
                    if (ans===undefined)
                        this.setState({answer: "Math Error"});
                    else
                        this.setState({ answer: ans , question: this.state.question});
                    break;
                }
            }
            case 'Clear': {
                this.setState({ question: '', answer: '' });
                break;
            }

            case 'Delete': {
                var str = this.state.question;
                str = str.substring(0,str.length-1);
                this.setState({question: str});
                break;
            }

            default: {
                this.setState({ question: this.state.question += value})
                break;
            }
        }
    }






    render() {
        return (
            <div className="frame">
                <CalculatorTitle title="Calculator" /> 
                <div className="mainCalc">
                    <OutputScreen /> 
                    <div className="button-row">
                        <Button className="btnaction" label={'Clear'} />
                        <Button className="btnaction" label={'Delete'} />
                        <Button className="btnaction" label={'/'} />
                    </div>
                    <div className="button-row">
                        <Button label={'8'} />
                        <Button label={'9'} />
                        <Button className="btnaction" label={'+'} />
                    </div>
                    <div className="button-row">
                        <Button label={'6'} />
                        <Button label={'7'} />
                        <Button className="btnaction" label={'*'} />
                    </div>
                    <div className="button-row">
                        <Button label={'4'} />
                        <Button label={'5'} />
                        <Button className="btnaction" label={'-'} />
                    </div>
                    <div className="button-row">
                        <Button label={'2'} />
                        <Button label={'3'} />
                        <Button className="btnaction" label={'.'} />
                    </div>
                    <div className="button-row">
                        <Button label={'0'} />
                        <Button label={'1'} />
                        <Button className="btnaction" label={'='} />
                    </div>
                </div>
            </div>

        );
    }

}
export default Calculator;